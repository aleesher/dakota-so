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
var settings_1 = require("../../../../provider/settings");
var CurrentTime_1 = require("../../../components/CurrentTime");
var DayWorkOrder_1 = __importDefault(require("./DayWorkOrder"));
var DroppableOrderTimeLine_1 = __importDefault(require("./DroppableOrderTimeLine"));
var DayWorkOrderCalendar = function (_a) {
    var orders = _a.orders;
    var orderViewDate = settings_1.useSettingsState().orderViewDate;
    var viewOrders = react_1.useMemo(function () {
        return orders.filter(function (o) {
            return !o.isWithTime ||
                o.startTime.format("YYYYMMDD") === orderViewDate.format("YYYYMMDD");
        });
    }, [orderViewDate, orders]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CurrentTime_1.OrderCurrentTime, null),
        viewOrders.map(function (order) { return (react_1.default.createElement(DroppableOrderTimeLine_1.default, { key: order.code, order: order },
            react_1.default.createElement(DayWorkOrder_1.default, { key: order.code, workOrder: order }))); })));
};
exports.default = DayWorkOrderCalendar;
//# sourceMappingURL=index.js.map