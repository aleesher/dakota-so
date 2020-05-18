"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_1 = __importDefault(require("lodash/capitalize"));
var react_1 = __importStar(require("react"));
var page_1 = require("../../../provider/page");
var settings_1 = require("../../../provider/settings");
var OrderFieldValue_1 = __importDefault(require("../OrderFieldValue"));
var DeadlineIcon_1 = __importDefault(require("./DeadlineIcon"));
var styles_1 = require("./styles");
var OrderData = function (_a) {
    var workOrder = _a.workOrder;
    var fieldTypes = page_1.usePageState().fieldTypes;
    var uiPreferences = settings_1.useSettingsState().uiPreferences;
    var statusColors = page_1.usePageState().statusColors;
    if (uiPreferences.orderFields.length === 0) {
        return null;
    }
    return (react_1.default.createElement(styles_1.OrderDataWrapper, null,
        workOrder.soPriority === "HIGH" && (react_1.default.createElement(DeadlineIcon_1.default, { workOrder: workOrder })),
        react_1.default.createElement(styles_1.DayOrderStatus, { color: statusColors[workOrder.soStatus] }, workOrder.soStatus),
        react_1.default.createElement(styles_1.FirstOrderInfoLine, null,
            react_1.default.createElement(OrderFieldValue_1.default, { type: fieldTypes[uiPreferences.orderFields[0]], value: workOrder[uiPreferences.orderFields[0]] })),
        react_1.default.createElement(styles_1.SecondOrderInfoLine, null,
            react_1.default.createElement(OrderFieldValue_1.default, { type: fieldTypes[uiPreferences.orderFields[1]], value: workOrder[uiPreferences.orderFields[1]] })),
        react_1.default.createElement(styles_1.OrderType, null, capitalize_1.default(workOrder.soOrderType))));
};
exports.default = react_1.memo(OrderData);
//# sourceMappingURL=OrderData.js.map