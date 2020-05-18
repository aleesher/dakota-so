"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@apollo/react-hooks");
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var helpers_1 = require("../../../../helpers");
var queries_1 = require("../../queries");
var context_1 = require("../context");
function extractOrders(response) {
    return get_1.default(response, "data.workOrders", []);
}
var useOrderService = function () {
    var client = react_hooks_1.useApolloClient();
    var settings = react_1.useContext(context_1.PlanningStateContext).settings;
    var startDate = settings.startDate, endDate = settings.endDate, employeeResourceCodes = settings.employeeResourceCodes;
    var fetchOrders = function () {
        return client
            .query({
            query: queries_1.FETCH_UNASSIGNED_ORDERS,
            variables: {
                startDate: startDate,
                endDate: endDate
            }
        })
            .then(extractOrders);
    };
    var fetchEmployeeOrders = function () {
        return client
            .query({
            query: queries_1.FETCH_ORDERS_OF_SELECTED_EMPLOYEES,
            variables: {
                resourceCodes: employeeResourceCodes,
                startDate: startDate,
                endDate: endDate
            }
        })
            .then(extractOrders);
    };
    var updateOrder = function (code, data) {
        return client
            .mutate({
            mutation: queries_1.UPDATE_WORK_ORDER,
            variables: {
                code: code,
                data: data
            }
        })
            .catch(function () {
            helpers_1.notification.addNotification({
                type: "danger",
                message: "Er is een fout opgetreden"
            });
        });
    };
    var updateSeveralOrders = function (orders) {
        return client
            .mutate({
            mutation: queries_1.UPDATE_SEVERAL_WORK_ORDERS,
            variables: { orders: orders }
        })
            .catch(function () {
            helpers_1.notification.addNotification({
                type: "danger",
                message: "Er is een fout opgetreden"
            });
        });
    };
    return {
        fetchOrders: fetchOrders,
        fetchEmployeeOrders: fetchEmployeeOrders,
        updateOrder: updateOrder,
        updateSeveralOrders: updateSeveralOrders
    };
};
exports.default = useOrderService;
//# sourceMappingURL=orderService.js.map