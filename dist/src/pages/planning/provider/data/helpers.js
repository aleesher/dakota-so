"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var groupBy_1 = __importDefault(require("lodash/groupBy"));
var constants_1 = require("../../constants");
var OrderStack_1 = __importStar(require("./collections/OrderStack"));
function getEmployee(draft, resourceCode) {
    // fixme: for some reason "employees.find" doesn't work
    var employee;
    draft.data.employees.forEach(function (e) {
        if (e.resource === resourceCode) {
            employee = e;
        }
    });
    return employee;
}
exports.getEmployee = getEmployee;
function removeAndReturnWorkOrder(draft, orderCode) {
    var selectedOrder = draft.pageState.selectedOrders[orderCode];
    var order;
    switch (selectedOrder.type) {
        case constants_1.CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER: {
            var employee = getEmployee(draft, selectedOrder.resourceCode);
            order = employee.getOrder(orderCode);
            employee.removeOrder(orderCode);
            break;
        }
        case constants_1.CALENDAR_ORDER_TYPE.STACK_ORDER: {
            var employee = getEmployee(draft, selectedOrder.resourceCode);
            var stack = employee.getStack(selectedOrder.stackId);
            order = stack.removeTopOrder();
            // if there is one order left
            if (stack.getLength() === 1) {
                employee.closeStack(stack);
            }
            break;
        }
        case constants_1.CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER: {
            order = draft.data.orders.get(orderCode);
            draft.data.orders.remove(orderCode);
            break;
        }
        default:
            throw new Error("Unknown type of calendar order");
    }
    return order;
}
exports.removeAndReturnWorkOrder = removeAndReturnWorkOrder;
function parseEmployeeOrders(timeScale, employeeOrders) {
    // group orders by time
    var byTime = groupBy_1.default(employeeOrders, function (o) {
        return o.startTime.format(OrderStack_1.STACK_TIME_FORMAT);
    });
    var stacks = [];
    var orders = [];
    Object.keys(byTime).forEach(function (time) {
        var timeOrders = byTime[time];
        // if we have more than one order at the same time
        if (timeOrders.length > 1) {
            var orderStack = OrderStack_1.default.fromOrders(timeOrders);
            stacks.push(orderStack);
        }
        else {
            var order = byTime[time][0];
            orders.push(order);
        }
    });
    return {
        orders: orders,
        stacks: stacks
    };
}
exports.parseEmployeeOrders = parseEmployeeOrders;
function moveSelectedOrdersToStack(draft, stack) {
    var needToRefetchUnassignedOrders = Object.values(draft.pageState.selectedOrders).some(function (o) {
        return o.type === constants_1.CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER;
    });
    var codes = Object.keys(draft.pageState.selectedOrders);
    var droppedOrders = codes.map(function (code) {
        var order = removeAndReturnWorkOrder(draft, code);
        stack.addOrder(order);
        order.recalculateEndTime(draft.settings.employeeTimeScale);
        return order;
    });
    // set selected
    draft.pageState.selectedOrders = {};
    draft.pageState.totalSelected = 0;
    var data = droppedOrders.map(function (o) { return o.prepareData(); });
    return {
        data: data,
        needToRefetchUnassignedOrders: needToRefetchUnassignedOrders
    };
}
exports.moveSelectedOrdersToStack = moveSelectedOrdersToStack;
function mergeSelectedAndTargetStacks(draft, stack, targetStack) {
    var droppedOrders = stack.getOrders().map(function (o) {
        targetStack.addOrder(o);
        o.recalculateEndTime(draft.settings.employeeTimeScale);
        return o;
    });
    // set selected
    draft.pageState.selectedStackId = "";
    return droppedOrders.map(function (o) { return o.prepareData(); });
}
exports.mergeSelectedAndTargetStacks = mergeSelectedAndTargetStacks;
//# sourceMappingURL=helpers.js.map