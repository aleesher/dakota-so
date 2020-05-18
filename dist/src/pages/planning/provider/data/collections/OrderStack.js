"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = require("immer");
var maxBy_1 = __importDefault(require("lodash/maxBy"));
var moment_1 = __importDefault(require("moment"));
var constants_1 = require("../../../constants");
exports.STACK_TIME_FORMAT = "YYYY.MM.DD.HH.mm";
var OrderStack = /** @class */ (function () {
    function OrderStack(startTime, start) {
        this[_a] = true;
        this[immer_1.immerable] = true;
        this.isStack = true;
        this.id = startTime.format(exports.STACK_TIME_FORMAT);
        this.startTime = startTime;
        this.start = start;
        this.width = 0;
        this.orders = [];
    }
    OrderStack.fromOrders = function (orders) {
        var firstOrder = orders[0];
        var stack = new OrderStack(firstOrder.startTime, firstOrder.start);
        stack.setOrders(orders);
        stack.width = Math.max.apply(Math, orders.map(function (o) { return o.width; }));
        return stack;
    };
    OrderStack.prototype.setOrders = function (orders) {
        var _this = this;
        orders.forEach(function (o) {
            o.type = constants_1.CALENDAR_ORDER_TYPE.STACK_ORDER;
            o.stackId = _this.id;
            o.soEmployeeCode = _this.employeeResourceCode;
            o.costCenter = _this.costCenter;
            o.employeeName = _this.employeeName;
            _this.width = Math.max(_this.width, o.width);
        });
        this.orders = orders;
    };
    OrderStack.prototype.setNewStart = function (timeScale, newStart) {
        this.orders.forEach(function (o) {
            o.setNewStart(timeScale, newStart);
            o.recalculateEndTime(timeScale);
        });
        this.startTime = this.orders[0].startTime;
        this.start = this.orders[0].start;
    };
    OrderStack.prototype.getLength = function () {
        return this.orders.length;
    };
    OrderStack.prototype.getOrders = function () {
        return this.orders;
    };
    OrderStack.prototype.getOrder = function (code) {
        return this.orders.find(function (o) { return o.code === code; });
    };
    OrderStack.prototype.resizeOrder = function (timeScale, code, newStart, newEnd) {
        var order = this.orders.find(function (o) { return o.code === code; });
        order.endTime = timeScale.getTime(newEnd);
        order.endDate = moment_1.default(order.endTime).startOf("day");
        order.width = newEnd - newStart;
        order.isSaving = true;
        this.width = Math.max(this.width, order.width);
    };
    OrderStack.prototype.resizeAllOrders = function (timeScale, code, newStart, newEnd) {
        var endTime = timeScale.getTime(newEnd);
        var endDate = moment_1.default(endTime).startOf("day");
        this.orders.forEach(function (o) {
            o.endTime = endTime;
            o.endDate = endDate;
            o.width = newEnd - newStart;
            o.calculateWidth(timeScale);
        });
        this.getTopOrder().isSaving = true;
    };
    OrderStack.prototype.getTopOrder = function () {
        // top order is last order of stack;
        return this.orders[this.orders.length - 1];
    };
    OrderStack.prototype.removeTopOrder = function () {
        return this.orders.pop();
    };
    OrderStack.prototype.getBottomOrders = function () {
        return this.orders.slice(0, -1);
    };
    OrderStack.prototype.recalculateStartAndWidth = function (timeScale) {
        this.orders.forEach(function (o) {
            o.recalculateStartAndWidth(timeScale);
        });
        // all orders in stack have the same start position
        this.start = this.orders[0].start;
        var orderWithMaxWidth = maxBy_1.default(this.orders, "width");
        this.width = orderWithMaxWidth.width;
    };
    OrderStack.prototype.addOrder = function (order) {
        order.type = constants_1.CALENDAR_ORDER_TYPE.STACK_ORDER;
        order.stackId = this.id;
        order.soEmployeeCode = this.employeeResourceCode;
        order.costCenter = this.costCenter;
        order.employeeName = this.employeeName;
        order.useStartTimeOfStack(this);
        this.width = Math.max(this.width, order.width);
        this.orders.push(order);
    };
    OrderStack.prototype.setTopOrder = function (orderCode) {
        if (this.topOrderCode !== orderCode) {
            var order = this.orders.find(function (o) { return o.code === orderCode; });
            this.orders = this.orders.filter(function (o) { return o.code !== orderCode; });
            this.orders.push(order);
            this.topOrderCode = orderCode;
        }
    };
    OrderStack.prototype.prepareData = function () {
        return this.orders.map(function (o) { return o.prepareData(); });
    };
    return OrderStack;
}());
exports.default = OrderStack;
_a = immer_1.immerable;
OrderStack[immer_1.immerable] = true;
//# sourceMappingURL=OrderStack.js.map