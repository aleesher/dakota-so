"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var WorkOrder_1 = __importDefault(require("./WorkOrder"));
var WorkOrderWithoutTime_1 = __importDefault(require("./WorkOrderWithoutTime"));
var DayWorkOrder = function (_a) {
    var workOrder = _a.workOrder;
    if (workOrder.isWithTime) {
        return react_1.default.createElement(WorkOrder_1.default, { workOrder: workOrder });
    }
    else {
        return react_1.default.createElement(WorkOrderWithoutTime_1.default, { workOrder: workOrder });
    }
};
exports.default = DayWorkOrder;
//# sourceMappingURL=DayWorkOrder.js.map