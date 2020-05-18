"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.CurrentColor = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 137px;\n  height: 49px;\n  background-color: ", ";\n  border-radius: 6px;\n  cursor: ", ";\n"], ["\n  width: 137px;\n  height: 49px;\n  background-color: ",
    ";\n  border-radius: 6px;\n  cursor: ", ";\n"])), function (_a) {
    var disabled = _a.disabled, color = _a.color;
    return disabled ? Colors_1.default.gullGrey : color;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "default" : "pointer");
});
var templateObject_1;
//# sourceMappingURL=styles.js.map