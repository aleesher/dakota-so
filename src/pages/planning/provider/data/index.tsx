import _groupBy from "lodash/groupBy";
import _sortBy from "lodash/sortBy";
import React, { useContext } from "react";
import { CALENDAR_ORDER_TYPE, SORT } from "../../constants";
import { roundUpToQuarterHour } from "../../helpers";
import { TUpdateOrderData } from "../../types";
import { PlanningDispatchContext, PlanningStateContext } from "../context";
import CalendarEmployee from "./collections/CalendarEmployee";
import CalendarOrder from "./collections/CalendarOrder";
import OrderCollection from "./collections/OrderCollection";
import OrderStack from "./collections/OrderStack";
import useEmployeeService from "./employeeService";
import {
  getEmployee,
  mergeSelectedAndTargetStacks,
  moveSelectedOrdersToStack,
  parseEmployeeOrders,
  removeAndReturnWorkOrder
} from "./helpers";
import useOrderService from "./orderService";

function useDataState() {
  const state = useContext(PlanningStateContext);

  return state.data;
}

function useDataDispatch() {
  const dispatch = useContext(PlanningDispatchContext);
  const orderService = useOrderService();
  const employeeService = useEmployeeService();

  function fetchEmployees(codes: string[]) {
    employeeService
      .fetchSelected(codes)
      .then(({ employees, resourceCodes }) => {
        const sortedEmployees = _sortBy(employees, "firstName");

        dispatch(draft => {
          if (draft.pageState.employeeSort === SORT.DESC) {
            sortedEmployees.reverse();
          }
          draft.settings.employeeResourceCodes = resourceCodes;

          draft.data.employees = sortedEmployees.map(
            e => new CalendarEmployee(e)
          );
          if (draft.pageState.employeeSort === SORT.DESC) {
            draft.data.employees.reverse();
          }
        });
      });
  }

  function fetchOrders() {
    orderService.fetchOrders().then(data => {
      dispatch(draft => {
        const sortedOrders = _sortBy(data, "code").map(d => {
          const order = new CalendarOrder(
            d,
            CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER
          );
          order.recalculateStartAndWidth(draft.settings.orderTimeScale);
          return order;
        });
        draft.data.orders = new OrderCollection(sortedOrders);
      });
    });
  }

  function fetchEmployeeOrders() {
    orderService.fetchEmployeeOrders().then(data => {
      dispatch(draft => {
        const orders = data.map(d => {
          const order = new CalendarOrder(
            d,
            CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER
          );
          order.recalculateStartAndWidth(draft.settings.employeeTimeScale);
          return order;
        });

        // group orders by resource code
        const byEmployee = _groupBy(orders, "soEmployeeCode");
        draft.data.employees.forEach(e => {
          const { orders, stacks } = parseEmployeeOrders(
            draft.settings.employeeTimeScale,
            byEmployee[e.resource] || []
          );
          e.setOrders(orders);
          e.setStacks(stacks);
          e.recalculateLineHeight(draft.settings.collapseOrders);
        });
      });
    });
  }

  function setTopOrderOfStack(
    resourceCode: string,
    stackId: string,
    orderCode: string
  ) {
    dispatch(draft => {
      const employee = getEmployee(draft, resourceCode);
      const stack = employee.getStack(stackId);
      stack.setTopOrder(orderCode);
    });
  }

  function onResizeOrder(
    resourceCode: string,
    orderCode: string,
    newStart: number,
    newEnd: number
  ) {
    dispatch(draft => {
      let order: CalendarOrder;

      // only top calendar's orders have resource code
      if (resourceCode) {
        const employee = getEmployee(draft, resourceCode);
        order = employee.getOrder(orderCode);
        order.updateResizedOrder(
          draft.settings.employeeTimeScale,
          newStart,
          newEnd
        );
      } else {
        order = draft.data.orders.get(orderCode);
        order.updateResizedOrder(
          draft.settings.orderTimeScale,
          newStart,
          newEnd
        );
      }

      const data = order.prepareData();

      orderService.updateOrder(orderCode, data).then(() => {
        if (resourceCode) {
          fetchEmployeeOrders();
        } else {
          fetchOrders();
        }
      });
    });
  }

  function onResizeStackOrder(
    isCollapsed: boolean,
    resourceCode: string,
    stackId: string,
    orderCode: string,
    newStart: number,
    newEnd: number
  ) {
    dispatch(draft => {
      const employee = getEmployee(draft, resourceCode);
      const stack = employee.getStack(stackId);

      let data: TUpdateOrderData[];

      if (isCollapsed) {
        stack.resizeAllOrders(
          draft.settings.employeeTimeScale,
          orderCode,
          newStart,
          newEnd
        );
        data = stack.prepareData();
      } else {
        stack.resizeOrder(
          draft.settings.employeeTimeScale,
          orderCode,
          newStart,
          newEnd
        );
        const order = stack.getOrder(orderCode);
        data = [order.prepareData()];
      }

      orderService.updateSeveralOrders(data).then(() => {
        fetchEmployeeOrders();
      });
    });
  }

  function onDropToOrder(orderCode: string, resourceCode: string) {
    dispatch(draft => {
      const employee = getEmployee(draft, resourceCode);

      const targetOrder = employee.getOrder(orderCode);
      employee.removeOrder(orderCode);

      const newStack = OrderStack.fromOrders([targetOrder]);
      employee.addStack(newStack);

      const { data, needToRefetchUnassignedOrders } = moveSelectedOrdersToStack(
        draft,
        newStack
      );
      newStack.getTopOrder().isSaving = true;

      orderService.updateSeveralOrders(data).then(() => {
        fetchEmployeeOrders();
        if (needToRefetchUnassignedOrders) {
          fetchOrders();
        }
      });
    });
  }

  function onDropToTheSameEmployee(
    orderCode: string,
    resourceCode: string,
    newStart: number
  ) {
    dispatch(draft => {
      const employee = getEmployee(draft, resourceCode);

      let order: CalendarOrder;

      const selectedOrder = draft.pageState.selectedOrders[orderCode];

      if (selectedOrder.type === CALENDAR_ORDER_TYPE.STACK_ORDER) {
        order = removeAndReturnWorkOrder(draft, orderCode);
        employee.addOrder(order);
      } else {
        order = employee.getOrder(orderCode);
      }

      order.setNewStart(draft.settings.employeeTimeScale, newStart);
      order.recalculateEndTime(draft.settings.employeeTimeScale);
      order.isSaving = true;

      // set selected
      draft.pageState.selectedOrders[orderCode].type =
        CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER;

      const data = order.prepareData();
      orderService.updateOrder(orderCode, data).then(fetchEmployeeOrders);
    });
  }

  function onDropToEmployee(
    orderCode: string,
    newResourceCode: string,
    newStart: number
  ) {
    dispatch(draft => {
      const employee = getEmployee(draft, newResourceCode);
      const order = removeAndReturnWorkOrder(draft, orderCode);

      const needToRefetchUnassignedOrders =
        order.type === CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER;

      employee.addOrder(order);

      order.setNewStart(draft.settings.employeeTimeScale, newStart);
      order.recalculateEndTime(draft.settings.employeeTimeScale);
      order.isSaving = true;

      // set selected
      draft.pageState.selectedOrders[orderCode].type =
        CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER;
      draft.pageState.selectedOrders[orderCode].resourceCode = newResourceCode;

      const data = order.prepareData();
      orderService.updateOrder(orderCode, data).then(() => {
        fetchEmployeeOrders();
        if (needToRefetchUnassignedOrders) {
          fetchOrders();
        }
      });
    });
  }

  function onDropMultipleToEmployee(resourceCode: string, newStart: number) {
    dispatch(draft => {
      const employee = getEmployee(draft, resourceCode);

      let startTime = draft.settings.employeeTimeScale.getTime(newStart);
      startTime = roundUpToQuarterHour(startTime);
      const tempOrderStack = new OrderStack(startTime, newStart);
      employee.addStack(tempOrderStack);

      const { data, needToRefetchUnassignedOrders } = moveSelectedOrdersToStack(
        draft,
        tempOrderStack
      );

      employee.recalculateLineHeight(draft.settings.collapseOrders);
      tempOrderStack.getTopOrder().isSaving = true;

      orderService.updateSeveralOrders(data).then(() => {
        fetchEmployeeOrders();
        if (needToRefetchUnassignedOrders) {
          fetchOrders();
        }
      });
    });
  }

  function onDropToOrderCalendar(orderCode: string, newStart: number) {
    dispatch(draft => {
      const order = draft.data.orders.get(orderCode);

      order.setNewStart(draft.settings.orderTimeScale, newStart);
      order.recalculateEndTime(draft.settings.orderTimeScale);
      order.isSaving = true;

      // set selected
      draft.pageState.selectedOrders = {
        [orderCode]: {
          type: CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER
        }
      };
      draft.pageState.totalSelected = 1;

      const data = order.prepareData();
      orderService.updateOrder(orderCode, data).then(fetchOrders);
    });
  }

  function onDropToStack(resourceCode: string, stackId: string) {
    dispatch(draft => {
      const employee = getEmployee(draft, resourceCode);
      const stack = employee.getStack(stackId);

      const { data, needToRefetchUnassignedOrders } = moveSelectedOrdersToStack(
        draft,
        stack
      );
      employee.recalculateLineHeight(draft.settings.collapseOrders);
      stack.getTopOrder().isSaving = true;

      orderService.updateSeveralOrders(data).then(() => {
        fetchEmployeeOrders();
        if (needToRefetchUnassignedOrders) {
          fetchOrders();
        }
      });
    });
  }

  // stack actions

  function onDropStackToTheSameEmployee(
    stacckId: string,
    resourceCode: string,
    newStart: number
  ) {
    dispatch(draft => {
      const employee = getEmployee(draft, resourceCode);
      const stack = employee.getStack(stacckId);
      stack.setNewStart(draft.settings.employeeTimeScale, newStart);
      stack.getTopOrder().isSaving = true;

      // set selected
      draft.pageState.selectedStackId = "";

      const data = stack.prepareData();
      orderService.updateSeveralOrders(data).then(fetchEmployeeOrders);
    });
  }

  function onDropStackToEmployee(
    stackId: string,
    resourceCode: string,
    newResourceCode: string,
    newStart: number
  ) {
    dispatch(draft => {
      const srcEmployee = getEmployee(draft, resourceCode);
      const stack = srcEmployee.removeStack(stackId);
      stack.setNewStart(draft.settings.employeeTimeScale, newStart);

      const targetEmployee = getEmployee(draft, newResourceCode);
      targetEmployee.addStack(stack);

      targetEmployee.recalculateLineHeight(draft.settings.collapseOrders);
      stack.getTopOrder().isSaving = true;

      // set selected
      draft.pageState.selectedStackId = "";

      const data = stack.prepareData();
      orderService.updateSeveralOrders(data).then(fetchEmployeeOrders);
    });
  }

  function onDropStackToOrder(
    stackId: string,
    // src
    resourceCode: string,
    // target
    orderCode: string,
    newResourceCode: string
  ) {
    dispatch(draft => {
      const srcEmployee = getEmployee(draft, resourceCode);
      const stack = srcEmployee.removeStack(stackId);

      const targetEmployee = getEmployee(draft, newResourceCode);
      const targetOrder = targetEmployee.removeOrder(orderCode);
      const newStack = OrderStack.fromOrders([targetOrder]);
      targetEmployee.addStack(newStack);

      const data = mergeSelectedAndTargetStacks(draft, stack, newStack);

      targetEmployee.recalculateLineHeight(draft.settings.collapseOrders);
      newStack.getTopOrder().isSaving = true;

      orderService.updateSeveralOrders(data).then(() => {
        fetchEmployeeOrders();
      });
    });
  }

  function onDropStackToStack(
    stackId: string,
    // src
    resourceCode: string,
    // target
    newStackId: string,
    newResourceCode: string
  ) {
    dispatch(draft => {
      const srcEmployee = getEmployee(draft, resourceCode);
      const stack = srcEmployee.removeStack(stackId);

      const targetEmployee = getEmployee(draft, newResourceCode);
      const targeStack = targetEmployee.getStack(newStackId);

      const data = mergeSelectedAndTargetStacks(draft, stack, targeStack);

      targetEmployee.recalculateLineHeight(draft.settings.collapseOrders);
      targeStack.getTopOrder().isSaving = true;

      orderService.updateSeveralOrders(data).then(() => {
        fetchEmployeeOrders();
      });
    });
  }

  // work order lock/unlock actions
  function lockOrders(ordersIds: string[], isLocked: boolean) {
    dispatch(draft => {
      draft.data.orders.lockOrder(ordersIds, isLocked);
    });
  }

  return {
    fetchEmployees,
    fetchOrders,
    fetchEmployeeOrders,
    setTopOrderOfStack,

    onResizeOrder,
    onResizeStackOrder,

    // order dnd actions

    onDropToTheSameEmployee,
    onDropToEmployee,
    onDropMultipleToEmployee,
    onDropToOrderCalendar,
    onDropToStack,
    onDropToOrder,

    // stack dnd actions
    onDropStackToTheSameEmployee,
    onDropStackToEmployee,
    onDropStackToOrder,
    onDropStackToStack,

    // lock actions
    lockOrders
  };
}

export { useDataState, useDataDispatch };
