"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
exports.Container = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  ", "\n  bottom: auto;\n  line-height: 0;\n  letter-spacing: 1px;\n  font-size: 18px;\n  font-family: initial;\n  font-weight: bold;\n  color: inherit;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  ",
    "\n  bottom: auto;\n  line-height: 0;\n  letter-spacing: 1px;\n  font-size: 18px;\n  font-family: initial;\n  font-weight: bold;\n  color: inherit;\n  cursor: pointer;\n"])), function (props) { return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    top: ", ";\n    right: ", ";\n  "], ["\n    top: ", ";\n    right: ", ";\n  "])), props.position.top, props.position.right); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map