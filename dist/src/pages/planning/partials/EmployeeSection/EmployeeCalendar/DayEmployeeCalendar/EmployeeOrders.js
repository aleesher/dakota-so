"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var constants_1 = require("../../../../constants");
var provider_1 = require("../../../../provider");
var CommonOrder_1 = __importDefault(require("../../../components/DayOrder/CommonOrder"));
var EmployeeOrders = function (_a) {
    var orders = _a.orders;
    var _b = provider_1.useSettingsState(), employeeViewDate = _b.employeeViewDate, timeUnit = _b.timeUnit, uiPreferences = _b.uiPreferences;
    var _c = provider_1.usePageState(), activeSection = _c.activeSection, searchText = _c.searchText;
    var viewOrders = react_1.useMemo(function () {
        return orders.filter(function (o) {
            return o.startTime.format("YYYYMMDD") === employeeViewDate.format("YYYYMMDD");
        });
    }, [orders, employeeViewDate]);
    var visibleOrders = react_1.useMemo(function () {
        if (activeSection === constants_1.SECTION.EMPLOYEE_CALENDAR &&
            searchText !== "" &&
            timeUnit === "day") {
            return viewOrders.filter(function (o) {
                return uiPreferences.orderFields.some(function (f) {
                    return o[f].toLowerCase().includes(searchText);
                });
            });
        }
        return viewOrders;
    }, [viewOrders, searchText, activeSection]);
    return (react_1.default.createElement(react_1.default.Fragment, null, visibleOrders.map(function (wo) { return (react_1.default.createElement(CommonOrder_1.default, { key: wo.code, workOrder: wo })); })));
};
exports.default = EmployeeOrders;
//# sourceMappingURL=EmployeeOrders.js.map