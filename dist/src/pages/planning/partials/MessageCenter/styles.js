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
var constants_1 = require("../../constants");
exports.MessageCenterWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  width: ", "px;\n  height: calc(100% - ", "px - ", "px);\n  padding: 25px;\n  background-color: ", ";\n  z-index: 3;\n  box-sizing: border-box;\n"], ["\n  position: absolute;\n  right: 0;\n  width: ", "px;\n  height: calc(100% - ", "px - ", "px);\n  padding: 25px;\n  background-color: ", ";\n  z-index: 3;\n  box-sizing: border-box;\n"])), constants_1.MESSAGES_MENU_WIDTH, constants_1.TOP_MENU_HEIGHT, constants_1.DIVIDER_HEIGHT, Colors_1.default.fiord);
exports.MessageCenterTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n  margin-bottom: 26px;\n"], ["\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n  margin-bottom: 26px;\n"])));
exports.PinButton = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  && {\n    position: absolute;\n    top: 25px;\n    right: 44px;\n    width: 27px;\n    height: 27px;\n    cursor: pointer;\n  }\n"], ["\n  && {\n    position: absolute;\n    top: 25px;\n    right: 44px;\n    width: 27px;\n    height: 27px;\n    cursor: pointer;\n  }\n"])));
exports.Message = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  padding: 0 47px 0 30px;\n  margin-bottom: 14px;\n"], ["\n  position: relative;\n  padding: 0 47px 0 30px;\n  margin-bottom: 14px;\n"])));
exports.MessageType = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  left: 0;\n  top: calc(50% - 5px);\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  left: 0;\n  top: calc(50% - 5px);\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n  background-color: ", ";\n"])), function (_a) {
    var color = _a.color;
    return color;
});
exports.MessageText = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n  padding-bottom: 14px;\n  font-weight: bold;\n"], ["\n  font-size: 14px;\n  color: ", ";\n  padding-bottom: 14px;\n  font-weight: bold;\n"])), Colors_1.default.twilightBlue);
exports.HideMessageButton = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-bottom: 31px;\n  font-size: 14px;\n  text-decoration: underline;\n  color: ", ";\n  opacity: 0.5;\n  cursor: pointer;\n"], ["\n  margin-bottom: 31px;\n  font-size: 14px;\n  text-decoration: underline;\n  color: ", ";\n  opacity: 0.5;\n  cursor: pointer;\n"])), Colors_1.default.twilightBlue);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styles.js.map