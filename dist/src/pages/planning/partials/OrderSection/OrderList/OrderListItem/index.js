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
var Menu_1 = __importDefault(require("@material-ui/core/Menu"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var page_1 = require("../../../../provider/page");
var settings_1 = require("../../../../provider/settings");
var styles_1 = require("../../../../styles");
var OrderFieldValue_1 = __importDefault(require("../../../components/OrderFieldValue"));
var ThreeDotsIcon_1 = __importDefault(require("../../../icons/ThreeDotsIcon"));
var styles_2 = require("./styles");
var MENU_ITEMS = ["Bewerken Werkorder", "Bewerken Serviceorder"];
var OrderListItem = function (_a) {
    var workOrder = _a.workOrder;
    var fieldTypes = page_1.usePageState().fieldTypes;
    var _b = settings_1.useSettingsState(), uiPreferences = _b.uiPreferences, timeUnit = _b.timeUnit;
    var setOrderViewDate = settings_1.useSettingsDispatch().setOrderViewDate;
    var _c = react_1.useState(null), anchorEl = _c[0], setAnchorEl = _c[1];
    var handleClickMenu = function (event) { return setAnchorEl(event.currentTarget); };
    var handleCloseMenu = function () { return setAnchorEl(null); };
    var handleClickOrder = function () {
        if (timeUnit === "day" && workOrder.startDate) {
            setOrderViewDate(workOrder.startDate);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.ListItemWrapper, { onClick: handleClickOrder },
            react_1.default.createElement(styles_2.OrderItemInfo, null, uiPreferences.orderFields.map(function (f, i) { return (react_1.default.createElement("div", { key: f + i },
                react_1.default.createElement(OrderFieldValue_1.default, { type: fieldTypes[f], value: workOrder[f] }))); })),
            react_1.default.createElement(styles_2.OrderItemType, null, workOrder.soOrderType.toLowerCase()),
            react_1.default.createElement(styles_1.ListItemActionsMenuButton, { onClick: handleClickMenu },
                react_1.default.createElement(ThreeDotsIcon_1.default, null))),
        react_1.default.createElement(Menu_1.default, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleCloseMenu }, MENU_ITEMS.map(function (item) { return (react_1.default.createElement(MenuItem_1.default, { key: item, onClick: handleCloseMenu }, item)); }))));
};
exports.default = OrderListItem;
//# sourceMappingURL=index.js.map