"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = require("immer");
var flatten_1 = __importDefault(require("lodash/flatten"));
var constants_1 = require("../../../constants");
var CalendarEmployee = /** @class */ (function () {
    function CalendarEmployee(employee) {
        this[_a] = true;
        this[immer_1.immerable] = true;
        Object.assign(this, employee);
        this.stacks = [];
        this.orders = [];
    }
    CalendarEmployee.prototype.recalculateLineHeight = function (collapse) {
        var maxStackLength = this.stacks.length > 0 // if employee has stacked orders
            ? Math.max.apply(Math, this.stacks.map(function (s) { return s.getLength(); })) : 1;
        if (collapse) {
            this.lineHeight =
                8 + constants_1.ORDER_HEIGHT + (maxStackLength - 1) * constants_1.ORDER_PREVIEW_OFFSET + 8;
        }
        else {
            this.lineHeight = maxStackLength * constants_1.CALENDAR_LINE_HEIGHT;
        }
    };
    CalendarEmployee.prototype.setOrders = function (orders) {
        var _this = this;
        this.orders = [];
        orders.forEach(function (order) {
            _this.addOrder(order);
        });
    };
    CalendarEmployee.prototype.setStacks = function (stacks) {
        var _this = this;
        this.stacks = [];
        stacks.forEach(function (stack) {
            _this.addStack(stack);
        });
    };
    /**
     * this method returns single orders only
     */
    CalendarEmployee.prototype.getOrders = function () {
        return this.orders;
    };
    /**
     * this method returns order stacks only
     */
    CalendarEmployee.prototype.getStacks = function () {
        return this.stacks;
    };
    /**
     * this method returns all orders (single and stack orders)
     */
    CalendarEmployee.prototype.getAllOrders = function () {
        var stackOrders = flatten_1.default(this.stacks.map(function (s) { return s.getOrders(); }));
        return __spreadArrays(this.orders, stackOrders);
    };
    // actions with orders
    CalendarEmployee.prototype.getOrder = function (orderCode) {
        return this.orders.find(function (o) { return o.code === orderCode; });
    };
    CalendarEmployee.prototype.addOrder = function (order) {
        order.type = constants_1.CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER;
        order.soEmployeeCode = this.resource;
        order.costCenter = this.costCenterCode;
        order.employeeName = this.firstName;
        this.orders.push(order);
    };
    CalendarEmployee.prototype.removeOrder = function (orderCode) {
        var order = this.orders.find(function (o) { return o.code === orderCode; });
        this.orders = this.orders.filter(function (o) { return o.code !== orderCode; });
        return order;
    };
    // actions with stacks
    CalendarEmployee.prototype.addStack = function (stack) {
        var _this = this;
        stack.employeeResourceCode = this.resource;
        stack.costCenter = this.costCenterCode;
        stack.employeeName = this.firstName;
        this.stacks.push(stack);
        // if stack has orders
        stack.getOrders().forEach(function (o) {
            o.soEmployeeCode = _this.resource;
            o.costCenter = _this.costCenterCode;
            o.employeeName = _this.firstName;
        });
    };
    CalendarEmployee.prototype.getStack = function (stackId) {
        return this.stacks.find(function (s) { return s.id === stackId; });
    };
    CalendarEmployee.prototype.closeStack = function (stack) {
        var order = stack.getOrders()[0];
        order.stackId = null;
        this.addOrder(order);
        this.stacks = this.stacks.filter(function (s) { return s.id !== stack.id; });
    };
    CalendarEmployee.prototype.removeStack = function (stackId) {
        var stack = this.stacks.find(function (s) { return s.id === stackId; });
        this.stacks = this.stacks.filter(function (s) { return s.id !== stackId; });
        return stack;
    };
    return CalendarEmployee;
}());
exports.default = CalendarEmployee;
_a = immer_1.immerable;
CalendarEmployee[immer_1.immerable] = true;
//# sourceMappingURL=CalendarEmployee.js.map