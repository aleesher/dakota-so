"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants_1 = require("../../../constants");
var DroppableOrderStack_1 = __importDefault(require("./DroppableOrderStack"));
var StackOrder_1 = __importDefault(require("./StackOrder"));
var OFFSET = constants_1.ORDER_HEIGHT + 16;
var FullSizeOrderStack = function (_a) {
    var stack = _a.stack;
    return (react_1.default.createElement(DroppableOrderStack_1.default, { stack: stack }, stack.getOrders().map(function (order, i) { return (react_1.default.createElement(StackOrder_1.default, { key: order.code, workOrder: order, top: 8 + OFFSET * i })); })));
};
exports.default = FullSizeOrderStack;
//# sourceMappingURL=FullSize.js.map