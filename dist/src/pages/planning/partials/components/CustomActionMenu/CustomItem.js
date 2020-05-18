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
var CustomItem = function (_a) {
    var item = _a.item, onClose = _a.onClose;
    var _b = react_1.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleClick = function (e) {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
    };
    var handleClose = function (e) {
        e.stopPropagation();
        setAnchorEl(null);
        onClose(e);
    };
    return (react_1.default.createElement(MenuItem_1.default, { onClick: handleClick },
        item.label,
        !!item.items && (react_1.default.createElement(Menu_1.default, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleClose, anchorOrigin: { vertical: "top", horizontal: "right" } },
            react_1.default.createElement("div", { onMouseLeave: function () { return setAnchorEl(null); }, style: { outline: "none" } }, item.items.map(function (item) { return (react_1.default.createElement(MenuItem_1.default, { key: item.label, onClick: handleClose }, item.label)); }))))));
};
exports.default = CustomItem;
//# sourceMappingURL=CustomItem.js.map