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
var components_1 = require("dakota-portal/dist/components");
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.SettingsTabsWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-end;\n  height: 53px;\n  padding-left: 40px;\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  align-items: flex-end;\n  height: 53px;\n  padding-left: 40px;\n  border-bottom: 1px solid ", ";\n"])), Colors_1.default.aliceBlue2);
exports.SettingsTab = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 8px;\n  width: 207px;\n  height: 53px;\n  background-color: ", ";\n  color: ", ";\n  font-size: 17px;\n  font-weight: 500;\n  cursor: pointer;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 8px;\n  width: 207px;\n  height: 53px;\n  background-color: ",
    ";\n  color: ", ";\n  font-size: 17px;\n  font-weight: 500;\n  cursor: pointer;\n"])), function (_a) {
    var isActive = _a.isActive;
    return isActive ? Colors_1.default.dodgerBlue : Colors_1.default.aliceBlue2;
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "white" : Colors_1.default.dimGray);
});
exports.SettingsContentWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  margin: 65px 180px 80px 0;\n  padding-left: 40px;\n  padding-bottom: 65px;\n"], ["\n  position: relative;\n  margin: 65px 180px 80px 0;\n  padding-left: 40px;\n  padding-bottom: 65px;\n"])));
exports.SaveSettingsButton = styled_components_1.default(components_1.Button)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  && {\n    position: absolute;\n    right: 180px;\n    bottom: 80px;\n    height: 56px;\n    width: 171px;\n    font-size: 18px;\n    text-transform: capitalize;\n    background-color: ", ";\n    border-radius: 7px;\n  }\n"], ["\n  && {\n    position: absolute;\n    right: 180px;\n    bottom: 80px;\n    height: 56px;\n    width: 171px;\n    font-size: 18px;\n    text-transform: capitalize;\n    background-color: ", ";\n    border-radius: 7px;\n  }\n"])), Colors_1.default.royalBlue);
exports.FormRow = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n"])));
exports.Label = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", "\n  margin-right: 40px;\n  font-size: 17px;\n  color: ", ";\n  \n  ", "}\n"], ["\n  width: ", "\n  margin-right: 40px;\n  font-size: 17px;\n  color: ", ";\n  \n  ",
    "}\n"])), function (_a) {
    var width = _a.width;
    return (!!width ? width + "px" : "auto");
}, Colors_1.default.raven, function (_a) {
    var width = _a.width;
    return !!width && styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      width: ", "px;\n    "], ["\n      width: ", "px;\n    "])), width);
});
exports.StyledSelect = styled_components_1.default(components_1.Select)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  flex: 1;\n  background-color: white;\n\n  .default__control {\n    padding: 0 36px 0 16px;\n    height: 60px;\n    width: 430px;\n    border-width: 2px !important;\n    border-radius: 5px !important;\n  }\n"], ["\n  flex: 1;\n  background-color: white;\n\n  .default__control {\n    padding: 0 36px 0 16px;\n    height: 60px;\n    width: 430px;\n    border-width: 2px !important;\n    border-radius: 5px !important;\n  }\n"])));
exports.CurrentColorWrapper = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-left: 18px;\n"], ["\n  margin-left: 18px;\n"])));
exports.AddColorButton = styled_components_1.default(exports.SaveSettingsButton)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  && {\n    position: absolute;\n    right: 0;\n    top: 0;\n    background-color: white;\n    border: 1px solid ", ";\n    box-sizing: border-box;\n    color: ", ";\n    box-shadow: none;\n\n    :hover {\n      background-color: white;\n      color: ", ";\n    }\n  }\n"], ["\n  && {\n    position: absolute;\n    right: 0;\n    top: 0;\n    background-color: white;\n    border: 1px solid ", ";\n    box-sizing: border-box;\n    color: ", ";\n    box-shadow: none;\n\n    :hover {\n      background-color: white;\n      color: ", ";\n    }\n  }\n"])), Colors_1.default.royalBlue, Colors_1.default.royalBlue, Colors_1.default.royalBlue);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=styles.js.map