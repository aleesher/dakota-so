"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_switch_1 = __importDefault(require("react-switch"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var styles_1 = require("../styles");
var CustomSwitch = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "" : _b, checked = _a.checked, onToggle = _a.onToggle;
    return (react_1.default.createElement(styles_1.SwitchWrapper, null,
        react_1.default.createElement("label", null,
            !!label && react_1.default.createElement("span", null, label),
            react_1.default.createElement(react_switch_1.default, { checked: checked, onChange: onToggle, onColor: Colors_1.default.dodgerBlue2, handleDiameter: 32, uncheckedIcon: false, checkedIcon: false, height: 40, width: 71, className: "react-switch" }))));
};
exports.default = CustomSwitch;
//# sourceMappingURL=CustomSwitch.js.map