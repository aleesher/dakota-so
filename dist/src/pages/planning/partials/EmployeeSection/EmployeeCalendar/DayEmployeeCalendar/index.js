"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CurrentTime_1 = require("../../../components/CurrentTime");
var EmployeeOrders_1 = __importDefault(require("./EmployeeOrders"));
var DroppableEmployeeTimeLine_1 = __importDefault(require("./DroppableEmployeeTimeLine"));
var OrderStacks_1 = __importDefault(require("./OrderStacks"));
var DayEmployeeCalendar = function (_a) {
    var employees = _a.employees;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CurrentTime_1.EmployeeCurrentTime, null),
        employees.map(function (e) { return (react_1.default.createElement(DroppableEmployeeTimeLine_1.default, { key: e.code, employee: e },
            react_1.default.createElement(EmployeeOrders_1.default, { orders: e.getOrders() }),
            react_1.default.createElement(OrderStacks_1.default, { orderStacks: e.getStacks() }))); })));
};
exports.default = DayEmployeeCalendar;
//# sourceMappingURL=index.js.map