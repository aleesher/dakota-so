"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Menu_1 = __importDefault(require("@material-ui/core/Menu"));
var CustomItem_1 = __importDefault(require("./CustomItem"));
var CustomActionMenu = function (_a) {
    var anchorEl = _a.anchorEl, open = _a.open, onClose = _a.onClose, items = _a.items;
    return (react_1.default.createElement(Menu_1.default, { anchorEl: anchorEl, open: open, onClose: onClose },
        react_1.default.createElement("div", { onMouseLeave: onClose, style: { outline: "none" } }, items.map(function (item) { return (react_1.default.createElement(CustomItem_1.default, { key: item.label, item: item, onClose: onClose })); }))));
};
exports.default = CustomActionMenu;
//# sourceMappingURL=index.js.map