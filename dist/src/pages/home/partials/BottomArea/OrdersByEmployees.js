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
var get_1 = __importDefault(require("lodash/get"));
var react_hooks_1 = require("@apollo/react-hooks");
var components_1 = require("dakota-portal/dist/components");
var constants_1 = require("../../constants");
var queries_1 = require("../../queries");
var styles_1 = require("../../styles");
var Cockpit_1 = __importDefault(require("./Cockpit"));
var OrdersByEmployees = function (_a) {
    var employeeCodes = _a.employeeCodes, statuses = _a.statuses, limit = _a.limit, startDate = _a.startDate, endDate = _a.endDate, filterRow = _a.filterRow, userId = _a.userId;
    var _b = react_1.useState(filterRow.employee), filterState = _b[0], setFilter = _b[1];
    react_1.useEffect(function () {
        var filteredKey = Object.keys(filterRow.employee).filter(function (k) {
            return filterRow.employee[k];
        });
        var filteredColumn = constants_1.EMPLOYEE_COCKPIT_COLUMNS.filter(function (d) {
            return filteredKey.includes(d.key);
        });
        setFilter(filteredColumn);
    }, [filterRow]);
    var _c = react_hooks_1.useQuery(queries_1.FETCH_SERVICE_ORDERS_BY_EMPLOYEES, {
        variables: {
            where: {
                employeeCode_in: employeeCodes.length > 0 ? employeeCodes : undefined,
                status_in: statuses,
                creationDate_gte: startDate,
                creationDate_lte: endDate,
                cratedBy: userId
            },
            limit: limit
        }
    }), loading = _c.loading, error = _c.error, data = _c.data;
    if (loading) {
        return (react_1.default.createElement(styles_1.CockpitLoaderWrapper, null,
            react_1.default.createElement(components_1.Loader, null)));
    }
    if (error) {
        return react_1.default.createElement("div", null, error);
    }
    var rows = get_1.default(data, "amountOfServiceOrdersByEmployees.rows");
    var totalRow = get_1.default(data, "amountOfServiceOrdersByEmployees.totalRow");
    return (react_1.default.createElement(Cockpit_1.default, { columns: filterState, dataSource: rows, totalRow: totalRow, filterRow: filterRow }));
};
exports.default = OrdersByEmployees;
//# sourceMappingURL=OrdersByEmployees.js.map