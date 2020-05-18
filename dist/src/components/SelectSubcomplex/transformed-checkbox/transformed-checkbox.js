"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("./styles");
var TransformedCheckbox = function (_a) {
    var checked = _a.checked, onChange = _a.onChange;
    if (checked === "notfullychecked") {
        return (react_1.default.createElement(styles_1.Container, { onClick: function () { return onChange("unchecked"); } },
            react_1.default.createElement(styles_1.Button, null,
                react_1.default.createElement(styles_1.Dots, null, ".."))));
    }
    return (react_1.default.createElement(components_1.Checkbox, { checked: checked === "checked", onClick: function () {
            return onChange(checked === "unchecked" ? "checked" : "notfullychecked");
        } }));
};
exports.default = TransformedCheckbox;
//# sourceMappingURL=transformed-checkbox.js.map