"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PeriodEmployeeTimeLine_1 = __importDefault(require("./PeriodEmployeeTimeLine"));
var PeriodEmployeeCalendar = function (_a) {
    var employees = _a.employees;
    return (react_1.default.createElement(react_1.default.Fragment, null, employees.map(function (e) { return (react_1.default.createElement(PeriodEmployeeTimeLine_1.default, { key: e.code, orders: e.getAllOrders() })); })));
};
exports.default = PeriodEmployeeCalendar;
//# sourceMappingURL=index.js.map