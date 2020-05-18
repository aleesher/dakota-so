"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hocs_1 = __importDefault(require("../../../hocs"));
var provider_1 = require("../../../provider");
var styles_1 = require("../../../styles");
var DayWorkOrderCalendar_1 = __importDefault(require("./DayWorkOrderCalendar"));
var WorkOrderCalendar_1 = __importDefault(require("./WorkOrderCalendar"));
var OrderCalendar = function (_a) {
    var orders = _a.orders;
    var timeUnit = provider_1.useSettingsState().timeUnit;
    return (react_1.default.createElement(styles_1.CalendarWrapper, null, timeUnit === "day" ? (react_1.default.createElement(DayWorkOrderCalendar_1.default, { orders: orders })) : (react_1.default.createElement(WorkOrderCalendar_1.default, { orders: orders }))));
};
exports.default = hocs_1.default(OrderCalendar);
//# sourceMappingURL=index.js.map