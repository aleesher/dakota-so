"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../../hooks");
var data_1 = require("../../../../provider/data");
var settings_1 = require("../../../../provider/settings");
var DraggableOrder_1 = require("../../DayOrder/DraggableOrder");
var ResizableComponent_1 = __importDefault(require("../../ResizableComponent"));
var styles_1 = require("../../DayOrder/styles");
var ResizableStackOrder = function (_a) {
    var workOrder = _a.workOrder, top = _a.top;
    var collapseOrders = settings_1.useSettingsState().collapseOrders;
    var onResizeStackOrder = data_1.useDataDispatch().onResizeStackOrder;
    var isDragging = hooks_1.useIsDragging(workOrder.code);
    var handleResize = function (newStart, newEnd) {
        onResizeStackOrder(collapseOrders, workOrder.soEmployeeCode, workOrder.stackId, workOrder.code, workOrder.start + newStart, workOrder.start + newEnd);
    };
    return (react_1.default.createElement(ResizableComponent_1.default, { start: 0, end: workOrder.width, onResize: handleResize, direction: "right", style: {
            top: top,
            opacity: isDragging ? 0 : 1
        } },
        react_1.default.createElement(styles_1.ResizableOrderWrapper, null,
            react_1.default.createElement(DraggableOrder_1.DraggableOrder, { workOrder: workOrder }))));
};
exports.default = ResizableStackOrder;
//# sourceMappingURL=Resizable.js.map