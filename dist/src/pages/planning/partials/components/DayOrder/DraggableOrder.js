"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hooks_1 = require("../../../hooks");
var styles_1 = require("./styles");
var DayOrderContent_1 = __importDefault(require("./DayOrderContent"));
exports.DraggableOrder = function (_a) {
    var workOrder = _a.workOrder;
    var dragRef = hooks_1.useDraggableOrder(workOrder)[0];
    return (react_1.default.createElement(styles_1.DraggableOrderWrapper, { ref: dragRef },
        react_1.default.createElement(DayOrderContent_1.default, { workOrder: workOrder })));
};
//# sourceMappingURL=DraggableOrder.js.map