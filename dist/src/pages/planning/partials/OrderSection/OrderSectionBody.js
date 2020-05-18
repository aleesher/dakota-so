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
var OrderCalendar_1 = __importDefault(require("./OrderCalendar"));
var OrderList_1 = __importDefault(require("./OrderList"));
var OrderSectionBody = function () {
    var _a = provider_1.usePageState(), searchText = _a.searchText, activeSection = _a.activeSection;
    var orders = provider_1.useDataState().orders;
    var _b = provider_1.useSettingsState(), uiPreferences = _b.uiPreferences, fixedAmountOfOrders = _b.fixedAmountOfOrders;
    var visibleOrders = react_1.useMemo(function () {
        if (searchText !== "" &&
            (activeSection === constants_1.SECTION.WORK_ORDER_LIST ||
                activeSection === constants_1.SECTION.WORK_ORDER_CALENDAR)) {
            var filtered = orders.filtered(function (o) {
                return uiPreferences.orderFields.some(function (f) {
                    return o[f].toLowerCase().includes(searchText);
                });
            });
            return filtered.slice(0, fixedAmountOfOrders);
        }
        return orders.all().slice(0, fixedAmountOfOrders);
    }, [orders, searchText, activeSection, fixedAmountOfOrders]);
    return (react_1.default.createElement(styles_1.SectionBody, null,
        react_1.default.createElement(OrderList_1.default, { isLeft: true, section: constants_1.SECTION.WORK_ORDER_LIST, orders: visibleOrders }),
        react_1.default.createElement(OrderCalendar_1.default, { section: constants_1.SECTION.WORK_ORDER_CALENDAR, orders: visibleOrders })));
};
exports.default = OrderSectionBody;
//# sourceMappingURL=OrderSectionBody.js.map