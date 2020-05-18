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
var components_1 = require("dakota-portal/dist/components");
var constants_1 = require("../../constants");
var queries_1 = require("../../queries");
var styles_1 = require("../../styles");
var Cockpit_1 = __importDefault(require("./Cockpit"));
var OrdersByCustomers = function (_a) {
    var customerCodes = _a.customerCodes, statuses = _a.statuses, limit = _a.limit, startDate = _a.startDate, filterRow = _a.filterRow, endDate = _a.endDate;
    var _b = react_1.useState(filterRow.customer), filterState = _b[0], setFilter = _b[1];
    react_1.useEffect(function () {
        var filteredKey = Object.keys(filterRow.customer).filter(function (k) {
            return filterRow.customer[k];
        });
        var filteredColumn = constants_1.CUSTOMER_COCKPIT_COLUMNS.filter(function (d) {
            return filteredKey.includes(d.key);
        });
        setFilter(filteredColumn);
    }, [filterRow]);
    var _c = react_hooks_1.useQuery(queries_1.FETCH_SERVICE_ORDERS_BY_CUSTOMERS, {
        variables: {
            where: {
                customerCode_in: customerCodes.length > 0 ? customerCodes : undefined,
                status_in: statuses,
                creationDate_gte: startDate,
                creationDate_lte: endDate
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
    var rows = get_1.default(data, "amountOfServiceOrdersByCustomers.rows");
    var totalRow = get_1.default(data, "amountOfServiceOrdersByCustomers.totalRow");
    return (react_1.default.createElement(Cockpit_1.default, { columns: filterState, dataSource: rows, totalRow: totalRow, filterRow: filterRow }));
};
exports.default = OrdersByCustomers;
//# sourceMappingURL=OrdersByCustomers.js.map