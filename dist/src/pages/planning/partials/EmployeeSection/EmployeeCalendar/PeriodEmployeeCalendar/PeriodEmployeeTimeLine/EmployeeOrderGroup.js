"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var constants_1 = require("../../../../../../../constants");
var settings_1 = require("../../../../../provider/settings");
var styles_1 = require("../../../../../styles");
var OrderTooltip_1 = require("../../../../components/OrderTooltip");
var EmployeeOrderGroup = function (_a) {
    var orderGroup = _a.orderGroup;
    var employeeTimeScale = settings_1.useSettingsState().employeeTimeScale;
    var byStatus = react_1.useMemo(function () {
        return constants_1.ORDER_STATUS_KEYS.map(function (status) {
            var orders = orderGroup.orders.filter(function (o) { return o.soStatus === status; });
            return {
                status: status,
                amount: orders.length
            };
        });
    }, [orderGroup]);
    return (react_1.default.createElement(OrderTooltip_1.OrderGroupTooltip, { data: byStatus },
        react_1.default.createElement(styles_1.WorkOrderGroupWrapper, { start: employeeTimeScale.getX(orderGroup.startDate), end: employeeTimeScale.getX(orderGroup.endDate) },
            react_1.default.createElement("div", null,
                "Total: ",
                orderGroup.total))));
};
exports.default = EmployeeOrderGroup;
//# sourceMappingURL=EmployeeOrderGroup.js.map