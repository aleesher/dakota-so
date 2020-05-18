"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants_1 = require("../../../../constants");
var data_1 = require("../../../../provider/data");
var OrderData_1 = __importDefault(require("../../DayOrder/OrderData"));
var DroppableOrderStack_1 = __importDefault(require("../DroppableOrderStack"));
var StackOrder_1 = __importDefault(require("../StackOrder"));
var styles_1 = require("../styles");
var SimpleCollapsedStack = function (_a) {
    var stack = _a.stack;
    var setTopOrderOfStack = data_1.useDataDispatch().setTopOrderOfStack;
    return (react_1.default.createElement(DroppableOrderStack_1.default, { stack: stack },
        stack.getBottomOrders().map(function (order, i) { return (react_1.default.createElement(styles_1.BottomStackOrderWrapper, { key: order.code, width: order.width, top: 8 + constants_1.ORDER_PREVIEW_OFFSET * i, left: 0, onClick: function (e) {
                setTopOrderOfStack(stack.employeeResourceCode, stack.id, order.code);
            } },
            react_1.default.createElement(OrderData_1.default, { workOrder: order }))); }),
        react_1.default.createElement(StackOrder_1.default, { workOrder: stack.getTopOrder(), top: 8 + constants_1.ORDER_PREVIEW_OFFSET * (stack.getLength() - 1) })));
};
exports.default = SimpleCollapsedStack;
//# sourceMappingURL=Simple.js.map