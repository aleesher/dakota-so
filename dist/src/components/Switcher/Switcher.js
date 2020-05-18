"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var Switcher = function (_a) {
    var options = _a.options, active = _a.active, onChange = _a.onChange;
    var _b = react_1.default.useState(active), activeOption = _b[0], setActiveOption = _b[1];
    var handleChange = function (active) {
        setActiveOption(active);
        onChange(active);
    };
    return (react_1.default.createElement(styles_1.Container, null, options.map(function (option) { return (react_1.default.createElement(styles_1.Option, { isActive: option.value === activeOption.value, key: option.value, onClick: function () { return handleChange(option); } }, option.label)); })));
};
exports.default = Switcher;
//# sourceMappingURL=Switcher.js.map