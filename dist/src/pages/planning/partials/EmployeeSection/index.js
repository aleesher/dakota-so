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
var constants_1 = require("../../constants");
var provider_1 = require("../../provider");
var styles_1 = require("../../styles");
var CalendarScrollbar_1 = __importDefault(require("../components/CalendarScrollbar"));
var CalendarTimeScale_1 = __importDefault(require("../components/CalendarTimeScale"));
var EmployeeListHeader_1 = __importDefault(require("./EmployeeListHeader"));
var EmployeeSectionBody_1 = __importDefault(require("./EmployeeSectionBody"));
var EmployeeSection = function () {
    var _a = provider_1.useSettingsState(), employeeCodes = _a.employeeCodes, employeeTimeScale = _a.employeeTimeScale, employeeViewDate = _a.employeeViewDate, employeeResourceCodes = _a.employeeResourceCodes, startDate = _a.startDate, endDate = _a.endDate, fixedAmountOfEmployees = _a.fixedAmountOfEmployees;
    var setEmployeeViewDate = provider_1.useSettingsDispatch().setEmployeeViewDate;
    var _b = provider_1.useDataDispatch(), fetchEmployees = _b.fetchEmployees, fetchEmployeeOrders = _b.fetchEmployeeOrders;
    var calendarWidth = provider_1.usePageState().calendarWidth;
    var styles = react_1.useMemo(function () {
        var amountOfEmployees = Math.min(employeeCodes.length, fixedAmountOfEmployees);
        return {
            width: calendarWidth + constants_1.LIST_WIDTH,
            height: amountOfEmployees * constants_1.CALENDAR_LINE_HEIGHT + constants_1.CALENDAR_HEADER_HEIGHT
        };
    }, [calendarWidth, fixedAmountOfEmployees, employeeCodes]);
    react_1.useEffect(function () { return fetchEmployees(employeeCodes); }, [employeeCodes]);
    react_1.useEffect(fetchEmployeeOrders, [employeeResourceCodes, startDate, endDate]);
    return (react_1.default.createElement(styles_1.SectionWrapper, { style: styles },
        react_1.default.createElement(styles_1.SectionHeader, null,
            react_1.default.createElement(EmployeeListHeader_1.default, null),
            react_1.default.createElement(styles_1.CalendarHeader, null,
                react_1.default.createElement(CalendarScrollbar_1.default, { viewDate: employeeViewDate, onChange: setEmployeeViewDate }),
                react_1.default.createElement(CalendarTimeScale_1.default, { timeScale: employeeTimeScale }))),
        react_1.default.createElement(EmployeeSectionBody_1.default, null)));
};
exports.default = EmployeeSection;
//# sourceMappingURL=index.js.map