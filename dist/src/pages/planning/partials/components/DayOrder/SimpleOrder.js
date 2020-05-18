"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants_1 = require("../../../constants");
var DraggableOrder_1 = require("./DraggableOrder");
var DroppableOrder_1 = require("./DroppableOrder");
var styles_1 = require("./styles");
var SimpleOrder = function (_a) {
    var workOrder = _a.workOrder;
    return (react_1.default.createElement(styles_1.SimpleOrderWrapper, { start: workOrder.start, width: workOrder.width }, workOrder.type === constants_1.CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER ? (react_1.default.createElement(DroppableOrder_1.DroppableOrder, { workOrder: workOrder },
        react_1.default.createElement(DraggableOrder_1.DraggableOrder, { workOrder: workOrder }))) : (react_1.default.createElement(DraggableOrder_1.DraggableOrder, { workOrder: workOrder }))));
};
exports.default = SimpleOrder;
//# sourceMappingURL=SimpleOrder.js.map