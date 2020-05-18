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
var react_hooks_1 = require("@apollo/react-hooks");
var get_1 = __importDefault(require("lodash/get"));
var uniqBy_1 = __importDefault(require("lodash/uniqBy"));
var components_1 = require("dakota-portal/dist/components");
var constants_1 = require("../../../../constants");
var queries_1 = require("../../../../queries");
var CheckboxIcon_1 = __importDefault(require("../../../icons/CheckboxIcon"));
var styles_1 = require("./styles");
var EmployeeTable = function (_a) {
    var codes = _a.codes, costCenters = _a.costCenters, searchText = _a.searchText, onSelect = _a.onSelect;
    var _b = react_hooks_1.useQuery(queries_1.FETCH_ALL_EMPLOYEES, {
        fetchPolicy: "cache-and-network"
    }), loading = _b.loading, error = _b.error, data = _b.data;
    var visibleEmployees = react_1.useMemo(function () {
        if (!data) {
            return [];
        }
        var employees = get_1.default(data, "roofingCompanyEmployees", []);
        // fixme: temp trick
        // get only employees with unique resource code
        employees = uniqBy_1.default(employees, "resource");
        if (costCenters.length > 0) {
            employees = employees.filter(function (e) { return costCenters.includes(e.costCenterCode); });
        }
        if (searchText !== "") {
            employees = employees.filter(function (e) {
                return e.firstName.toLowerCase().includes(searchText) ||
                    e.lastName.toLowerCase().includes(searchText) ||
                    e.code.toLowerCase().includes(searchText);
            });
        }
        return employees;
    }, [data, costCenters, searchText]);
    if (loading) {
        return react_1.default.createElement(components_1.Loader, null);
    }
    if (error) {
        return react_1.default.createElement("div", null, error);
    }
    return (react_1.default.createElement(styles_1.EmployeeTableWrapper, null,
        react_1.default.createElement("table", null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null, constants_1.EMPLOYEE_TABLE_COLUMNS.map(function (c) { return (react_1.default.createElement("th", { key: c.key }, c.label)); }))),
            react_1.default.createElement("tbody", null, visibleEmployees.map(function (employee) { return (react_1.default.createElement("tr", { key: employee.code },
                constants_1.EMPLOYEE_TABLE_COLUMNS.slice(0, -1).map(function (c) { return (react_1.default.createElement("td", { key: c.key }, employee[c.key])); }),
                react_1.default.createElement("td", null,
                    react_1.default.createElement("div", { className: "checkbox", onClick: function () { return onSelect(employee); } },
                        react_1.default.createElement(CheckboxIcon_1.default, { checked: codes.includes(employee.code) }))))); })))));
};
exports.default = EmployeeTable;
//# sourceMappingURL=EmployeeTable.js.map