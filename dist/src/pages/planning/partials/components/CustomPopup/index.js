"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var CloseIcon_1 = __importDefault(require("../../icons/CloseIcon"));
var styles_2 = require("./styles");
var StyledDialog = styles_1.withStyles(function () { return ({
    root: {
        "& > div:first-child": {
            backgroundColor: "rgba(50, 65, 78, 0.76)"
        }
    },
    paper: {
        width: 1154,
        maxWidth: 1154
    }
}); })(Dialog_1.default);
var CustomPopup = function (_a) {
    var title = _a.title, open = _a.open, onClose = _a.onClose, _b = _a.withHeaderBorder, withHeaderBorder = _b === void 0 ? false : _b, children = _a.children;
    return (react_1.default.createElement(StyledDialog, { open: open, onClose: onClose, scroll: "body", disableBackdropClick: true, disableEscapeKeyDown: true },
        react_1.default.createElement(styles_2.ClosePopupButton, { onClick: onClose },
            react_1.default.createElement(CloseIcon_1.default, null)),
        react_1.default.createElement(styles_2.PopupTitle, { withBorder: withHeaderBorder }, title),
        children));
};
exports.default = CustomPopup;
//# sourceMappingURL=index.js.map