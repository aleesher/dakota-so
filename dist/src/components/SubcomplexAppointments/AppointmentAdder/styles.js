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
exports.Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  ",
    "\n"])), function (props) {
    return !props.startedCreating && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      user-select: none;\n      cursor: pointer;\n\n      * {\n        display: none;\n      }\n    "], ["\n      user-select: none;\n      cursor: pointer;\n\n      * {\n        display: none;\n      }\n    "])));
});
exports.SelectWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 12px;\n  width: 62px;\n"], ["\n  margin-bottom: 12px;\n  width: 62px;\n"])));
exports.Input = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-left: 4px;\n  width: 20px;\n  outline: none;\n"], ["\n  margin-left: 4px;\n  width: 20px;\n  outline: none;\n"])));
exports.IntervalLabel = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 14px;\n"], ["\n  font-size: 14px;\n"])));
exports.CancelButton = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 4px;\n  right: -6px;\n\n  font-size: 15px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 4px;\n  right: -6px;\n\n  font-size: 15px;\n  cursor: pointer;\n"])));
exports.SubmitButton = styled_components_1.default(exports.CancelButton)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  right: 8px;\n"], ["\n  right: 8px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styles.js.map