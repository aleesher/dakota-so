"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Menu_1 = __importDefault(require("@material-ui/core/Menu"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var styles_1 = require("./styles");
var Menu = function (_a) {
    var _b = _a.position, position = _b === void 0 ? { top: "auto", right: "10px" } : _b, _c = _a.title, title = _c === void 0 ? "" : _c, actions = _a.actions;
    var _d = react_1.default.useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.Container, { position: position, title: title ? title : undefined, onClick: handleClick }, "..."),
        react_1.default.createElement(Menu_1.default, { id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose }, actions.map(function (_a) {
            var label = _a.label, onClick = _a.onClick;
            return (react_1.default.createElement(MenuItem_1.default, { key: label, onClick: function () {
                    handleClose();
                    onClick();
                } }, label));
        }))));
};
exports.default = Menu;
//# sourceMappingURL=SubcomplexMenu.js.map