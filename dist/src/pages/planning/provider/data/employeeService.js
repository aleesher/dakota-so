"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@apollo/react-hooks");
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var uniqBy_1 = __importDefault(require("lodash/uniqBy"));
var queries_1 = require("../../queries");
function extractEmployees(response) {
    var employees = get_1.default(response, "data.roofingCompanyEmployees", []);
    // fixme: temp trick
    // get only employees with unique resource code
    employees = uniqBy_1.default(employees, "resource");
    var resourceCodes = employees.map(function (e) { return e.resource; });
    return {
        employees: employees,
        resourceCodes: resourceCodes
    };
}
var useEmployeeService = function () {
    var client = react_hooks_1.useApolloClient();
    return react_1.useMemo(function () {
        var fetchSelected = function (codes) {
            return client
                .query({
                query: queries_1.FETCH_SELECTED_EMPLOYEES,
                variables: {
                    codes: codes
                }
            })
                .then(extractEmployees);
        };
        return {
            fetchSelected: fetchSelected
        };
    }, []);
};
exports.default = useEmployeeService;
//# sourceMappingURL=employeeService.js.map