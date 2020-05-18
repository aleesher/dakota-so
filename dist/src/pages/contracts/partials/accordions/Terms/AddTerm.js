"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var AddTerm = function (_a) {
    var onClick = _a.onClick;
    return (react_1.default.createElement(exports.Button, { onClick: onClick },
        react_1.default.createElement(exports.Content, null,
            react_1.default.createElement(exports.IconWrapper, null,
                react_1.default.createElement(Add_1.default, { fontSize: "inherit" })),
            react_1.default.createElement(exports.Text, null, "Termijn toevoegen"))));
};
exports.Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  border: 2px dashed ", ";\n  background-color: transparent;\n  cursor: pointer;\n"], ["\n  height: 100%;\n  width: 100%;\n  border: 2px dashed ", ";\n  background-color: transparent;\n  cursor: pointer;\n"])), Colors_1.default.pattensBlue);
exports.Content = styled_components_1.default.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
exports.IconWrapper = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 36px;\n  color: ", ";\n"], ["\n  font-size: 36px;\n  color: ", ";\n"])), Colors_1.default.heather);
exports.Text = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 14px;\n  text-decoration: underline;\n"], ["\n  font-size: 14px;\n  text-decoration: underline;\n"])));
exports.default = AddTerm;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=AddTerm.js.map