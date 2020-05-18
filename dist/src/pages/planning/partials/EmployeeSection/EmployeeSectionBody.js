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
var EmployeeCalendar_1 = __importDefault(require("./EmployeeCalendar"));
var EmployeeList_1 = __importDefault(require("./EmployeeList"));
var EmployeeSectionBody = function () {
    var _a = provider_1.usePageState(), searchText = _a.searchText, activeSection = _a.activeSection;
    var employees = provider_1.useDataState().employees;
    var visibleEmployees = react_1.useMemo(function () {
        if (activeSection === constants_1.SECTION.EMPLOYEE_LIST && searchText !== "") {
            return employees.filter(function (em) {
                return (em.code.toLowerCase().includes(searchText) ||
                    em.firstName.toLowerCase().includes(searchText) ||
                    em.costCenterCode.toLowerCase().includes(searchText));
            });
        }
        return employees;
    }, [employees, searchText, activeSection]);
    return (react_1.default.createElement(styles_1.SectionBody, null,
        react_1.default.createElement(EmployeeList_1.default, { isLeft: true, section: constants_1.SECTION.EMPLOYEE_LIST, employees: visibleEmployees }),
        react_1.default.createElement(EmployeeCalendar_1.default, { section: constants_1.SECTION.EMPLOYEE_CALENDAR, employees: visibleEmployees })));
};
exports.default = EmployeeSectionBody;
//# sourceMappingURL=EmployeeSectionBody.js.map