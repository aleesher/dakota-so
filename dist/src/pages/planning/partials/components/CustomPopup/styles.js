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
exports.ClosePopupButton = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  cursor: pointer;\n  top: 25px;\n  right: 39px;\n  width: 21px;\n  height: 21px;\n"], ["\n  position: absolute;\n  cursor: pointer;\n  top: 25px;\n  right: 39px;\n  width: 21px;\n  height: 21px;\n"])));
exports.PopupTitle = styled_components_1.default.h6(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  padding-bottom: 18px;\n  border-bottom: ", ";\n  margin: 50px 0 42px;\n  font-size: 29px;\n  font-weight: bold;\n  text-align: center;\n"], ["\n  box-sizing: border-box;\n  padding-bottom: 18px;\n  border-bottom: ",
    ";\n  margin: 50px 0 42px;\n  font-size: 29px;\n  font-weight: bold;\n  text-align: center;\n"])), function (_a) {
    var withBorder = _a.withBorder;
    return withBorder ? "1px solid " + Colors_1.default.lightGray : "none";
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map