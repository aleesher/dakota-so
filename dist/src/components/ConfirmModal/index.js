"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("../../pages/serviceOrder/styles");
var styles_2 = require("./styles");
exports.default = (function (_a) {
    var text = _a.text, onCancel = _a.onCancel, onConfirm = _a.onConfirm, onClose = _a.onClose;
    return (react_1.default.createElement(styles_2.ModalWrapper, null,
        react_1.default.createElement(styles_2.ModalText, null, text),
        react_1.default.createElement(styles_2.ModalClose, { onClick: onClose }),
        react_1.default.createElement(styles_1.ButtonWrapper, { justify: "center" },
            react_1.default.createElement(styles_1.TransparentButton, { onClick: onCancel }, "annuleren"),
            react_1.default.createElement(styles_1.FilledButton, { onClick: onConfirm }, "bevestigen"))));
});
//# sourceMappingURL=index.js.map