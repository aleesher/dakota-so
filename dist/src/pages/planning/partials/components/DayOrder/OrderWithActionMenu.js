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
var SelectableOrder_1 = __importDefault(require("./SelectableOrder"));
var styles_1 = require("./styles");
var ThreeDotsIcon_1 = __importDefault(require("../../icons/ThreeDotsIcon"));
var CustomActionMenu_1 = __importDefault(require("../CustomActionMenu"));
var MENU_ITEMS = [
    {
        label: "Werkorder",
        items: [
            { label: "Bewerken Werkorder" },
            { label: "Bewerken Serviceorder" },
            { label: "Vastgepland" }
        ]
    },
    {
        label: "Afwezigheid",
        items: [{ label: "Nieuw" }, { label: "Bewerken" }]
    },
    {
        label: "Buitendienst",
        items: [{ label: "Verzenden" }]
    }
];
var OrderWithActionMenu = function (_a) {
    var workOrder = _a.workOrder;
    var _b = react_1.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleClickMenu = function (e) {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
    };
    var handleCloseMenu = function (e) {
        e.stopPropagation();
        setAnchorEl(null);
    };
    return (react_1.default.createElement(styles_1.DayWithActionMenuWrapper, null,
        react_1.default.createElement(SelectableOrder_1.default, { workOrder: workOrder }),
        react_1.default.createElement(styles_1.OrderActionMenuButton, { className: "order-action-menu-button", onClick: handleClickMenu },
            react_1.default.createElement(ThreeDotsIcon_1.default, null)),
        react_1.default.createElement(CustomActionMenu_1.default, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleCloseMenu, items: MENU_ITEMS })));
};
exports.default = react_1.memo(OrderWithActionMenu);
//# sourceMappingURL=OrderWithActionMenu.js.map