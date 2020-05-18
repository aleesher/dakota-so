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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  border-radius: 25px;\n  background-color: #eff3f4;\n"], ["\n  display: inline-flex;\n  border-radius: 25px;\n  background-color: #eff3f4;\n"])));
exports.Option = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  padding: 14px 36px;\n  border-radius: 25px;\n  font-weight: bold;\n  white-space: nowrap;\n  cursor: pointer;\n\n  &:not(:last-child) {\n    margin-right: -14px;\n  }\n\n  ", "\n"], ["\n  flex: 1;\n  padding: 14px 36px;\n  border-radius: 25px;\n  font-weight: bold;\n  white-space: nowrap;\n  cursor: pointer;\n\n  &:not(:last-child) {\n    margin-right: -14px;\n  }\n\n  ",
    "\n"])), function (props) {
    return props.isActive && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      box-shadow: 0 0 14px -2px #ccd4d8;\n      background-color: white;\n      color: ", ";\n      pointer-events: none;\n    "], ["\n      box-shadow: 0 0 14px -2px #ccd4d8;\n      background-color: white;\n      color: ", ";\n      pointer-events: none;\n    "])), Colors_1.default.primary);
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map