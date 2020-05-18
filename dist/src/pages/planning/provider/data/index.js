"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var groupBy_1 = __importDefault(require("lodash/groupBy"));
var sortBy_1 = __importDefault(require("lodash/sortBy"));
var react_1 = require("react");
var constants_1 = require("../../constants");
var helpers_1 = require("../../helpers");
var context_1 = require("../context");
var CalendarEmployee_1 = __importDefault(require("./collections/CalendarEmployee"));
var CalendarOrder_1 = __importDefault(require("./collections/CalendarOrder"));
var OrderCollection_1 = __importDefault(require("./collections/OrderCollection"));
var OrderStack_1 = __importDefault(require("./collections/OrderStack"));
var employeeService_1 = __importDefault(require("./employeeService"));
var helpers_2 = require("./helpers");
var orderService_1 = __importDefault(require("./orderService"));
function useDataState() {
    var state = react_1.useContext(context_1.PlanningStateContext);
    return state.data;
}
exports.useDataState = useDataState;
function useDataDispatch() {
    var dispatch = react_1.useContext(context_1.PlanningDispatchContext);
    var orderService = orderService_1.default();
    var employeeService = employeeService_1.default();
    function fetchEmployees(codes) {
        employeeService
            .fetchSelected(codes)
            .then(function (_a) {
            var employees = _a.employees, resourceCodes = _a.resourceCodes;
            var sortedEmployees = sortBy_1.default(employees, "firstName");
            dispatch(function (draft) {
                if (draft.pageState.employeeSort === constants_1.SORT.DESC) {
                    sortedEmployees.reverse();
                }
                draft.settings.employeeResourceCodes = resourceCodes;
                draft.data.employees = sortedEmployees.map(function (e) { return new CalendarEmployee_1.default(e); });
                if (draft.pageState.employeeSort === constants_1.SORT.DESC) {
                    draft.data.employees.reverse();
                }
            });
        });
    }
    function fetchOrders() {
        orderService.fetchOrders().then(function (data) {
            dispatch(function (draft) {
                var sortedOrders = sortBy_1.default(data, "code").map(function (d) {
                    var order = new CalendarOrder_1.default(d, constants_1.CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER);
                    order.recalculateStartAndWidth(draft.settings.orderTimeScale);
                    return order;
                });
                draft.data.orders = new OrderCollection_1.default(sortedOrders);
            });
        });
    }
    function fetchEmployeeOrders() {
        orderService.fetchEmployeeOrders().then(function (data) {
            dispatch(function (draft) {
                var orders = data.map(function (d) {
                    var order = new CalendarOrder_1.default(d, constants_1.CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER);
                    order.recalculateStartAndWidth(draft.settings.employeeTimeScale);
                    return order;
                });
                // group orders by resource code
                var byEmployee = groupBy_1.default(orders, "soEmployeeCode");
                draft.data.employees.forEach(function (e) {
                    var _a = helpers_2.parseEmployeeOrders(draft.settings.employeeTimeScale, byEmployee[e.resource] || []), orders = _a.orders, stacks = _a.stacks;
                    e.setOrders(orders);
                    e.setStacks(stacks);
                    e.recalculateLineHeight(draft.settings.collapseOrders);
                });
            });
        });
    }
    function setTopOrderOfStack(resourceCode, stackId, orderCode) {
        dispatch(function (draft) {
            var employee = helpers_2.getEmployee(draft, resourceCode);
            var stack = employee.getStack(stackId);
            stack.setTopOrder(orderCode);
        });
    }
    function onResizeOrder(resourceCode, orderCode, newStart, newEnd) {
        dispatch(function (draft) {
            var order;
            // only top calendar's orders have resource code
            if (resourceCode) {
                var employee = helpers_2.getEmployee(draft, resourceCode);
                order = employee.getOrder(orderCode);
                order.updateResizedOrder(draft.settings.employeeTimeScale, newStart, newEnd);
            }
            else {
                order = draft.data.orders.get(orderCode);
                order.updateResizedOrder(draft.settings.orderTimeScale, newStart, newEnd);
            }
            var data = order.prepareData();
            orderService.updateOrder(orderCode, data).then(function () {
                if (resourceCode) {
                    fetchEmployeeOrders();
                }
                else {
                    fetchOrders();
                }
            });
        });
    }
    function onResizeStackOrder(isCollapsed, resourceCode, stackId, orderCode, newStart, newEnd) {
        dispatch(function (draft) {
            var employee = helpers_2.getEmployee(draft, resourceCode);
            var stack = employee.getStack(stackId);
            var data;
            if (isCollapsed) {
                stack.resizeAllOrders(draft.settings.employeeTimeScale, orderCode, newStart, newEnd);
                data = stack.prepareData();
            }
            else {
                stack.resizeOrder(draft.settings.employeeTimeScale, orderCode, newStart, newEnd);
                var order = stack.getOrder(orderCode);
                data = [order.prepareData()];
            }
            orderService.updateSeveralOrders(data).then(function () {
                fetchEmployeeOrders();
            });
        });
    }
    function onDropToOrder(orderCode, resourceCode) {
        dispatch(function (draft) {
            var employee = helpers_2.getEmployee(draft, resourceCode);
            var targetOrder = employee.getOrder(orderCode);
            employee.removeOrder(orderCode);
            var newStack = OrderStack_1.default.fromOrders([targetOrder]);
            employee.addStack(newStack);
            var _a = helpers_2.moveSelectedOrdersToStack(draft, newStack), data = _a.data, needToRefetchUnassignedOrders = _a.needToRefetchUnassignedOrders;
            newStack.getTopOrder().isSaving = true;
            orderService.updateSeveralOrders(data).then(function () {
                fetchEmployeeOrders();
                if (needToRefetchUnassignedOrders) {
                    fetchOrders();
                }
            });
        });
    }
    function onDropToTheSameEmployee(orderCode, resourceCode, newStart) {
        dispatch(function (draft) {
            var employee = helpers_2.getEmployee(draft, resourceCode);
            var order;
            var selectedOrder = draft.pageState.selectedOrders[orderCode];
            if (selectedOrder.type === constants_1.CALENDAR_ORDER_TYPE.STACK_ORDER) {
                order = helpers_2.removeAndReturnWorkOrder(draft, orderCode);
                employee.addOrder(order);
            }
            else {
                order = employee.getOrder(orderCode);
            }
            order.setNewStart(draft.settings.employeeTimeScale, newStart);
            order.recalculateEndTime(draft.settings.employeeTimeScale);
            order.isSaving = true;
            // set selected
            draft.pageState.selectedOrders[orderCode].type =
                constants_1.CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER;
            var data = order.prepareData();
            orderService.updateOrder(orderCode, data).then(fetchEmployeeOrders);
        });
    }
    function onDropToEmployee(orderCode, newResourceCode, newStart) {
        dispatch(function (draft) {
            var employee = helpers_2.getEmployee(draft, newResourceCode);
            var order = helpers_2.removeAndReturnWorkOrder(draft, orderCode);
            var needToRefetchUnassignedOrders = order.type === constants_1.CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER;
            employee.addOrder(order);
            order.setNewStart(draft.settings.employeeTimeScale, newStart);
            order.recalculateEndTime(draft.settings.employeeTimeScale);
            order.isSaving = true;
            // set selected
            draft.pageState.selectedOrders[orderCode].type =
                constants_1.CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER;
            draft.pageState.selectedOrders[orderCode].resourceCode = newResourceCode;
            var data = order.prepareData();
            orderService.updateOrder(orderCode, data).then(function () {
                fetchEmployeeOrders();
                if (needToRefetchUnassignedOrders) {
                    fetchOrders();
                }
            });
        });
    }
    function onDropMultipleToEmployee(resourceCode, newStart) {
        dispatch(function (draft) {
            var employee = helpers_2.getEmployee(draft, resourceCode);
            var startTime = draft.settings.employeeTimeScale.getTime(newStart);
            startTime = helpers_1.roundUpToQuarterHour(startTime);
            var tempOrderStack = new OrderStack_1.default(startTime, newStart);
            employee.addStack(tempOrderStack);
            var _a = helpers_2.moveSelectedOrdersToStack(draft, tempOrderStack), data = _a.data, needToRefetchUnassignedOrders = _a.needToRefetchUnassignedOrders;
            employee.recalculateLineHeight(draft.settings.collapseOrders);
            tempOrderStack.getTopOrder().isSaving = true;
            orderService.updateSeveralOrders(data).then(function () {
                fetchEmployeeOrders();
                if (needToRefetchUnassignedOrders) {
                    fetchOrders();
                }
            });
        });
    }
    function onDropToOrderCalendar(orderCode, newStart) {
        dispatch(function (draft) {
            var _a;
            var order = draft.data.orders.get(orderCode);
            order.setNewStart(draft.settings.orderTimeScale, newStart);
            order.recalculateEndTime(draft.settings.orderTimeScale);
            order.isSaving = true;
            // set selected
            draft.pageState.selectedOrders = (_a = {},
                _a[orderCode] = {
                    type: constants_1.CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER
                },
                _a);
            draft.pageState.totalSelected = 1;
            var data = order.prepareData();
            orderService.updateOrder(orderCode, data).then(fetchOrders);
        });
    }
    function onDropToStack(resourceCode, stackId) {
        dispatch(function (draft) {
            var employee = helpers_2.getEmployee(draft, resourceCode);
            var stack = employee.getStack(stackId);
            var _a = helpers_2.moveSelectedOrdersToStack(draft, stack), data = _a.data, needToRefetchUnassignedOrders = _a.needToRefetchUnassignedOrders;
            employee.recalculateLineHeight(draft.settings.collapseOrders);
            stack.getTopOrder().isSaving = true;
            orderService.updateSeveralOrders(data).then(function () {
                fetchEmployeeOrders();
                if (needToRefetchUnassignedOrders) {
                    fetchOrders();
                }
            });
        });
    }
    // stack actions
    function onDropStackToTheSameEmployee(stacckId, resourceCode, newStart) {
        dispatch(function (draft) {
            var employee = helpers_2.getEmployee(draft, resourceCode);
            var stack = employee.getStack(stacckId);
            stack.setNewStart(draft.settings.employeeTimeScale, newStart);
            stack.getTopOrder().isSaving = true;
            // set selected
            draft.pageState.selectedStackId = "";
            var data = stack.prepareData();
            orderService.updateSeveralOrders(data).then(fetchEmployeeOrders);
        });
    }
    function onDropStackToEmployee(stackId, resourceCode, newResourceCode, newStart) {
        dispatch(function (draft) {
            var srcEmployee = helpers_2.getEmployee(draft, resourceCode);
            var stack = srcEmployee.removeStack(stackId);
            stack.setNewStart(draft.settings.employeeTimeScale, newStart);
            var targetEmployee = helpers_2.getEmployee(draft, newResourceCode);
            targetEmployee.addStack(stack);
            targetEmployee.recalculateLineHeight(draft.settings.collapseOrders);
            stack.getTopOrder().isSaving = true;
            // set selected
            draft.pageState.selectedStackId = "";
            var data = stack.prepareData();
            orderService.updateSeveralOrders(data).then(fetchEmployeeOrders);
        });
    }
    function onDropStackToOrder(stackId, 
    // src
    resourceCode, 
    // target
    orderCode, newResourceCode) {
        dispatch(function (draft) {
            var srcEmployee = helpers_2.getEmployee(draft, resourceCode);
            var stack = srcEmployee.removeStack(stackId);
            var targetEmployee = helpers_2.getEmployee(draft, newResourceCode);
            var targetOrder = targetEmployee.removeOrder(orderCode);
            var newStack = OrderStack_1.default.fromOrders([targetOrder]);
            targetEmployee.addStack(newStack);
            var data = helpers_2.mergeSelectedAndTargetStacks(draft, stack, newStack);
            targetEmployee.recalculateLineHeight(draft.settings.collapseOrders);
            newStack.getTopOrder().isSaving = true;
            orderService.updateSeveralOrders(data).then(function () {
                fetchEmployeeOrders();
            });
        });
    }
    function onDropStackToStack(stackId, 
    // src
    resourceCode, 
    // target
    newStackId, newResourceCode) {
        dispatch(function (draft) {
            var srcEmployee = helpers_2.getEmployee(draft, resourceCode);
            var stack = srcEmployee.removeStack(stackId);
            var targetEmployee = helpers_2.getEmployee(draft, newResourceCode);
            var targeStack = targetEmployee.getStack(newStackId);
            var data = helpers_2.mergeSelectedAndTargetStacks(draft, stack, targeStack);
            targetEmployee.recalculateLineHeight(draft.settings.collapseOrders);
            targeStack.getTopOrder().isSaving = true;
            orderService.updateSeveralOrders(data).then(function () {
                fetchEmployeeOrders();
            });
        });
    }
    return {
        fetchEmployees: fetchEmployees,
        fetchOrders: fetchOrders,
        fetchEmployeeOrders: fetchEmployeeOrders,
        setTopOrderOfStack: setTopOrderOfStack,
        onResizeOrder: onResizeOrder,
        onResizeStackOrder: onResizeStackOrder,
        // order dnd actions
        onDropToTheSameEmployee: onDropToTheSameEmployee,
        onDropToEmployee: onDropToEmployee,
        onDropMultipleToEmployee: onDropMultipleToEmployee,
        onDropToOrderCalendar: onDropToOrderCalendar,
        onDropToStack: onDropToStack,
        onDropToOrder: onDropToOrder,
        // stack dnd actions
        onDropStackToTheSameEmployee: onDropStackToTheSameEmployee,
        onDropStackToEmployee: onDropStackToEmployee,
        onDropStackToOrder: onDropStackToOrder,
        onDropStackToStack: onDropStackToStack
    };
}
exports.useDataDispatch = useDataDispatch;
//# sourceMappingURL=index.js.map