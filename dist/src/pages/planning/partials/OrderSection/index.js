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
var OrderListHeader_1 = __importDefault(require("./OrderListHeader"));
var OrderSectionBody_1 = __importDefault(require("./OrderSectionBody"));
var OrderSection = function () {
    var _a = provider_1.useSettingsState(), orderTimeScale = _a.orderTimeScale, orderViewDate = _a.orderViewDate, startDate = _a.startDate, endDate = _a.endDate, fixedAmountOfEmployees = _a.fixedAmountOfEmployees, employeeCodes = _a.employeeCodes;
    var setOrderViewDate = provider_1.useSettingsDispatch().setOrderViewDate;
    var calendarWidth = provider_1.usePageState().calendarWidth;
    var fetchOrders = provider_1.useDataDispatch().fetchOrders;
    var styles = react_1.useMemo(function () {
        var amountOfEmployees = Math.min(employeeCodes.length, fixedAmountOfEmployees);
        var height = window.innerHeight -
            (constants_1.TOP_MENU_HEIGHT +
                constants_1.DIVIDER_HEIGHT +
                constants_1.CALENDAR_HEADER_HEIGHT +
                amountOfEmployees * constants_1.CALENDAR_LINE_HEIGHT +
                constants_1.DIVIDER_HEIGHT);
        return {
            width: calendarWidth + constants_1.LIST_WIDTH,
            height: height,
            minHeight: constants_1.CALENDAR_HEADER_HEIGHT + constants_1.CALENDAR_LINE_HEIGHT * 4
        };
    }, [
        calendarWidth,
        fixedAmountOfEmployees,
        employeeCodes,
        window.innerHeight
    ]);
    react_1.useEffect(fetchOrders, [startDate, endDate]);
    return (react_1.default.createElement(styles_1.SectionWrapper, { style: styles },
        react_1.default.createElement(styles_1.SectionHeader, null,
            react_1.default.createElement(OrderListHeader_1.default, null),
            react_1.default.createElement(styles_1.CalendarHeader, null,
                react_1.default.createElement(CalendarScrollbar_1.default, { viewDate: orderViewDate, onChange: setOrderViewDate }),
                react_1.default.createElement(CalendarTimeScale_1.default, { timeScale: orderTimeScale }))),
        react_1.default.createElement(OrderSectionBody_1.default, null)));
};
exports.default = OrderSection;
//# sourceMappingURL=index.js.map