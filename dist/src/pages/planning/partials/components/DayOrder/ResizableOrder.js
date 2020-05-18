"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants_1 = require("../../../constants");
var hooks_1 = require("../../../hooks");
var data_1 = require("../../../provider/data");
var ResizableComponent_1 = __importDefault(require("../ResizableComponent"));
var DraggableOrder_1 = require("./DraggableOrder");
var styles_1 = require("./styles");
var ResizableOrder = function (_a) {
    var workOrder = _a.workOrder;
    var onResizeOrder = data_1.useDataDispatch().onResizeOrder;
    var isDragging = hooks_1.useIsDragging(workOrder.code);
    var handleResize = function (newStart, newEnd) {
        onResizeOrder(workOrder.soEmployeeCode, workOrder.code, newStart, newEnd);
    };
    return (react_1.default.createElement(ResizableComponent_1.default, { start: workOrder.start, end: workOrder.start + workOrder.width, onResize: handleResize, style: {
            position: "absolute",
            top: 8,
            height: constants_1.ORDER_HEIGHT,
            opacity: isDragging ? 0 : 1
        } },
        react_1.default.createElement(styles_1.ResizableOrderWrapper, null,
            react_1.default.createElement(DraggableOrder_1.DraggableOrder, { workOrder: workOrder }))));
};
exports.default = ResizableOrder;
//# sourceMappingURL=ResizableOrder.js.map