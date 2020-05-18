"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var NumberPerPage = function (_a) {
    var label = _a.label, value = _a.value, options = _a.options, onChange = _a.onChange;
    return (react_1.default.createElement(styles_1.Container, null,
        react_1.default.createElement(styles_1.Label, null, label),
        react_1.default.createElement(styles_1.Select, { options: options, value: value, onChange: onChange })));
};
exports.default = NumberPerPage;
//# sourceMappingURL=NumberPerPage.js.map