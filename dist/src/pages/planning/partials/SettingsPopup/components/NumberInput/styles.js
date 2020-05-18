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
exports.StyledAdornment = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: ", "px;\n  font-size: 18px;\n  color: ", ";\n"], ["\n  position: absolute;\n  left: ", "px;\n  font-size: 18px;\n  color: ", ";\n"])), function (_a) {
    var length = _a.length;
    return 25 + length * 9;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? Colors_1.default.gullGrey : Colors_1.default.arsenic);
});
var templateObject_1;
//# sourceMappingURL=styles.js.map