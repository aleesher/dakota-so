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
var constants_1 = require("./constants");
exports.PlanningPageContentStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  * {\n    font-family: \"Roboto\", sans-serif;\n  }\n"], ["\n  position: relative;\n\n  * {\n    font-family: \"Roboto\", sans-serif;\n  }\n"])));
exports.SelectableSectionWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: fit-content;\n  min-height: 100%;\n  background-color: ", ";\n  box-shadow: ", ";\n"], ["\n  width: ",
    ";\n  height: fit-content;\n  min-height: 100%;\n  background-color: ", ";\n  box-shadow: ",
    ";\n"])), function (_a) {
    var isLeft = _a.isLeft;
    return isLeft ? constants_1.LIST_WIDTH + "px" : "calc(100% - " + constants_1.LIST_WIDTH + "px)";
}, function (_a) {
    var isLeft = _a.isLeft;
    return (isLeft ? "white" : "none");
}, function (_a) {
    var isSelected = _a.isSelected;
    return isSelected ? "inset 0 0 4px 1px " + Colors_1.default.dodgerBlue : "none";
});
exports.Divider = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n"])), constants_1.DIVIDER_HEIGHT, Colors_1.default.gullGrey2);
exports.SectionWrapper = styled_components_1.default.section(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n"], ["\n  box-sizing: border-box;\n"])));
exports.SectionHeader = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  height: ", "px;\n  background-color: ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n  height: ", "px;\n  background-color: ", ";\n"])), constants_1.CALENDAR_HEADER_HEIGHT, Colors_1.default.aliceBlue5);
exports.SectionBody = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  height: calc(100% - ", "px);\n  box-sizing: border-box;\n\n  overflow-y: auto;\n"], ["\n  display: flex;\n  flex-direction: row;\n  height: calc(100% - ", "px);\n  box-sizing: border-box;\n\n  overflow-y: auto;\n"])), constants_1.CALENDAR_HEADER_HEIGHT);
/* list */
exports.ListBody = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: fit-content;\n  box-sizing: border-box;\n  border-right: 1px solid ", ";\n  box-shadow: 15px 0px 30px 0px rgba(0, 0, 0, 0.1);\n"], ["\n  height: fit-content;\n  box-sizing: border-box;\n  border-right: 1px solid ", ";\n  box-shadow: 15px 0px 30px 0px rgba(0, 0, 0, 0.1);\n"])), Colors_1.default.gullGrey2);
exports.ListItemWrapper = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: ", "px;\n  width: auto;\n  box-sizing: border-box;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: ", "px;\n  width: auto;\n  box-sizing: border-box;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n"])), function (_a) {
    var height = _a.height;
    return height || constants_1.CALENDAR_LINE_HEIGHT;
}, Colors_1.default.pattensBlue);
exports.ListItemActionsMenuButton = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-top: -5px;\n  margin-right: 27px;\n  cursor: pointer;\n"], ["\n  margin-top: -5px;\n  margin-right: 27px;\n  cursor: pointer;\n"])));
/* calendar */
exports.CalendarWrapper = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: relative;\n  height: fit-content;\n  box-sizing: border-box;\n  overflow-x: hidden;\n"], ["\n  position: relative;\n  height: fit-content;\n  box-sizing: border-box;\n  overflow-x: hidden;\n"])));
exports.CalendarHeader = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  flex: auto;\n"], ["\n  flex: auto;\n"])));
exports.TimeLineWrapper = styled_components_1.default.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: relative;\n  align-items: center;\n  height: ", "px;\n  box-sizing: border-box;\n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  position: relative;\n  align-items: center;\n  height: ", "px;\n  box-sizing: border-box;\n  &:not(:last-child) {\n    border-bottom: 1px solid ", ";\n  }\n"])), function (_a) {
    var height = _a.height;
    return height || constants_1.CALENDAR_LINE_HEIGHT;
}, Colors_1.default.pattensBlue);
exports.WorkOrderGroupWrapper = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: absolute;\n  height: ", "px;\n  top: 8px;\n  left: ", "px;\n  width: ", "px;\n  box-shadow: 0 16px 38px 0 rgba(175, 175, 175, 0.35);\n  border: 2px solid white;\n  border-radius: 5px;\n  box-sizing: border-box;\n  overflow: hidden;\n  background-color: white;\n  margin-left: 5px;\n  padding: 10px;\n  box-sizing: border-box;\n  width: ", "px;\n"], ["\n  position: absolute;\n  height: ", "px;\n  top: 8px;\n  left: ", "px;\n  width: ", "px;\n  box-shadow: 0 16px 38px 0 rgba(175, 175, 175, 0.35);\n  border: 2px solid white;\n  border-radius: 5px;\n  box-sizing: border-box;\n  overflow: hidden;\n  background-color: white;\n  margin-left: 5px;\n  padding: 10px;\n  box-sizing: border-box;\n  width: ", "px;\n"])), constants_1.ORDER_HEIGHT, function (_a) {
    var start = _a.start;
    return start;
}, function (_a) {
    var start = _a.start, end = _a.end;
    return end - start;
}, function (_a) {
    var start = _a.start, end = _a.end;
    return end - start - 10;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=styles.js.map