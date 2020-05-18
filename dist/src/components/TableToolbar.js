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
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border: 1px solid ", ";\n  padding: 12px 12px 12px 32px;\n"], ["\n  display: flex;\n  align-items: center;\n  border: 1px solid ", ";\n  padding: 12px 12px 12px 32px;\n"])), Colors_1.default.pattensBlue);
exports.ToolbarLeft = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex: 2;\n"], ["\n  display: flex;\n  flex: 2;\n"])));
exports.TableToolbarItemText = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 14px;\n  font-weight: 500;\n  margin-left: 8px;\n"], ["\n  font-size: 14px;\n  font-weight: 500;\n  margin-left: 8px;\n"])));
exports.TableToolbarItem = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  cursor: pointer;\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n\n  ", " {\n    color: ", ";\n    opacity: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  cursor: pointer;\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n\n  ", " {\n    color: ", ";\n    opacity: ", ";\n  }\n"])), function (props) { return (props.active ? Colors_1.default.primary : Colors_1.default.heather); }, exports.TableToolbarItemText, function (props) { return (props.active ? Colors_1.default.primary : Colors_1.default.fiord); }, function (props) { return (props.active ? 1 : 0.5); });
exports.TableToolbarSelect = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-left: 1px solid ", ";\n  padding: 0 14px;\n"], ["\n  border-left: 1px solid ", ";\n  padding: 0 14px;\n"])), Colors_1.default.pattensBlue);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=TableToolbar.js.map