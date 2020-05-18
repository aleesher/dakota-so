"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CommonOrder_1 = __importDefault(require("../../../components/DayOrder/CommonOrder"));
var WorkOrder = function (_a) {
    var workOrder = _a.workOrder;
    return react_1.default.createElement(CommonOrder_1.default, { workOrder: workOrder });
};
exports.default = WorkOrder;
//# sourceMappingURL=WorkOrder.js.map