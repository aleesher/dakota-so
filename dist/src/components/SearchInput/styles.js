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
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.Icon = styled_components_1.default(Search_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: 30%;\n  top: 2px;\n  left: 0;\n  position: absolute;\n"], ["\n  opacity: 30%;\n  top: 2px;\n  left: 0;\n  position: absolute;\n"])));
exports.Input = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-left: 34px;\n  border: 0;\n  font-size: 20px;\n  opacity: 30%;\n"], ["\n  padding-left: 34px;\n  border: 0;\n  font-size: 20px;\n  opacity: 30%;\n"])));
exports.Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  color: ", " ", " {\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  color: ", " ", " {\n    background-color: ", ";\n  }\n"])), function (props) { return props.color || Colors_1.default.arsenic; }, exports.Input, function (props) { return props.bgColor || Colors_1.default.heather; });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styles.js.map