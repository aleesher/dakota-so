"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var DraggableOrder_1 = require("./DraggableOrder");
var styles_1 = require("./styles");
var SelectedOrder = function (_a) {
    var workOrder = _a.workOrder;
    var isDragging = hooks_1.useIsDragging(workOrder.code);
    return (react_1.default.createElement(styles_1.SelectedOrderWrapper, { start: workOrder.start, width: workOrder.width, style: {
            opacity: isDragging ? 0 : 1
        } },
        react_1.default.createElement(DraggableOrder_1.DraggableOrder, { workOrder: workOrder })));
};
exports.default = SelectedOrder;
//# sourceMappingURL=SelectedOrder.js.map