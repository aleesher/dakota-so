import _groupBy from "lodash/groupBy";
import { CALENDAR_ORDER_TYPE } from "../../constants";
import { ITimeScale, TUpdateOrderData } from "../../types";
import { TStateDraft } from "../types";
import CalendarEmployee from "./collections/CalendarEmployee";
import CalendarOrder from "./collections/CalendarOrder";
import OrderStack, { STACK_TIME_FORMAT } from "./collections/OrderStack";

export function getEmployee(
  draft: TStateDraft,
  resourceCode: string
): CalendarEmployee {
  // fixme: for some reason "employees.find" doesn't work
  let employee;
  draft.data.employees.forEach(e => {
    if (e.resource === resourceCode) {
      employee = e;
    }
  });
  return employee;
}

export function removeAndReturnWorkOrder(
  draft: TStateDraft,
  orderCode: string
): CalendarOrder {
  const selectedOrder = draft.pageState.selectedOrders[orderCode];

  let order: CalendarOrder;

  switch (selectedOrder.type) {
    case CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER: {
      const employee = getEmployee(draft, selectedOrder.resourceCode);
      order = employee.getOrder(orderCode);
      employee.removeOrder(orderCode);
      break;
    }
    case CALENDAR_ORDER_TYPE.STACK_ORDER: {
      const employee = getEmployee(draft, selectedOrder.resourceCode);
      const stack = employee.getStack(selectedOrder.stackId);
      order = stack.removeTopOrder();
      // if there is one order left
      if (stack.getLength() === 1) {
        employee.closeStack(stack);
      }
      break;
    }
    case CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER: {
      order = draft.data.orders.get(orderCode);
      draft.data.orders.remove(orderCode);
      break;
    }
    default:
      throw new Error("Unknown type of calendar order");
  }

  return order;
}

export function parseEmployeeOrders(
  timeScale: ITimeScale,
  employeeOrders: CalendarOrder[]
): {
  orders: CalendarOrder[];
  stacks: OrderStack[];
} {
  // group orders by time
  const byTime = _groupBy(employeeOrders, o =>
    o.startTime.format(STACK_TIME_FORMAT)
  );

  const stacks: OrderStack[] = [];
  const orders: CalendarOrder[] = [];

  Object.keys(byTime).forEach(time => {
    const timeOrders = byTime[time];

    // if we have more than one order at the same time
    if (timeOrders.length > 1) {
      const orderStack = OrderStack.fromOrders(timeOrders);
      stacks.push(orderStack);
    } else {
      const order = byTime[time][0];
      orders.push(order);
    }
  });

  return {
    orders,
    stacks
  };
}

export function moveSelectedOrdersToStack(
  draft: TStateDraft,
  stack: OrderStack
): {
  data: TUpdateOrderData[];
  needToRefetchUnassignedOrders: boolean;
} {
  const needToRefetchUnassignedOrders = Object.values(
    draft.pageState.selectedOrders
  ).some(o => {
    return o.type === CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER;
  });

  const codes = Object.keys(draft.pageState.selectedOrders);
  const droppedOrders = codes.map(code => {
    const order = removeAndReturnWorkOrder(draft, code);
    stack.addOrder(order);
    order.recalculateEndTime(draft.settings.employeeTimeScale);
    return order;
  });

  // set selected
  draft.pageState.selectedOrders = {};
  draft.pageState.totalSelected = 0;

  const data = droppedOrders.map(o => o.prepareData());

  return {
    data,
    needToRefetchUnassignedOrders
  };
}

export function mergeSelectedAndTargetStacks(
  draft: TStateDraft,
  stack: OrderStack,
  targetStack: OrderStack
): TUpdateOrderData[] {
  const droppedOrders = stack.getOrders().map(o => {
    targetStack.addOrder(o);
    o.recalculateEndTime(draft.settings.employeeTimeScale);
    return o;
  });

  // set selected
  draft.pageState.selectedStackId = "";

  return droppedOrders.map(o => o.prepareData());
}
