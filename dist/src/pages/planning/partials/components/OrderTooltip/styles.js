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
exports.OrderTooltipRow = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"])));
exports.OrderTooltipField = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: bold;\n  width: 220px;\n  margin-right: 10px;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  width: 220px;\n  margin-right: 10px;\n  color: ", ";\n"])), function (_a) {
    var color = _a.color;
    return color || "white";
});
exports.OrderTooltipValue = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), Colors_1.default.ghost);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map