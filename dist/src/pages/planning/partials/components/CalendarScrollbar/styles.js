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
var constants_1 = require("../../../constants");
exports.CalendarScrollbarWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"])));
exports.CalendarViewDateWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: auto;\n  padding-left: 22px\n  box-sizing: border-box;\n  width: ", "px;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: capitalize;\n"], ["\n  margin-right: auto;\n  padding-left: 22px\n  box-sizing: border-box;\n  width: ", "px;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: capitalize;\n"])), constants_1.CALENDAR_DATE_WIDTH);
exports.CalendarScroll = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", "px;\n  height: 7px;\n  background-color: ", "4d;\n  border-radius: 3.5px;\n"], ["\n  width: ", "px;\n  height: 7px;\n  background-color: ", "4d;\n  border-radius: 3.5px;\n"])), function (_a) {
    var width = _a.width;
    return width || constants_1.SCROLL_WIDTH;
}, Colors_1.default.gullGrey2);
exports.CurrentDay = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: ", "px;\n  margin-left: ", "px;\n  height: 7px;\n  background-color: ", ";\n  border-radius: 3.5px;\n"], ["\n  width: ", "px;\n  margin-left: ", "px;\n  height: 7px;\n  background-color: ", ";\n  border-radius: 3.5px;\n"])), function (_a) {
    var width = _a.width;
    return width || 800;
}, function (_a) {
    var marginLeft = _a.marginLeft;
    return marginLeft || 0;
}, Colors_1.default.gullGrey2);
exports.CalendarScrollButtons = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: ", "px;\n  padding-left: 31px;\n  padding-right: 21px;\n  display: flex;\n  justify-content: space-between;\n\n  div {\n    cursor: pointer;\n  }\n"], ["\n  box-sizing: border-box;\n  width: ", "px;\n  padding-left: 31px;\n  padding-right: 21px;\n  display: flex;\n  justify-content: space-between;\n\n  div {\n    cursor: pointer;\n  }\n"])), constants_1.SCROLL_BUTTONS_WIDTH);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styles.js.map