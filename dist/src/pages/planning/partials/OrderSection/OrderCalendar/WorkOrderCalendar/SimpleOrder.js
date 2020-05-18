"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var react_1 = __importDefault(require("react"));
var constants_1 = require("../../../../constants");
var provider_1 = require("../../../../provider");
var styles_1 = require("../../../../styles");
var SelectableOrder_1 = __importDefault(require("../../../components/DayOrder/SelectableOrder"));
var OrderTooltip_1 = require("../../../components/OrderTooltip");
var SimpleOrder = function (_a) {
    var workOrder = _a.workOrder;
    var _b = provider_1.useSettingsState(), orderTimeScale = _b.orderTimeScale, timeUnit = _b.timeUnit;
    if (!workOrder.startDate) {
        return null;
    }
    var start = moment_1.default(workOrder.startDate).startOf(constants_1.ORDER_GROUP[timeUnit].startOf);
    var end = moment_1.default(workOrder.endDate).endOf(constants_1.ORDER_GROUP[timeUnit].startOf);
    return (react_1.default.createElement(OrderTooltip_1.OrderTooltip, { workOrder: workOrder },
        react_1.default.createElement(styles_1.WorkOrderGroupWrapper, { start: orderTimeScale.getX(start), end: orderTimeScale.getX(end) },
            react_1.default.createElement(SelectableOrder_1.default, { workOrder: workOrder }))));
};
exports.default = SimpleOrder;
//# sourceMappingURL=SimpleOrder.js.map