"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var hocs_1 = __importDefault(require("../../../hocs"));
var provider_1 = require("../../../provider");
var styles_1 = require("../../../styles");
var DayEmployeeCalendar_1 = __importDefault(require("./DayEmployeeCalendar"));
var PeriodEmployeeCalendar_1 = __importDefault(require("./PeriodEmployeeCalendar"));
var EmployeeCalendar = function (_a) {
    var employees = _a.employees;
    var timeUnit = provider_1.useSettingsState().timeUnit;
    return (react_1.default.createElement(styles_1.CalendarWrapper, null, timeUnit === "day" ? (react_1.default.createElement(DayEmployeeCalendar_1.default, { employees: employees })) : (react_1.default.createElement(PeriodEmployeeCalendar_1.default, { employees: employees }))));
};
exports.default = hocs_1.default(EmployeeCalendar);
//# sourceMappingURL=index.js.map