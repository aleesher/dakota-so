"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxIcon_1 = __importDefault(require("../../../icons/CheckboxIcon"));
var styles_1 = require("./styles");
var CustomCheckbox = function (_a) {
    var label = _a.label, onClick = _a.onClick, checked = _a.checked, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.CheckboxLabel, { onClick: function () { return !disabled && onClick(); } },
            react_1.default.createElement(CheckboxIcon_1.default, { checked: checked, disabled: disabled }),
            label)));
};
exports.default = CustomCheckbox;
//# sourceMappingURL=index.js.map