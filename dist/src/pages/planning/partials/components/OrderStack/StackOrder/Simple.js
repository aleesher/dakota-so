"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DraggableOrder_1 = require("../../DayOrder/DraggableOrder");
var styles_1 = require("../styles");
var SimpleStackOrder = function (_a) {
    var workOrder = _a.workOrder, top = _a.top;
    return (react_1.default.createElement(styles_1.SimpleStackOrderWrapper, { start: 0, width: workOrder.width, top: top },
        react_1.default.createElement(DraggableOrder_1.DraggableOrder, { workOrder: workOrder })));
};
exports.default = SimpleStackOrder;
//# sourceMappingURL=Simple.js.map