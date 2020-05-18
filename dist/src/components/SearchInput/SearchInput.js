"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var SearchInput = function (_a) {
    var value = _a.value, onChange = _a.onChange, bgColor = _a.bgColor, color = _a.color;
    return (react_1.default.createElement(styles_1.Container, { bgColor: bgColor, color: color },
        react_1.default.createElement(styles_1.Icon, null),
        react_1.default.createElement(styles_1.Input, { placeholder: "Vind een sub-complexen", value: value, onChange: function (e) { return onChange(e.target.value); } })));
};
exports.default = SearchInput;
//# sourceMappingURL=SearchInput.js.map