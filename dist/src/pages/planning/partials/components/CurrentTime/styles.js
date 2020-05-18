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
exports.StyledCurrentTimeline = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  left: ", "px;\n  width: 2px;\n  height: 100%;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  left: ", "px;\n  width: 2px;\n  height: 100%;\n  background-color: ", ";\n"])), function (_a) {
    var x = _a.x;
    return x;
}, Colors_1.default.dodgerBlue);
var templateObject_1;
//# sourceMappingURL=styles.js.map