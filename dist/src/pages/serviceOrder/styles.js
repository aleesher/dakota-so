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
var Link_1 = __importDefault(require("react-router-dom/Link"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var ArrowBack_1 = __importDefault(require("@material-ui/icons/ArrowBack"));
var ArrowForward_1 = __importDefault(require("@material-ui/icons/ArrowForward"));
var AccessTime_1 = __importDefault(require("@material-ui/icons/AccessTime"));
var CalendarToday_1 = __importDefault(require("@material-ui/icons/CalendarToday"));
var Settings_1 = __importDefault(require("@material-ui/icons/Settings"));
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var LocationOn_1 = __importDefault(require("@material-ui/icons/LocationOn"));
var components_1 = require("dakota-portal/dist/components");
exports.HeaderArrow = styled_components_1.default(ArrowBack_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 24px;\n"], ["\n  color: ", ";\n  font-size: 24px;\n"])), components_1.Colors.pattensBlue);
exports.HeaderStepWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  width: 150px;\n  align-items: center;\n  justify-content: center;\n  right: ", ";\n"], ["\n  position: absolute;\n  display: flex;\n  width: 150px;\n  align-items: center;\n  justify-content: center;\n  right: ", ";\n"])), function (_a) {
    var _b = _a.step, step = _b === void 0 ? 1 : _b;
    return (step === 1 ? "48px;" : "100px");
});
exports.HeaderDot = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  width: 20px;\n  height: 20px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  width: 20px;\n  height: 20px;\n"])), components_1.Colors.pattensBlue);
exports.HeaderStep = styled_components_1.default(exports.HeaderDot)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 50px;\n  height: 50px;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  font-size: 20px;\n  color: ", ";\n  top: -25px;\n  ", ";\n  cursor: pointer;\n"], ["\n  width: 50px;\n  height: 50px;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  font-size: 20px;\n  color: ", ";\n  top: -25px;\n  ",
    ";\n  cursor: pointer;\n"])), components_1.Colors.dodgerBlue, components_1.Colors.white, function (_a) {
    var _b = _a.align, align = _b === void 0 ? "left" : _b;
    return align === "left" ? "left: -25px" : "right: -25px";
});
exports.HeaderLine = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  height: 6px;\n  background-color: ", ";\n  flex: 1;\n"], ["\n  height: 6px;\n  background-color: ", ";\n  flex: 1;\n"])), function (_a) {
    var color = _a.color;
    return color;
});
exports.FormCard = styled_components_1.default(components_1.Card)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 0;\n  display: block;\n  margin-bottom: 40px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  padding: 0;\n  display: block;\n  margin-bottom: 40px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));
exports.CardTitle = styled_components_1.default(Grid_1.default).attrs(function (_a) {
    var _b = _a.xs, xs = _b === void 0 ? 12 : _b;
    return ({
        xs: xs,
        container: true
    });
})(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 24px;\n  padding: 30px 42px;\n  ", ";\n  position: relative;\n"], ["\n  color: ", ";\n  font-size: 24px;\n  padding: 30px 42px;\n  ",
    ";\n  position: relative;\n"])), components_1.Colors.arsenic, function (_a) {
    var _b = _a.hasborder, hasborder = _b === void 0 ? "true" : _b;
    return hasborder === "true"
        ? "border-bottom: 1px solid " + components_1.Colors.pattensBlue
        : "";
});
exports.CardContent = styled_components_1.default(Grid_1.default).attrs(function (_a) {
    var _b = _a.xs, xs = _b === void 0 ? 12 : _b;
    return ({
        container: true,
        item: true,
        direction: "row",
        xs: xs,
        alignItems: "flex-start",
        justify: "space-between"
    });
})(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: 4px 42px 24px;\n"], ["\n  padding: 4px 42px 24px;\n"])));
exports.CardForm = styled_components_1.default(Grid_1.default)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin: 10px 0;\n"], ["\n  margin: 10px 0;\n"])));
exports.InformationBox = styled_components_1.default(Grid_1.default)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: 6px;\n  overflow: hidden;\n  margin-top: 20px;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  border-radius: 6px;\n  overflow: hidden;\n  margin-top: 20px;\n"])), components_1.Colors.arsenic, components_1.Colors.white);
exports.InformationBoxBody = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  padding: 20px 30px;\n"], ["\n  padding: 20px 30px;\n"])));
exports.InformationBoxTitle = styled_components_1.default(exports.InformationBoxBody)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  color: ", ";\n  border-bottom: 1px solid ", ";\n"], ["\n  color: ", ";\n  border-bottom: 1px solid ", ";\n"])), components_1.Colors.white, components_1.Colors.fiord);
exports.InformatieRow = styled_components_1.default(Grid_1.default).attrs(function () { return ({
    xs: 12,
    container: true
}); })(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  margin-bottom: 25px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  margin-bottom: 25px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));
exports.RowItem = styled_components_1.default(Grid_1.default).attrs(function () { return ({
    xs: 9,
    item: true
}); })(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), components_1.Colors.white);
exports.RowLink = styled_components_1.default(Grid_1.default).attrs(function () { return ({
    xs: 3,
    item: true
}); })(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  color: ", ";\n  text-decoration: underline;\n  text-transform: uppercase;\n  cursor: pointer;\n"], ["\n  color: ", ";\n  text-decoration: underline;\n  text-transform: uppercase;\n  cursor: pointer;\n"])), components_1.Colors.aero);
exports.SearchButton = styled_components_1.default(Link_1.default)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  && {\n    border-radius: 6px;\n    border: 2px solid ", ";\n    padding: 10px;\n    font-size: 14px;\n    color: ", ";\n    background-color: ", ";\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    position: absolute;\n    right: ", ";\n    top: calc(50% - 22px);\n  }\n"], ["\n  && {\n    border-radius: 6px;\n    border: 2px solid ", ";\n    padding: 10px;\n    font-size: 14px;\n    color: ", ";\n    background-color: ", ";\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    position: absolute;\n    right: ", ";\n    top: calc(50% - 22px);\n  }\n"])), components_1.Colors.lightGray, components_1.Colors.lightGray, components_1.Colors.white, function (_a) {
    var _b = _a.right, right = _b === void 0 ? "42px" : _b;
    return right;
});
exports.SearchIcon = styled_components_1.default(Search_1.default).attrs(function () { return ({ fontSize: "small" }); })(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  color: ", ";\n  margin-right: 8px;\n"], ["\n  color: ", ";\n  margin-right: 8px;\n"])), components_1.Colors.lightGray);
exports.CommentWrapper = styled_components_1.default(Grid_1.default).attrs(function () { return ({
    container: true,
    xs: 12,
    direction: "column"
}); })(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  position: relative;\n  margin-top: 10px;\n  margin-bottom: 25px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  position: relative;\n  margin-top: 10px;\n  margin-bottom: 25px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));
exports.CommentText = styled_components_1.default.div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  width: calc(100% - 20px);\n  cursor: pointer;\n  ", "\n"], ["\n  width: calc(100% - 20px);\n  cursor: pointer;\n  ",
    "\n"])), function (_a) {
    var _b = _a.isTruncated, isTruncated = _b === void 0 ? true : _b;
    return isTruncated
        ? "white-space: nowrap;\n     overflow: hidden;\n     text-overflow: ellipsis;"
        : "";
});
exports.CommentInfo = styled_components_1.default(exports.CommentText)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  color: ", ";\n  font-style: italic;\n  margin-bottom: 20px;\n"], ["\n  color: ", ";\n  font-style: italic;\n  margin-bottom: 20px;\n"])), components_1.Colors.gullGrey);
exports.CommentRemoveIcon = styled_components_1.default(Close_1.default).attrs(function () { return ({
    fontSize: "small"
}); })(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  color: ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  color: ", ";\n"])), components_1.Colors.gullGrey);
exports.AddIcon = styled_components_1.default(Add_1.default)(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  position: absolute;\n  top: 30px;\n  right: 42px;\n  cursor: pointer;\n  color: ", ";\n  transform: ", ";\n"], ["\n  position: absolute;\n  top: 30px;\n  right: 42px;\n  cursor: pointer;\n  color: ", ";\n  transform: ",
    ";\n"])), components_1.Colors.black, function (_a) {
    var _b = _a.type, type = _b === void 0 ? "closed" : _b;
    return type === "opened" ? "rotate(45deg)" : "rotate(0deg)";
});
exports.ButtonWrapper = styled_components_1.default.div(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  display: flex;\n  justify-content: ", ";\n  ", ";\n"], ["\n  display: flex;\n  justify-content: ", ";\n  ", ";\n"])), function (_a) {
    var _b = _a.justify, justify = _b === void 0 ? "flex-end" : _b;
    return justify;
}, function (_a) {
    var _b = _a.marginTop, marginTop = _b === void 0 ? 0 : _b;
    return "margin-top: " + marginTop + "px";
});
exports.FilledButton = styled_components_1.default(components_1.Button)(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  && {\n    text-transform: unset;\n    text-decoration: none;\n    padding: 10px 40px;\n    font-size: 18px;\n    border-radius: 7px;\n    height: ", ";\n    margin-bottom: ", "px;\n  }\n"], ["\n  && {\n    text-transform: unset;\n    text-decoration: none;\n    padding: 10px 40px;\n    font-size: 18px;\n    border-radius: 7px;\n    height: ", ";\n    margin-bottom: ", "px;\n  }\n"])), function (_a) {
    var _b = _a.height, height = _b === void 0 ? "auto" : _b;
    return height;
}, function (_a) {
    var _b = _a.marginBottom, marginBottom = _b === void 0 ? 0 : _b;
    return marginBottom;
});
exports.TransparentButton = styled_components_1.default(exports.FilledButton)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  && {\n    background-color: ", ";\n    color: ", ";\n    margin-right: 30px;\n    border: 1px solid ", ";\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n"], ["\n  && {\n    background-color: ", ";\n    color: ", ";\n    margin-right: 30px;\n    border: 1px solid ", ";\n\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  }\n"])), components_1.Colors.white, components_1.Colors.dodgerBlue, components_1.Colors.dodgerBlue, components_1.Colors.white, components_1.Colors.dodgerBlue);
exports.TimeIcon = styled_components_1.default(AccessTime_1.default)(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  position: absolute;\n  top: calc(50% - 10.5px);\n  right: 68px;\n  color: ", ";\n"], ["\n  position: absolute;\n  top: calc(50% - 10.5px);\n  right: 68px;\n  color: ", ";\n"])), components_1.Colors.lightGray);
exports.CalendarIcon = styled_components_1.default(CalendarToday_1.default)(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), components_1.Colors.lightGray);
exports.SettingsIcon = styled_components_1.default(Settings_1.default).attrs(function () { return ({
    fontSize: "large"
}); })(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  color: ", ";\n  margin: 0 42px 0 30px;\n  cursor: pointer;\n"], ["\n  color: ", ";\n  margin: 0 42px 0 30px;\n  cursor: pointer;\n"])), components_1.Colors.arsenic);
exports.ArrowIcon = styled_components_1.default(ArrowForward_1.default)(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  color: ", ";\n  margin-left: 10px;\n"], ["\n  color: ", ";\n  margin-left: 10px;\n"])), components_1.Colors.white);
exports.DateInput = styled_components_1.default(components_1.Date)(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.LoaderWrapper = styled_components_1.default.div(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10000;\n  top: 0;\n  left: 0;\n"], ["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10000;\n  top: 0;\n  left: 0;\n"])));
exports.SearchResultWrapper = styled_components_1.default(Grid_1.default)(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n  border-radius: 3px;\n  border: 1px solid ", ";\n"], ["\n  border-radius: 3px;\n  border: 1px solid ", ";\n"])), components_1.Colors.lightGray);
exports.ResultTopArea = styled_components_1.default.div(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n  padding: 19px;\n  border-bottom: 1px solid ", ";\n  display: flex;\n  justify-content: space-between;\n"], ["\n  padding: 19px;\n  border-bottom: 1px solid ", ";\n  display: flex;\n  justify-content: space-between;\n"])), components_1.Colors.lightGray);
exports.ResultBottomArea = styled_components_1.default.div(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n  overflow: auto;\n  max-height: 300px;\n"], ["\n  overflow: auto;\n  max-height: 300px;\n"])));
exports.SearchResult = styled_components_1.default.div(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  margin-top: 14px;\n  cursor: pointer;\n  &:hover {\n    background-color: #eef1f3;\n  }\n"], ["\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  margin-top: 14px;\n  cursor: pointer;\n  &:hover {\n    background-color: #eef1f3;\n  }\n"])));
exports.LocationIcon = styled_components_1.default(LocationOn_1.default)(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n  margin-right: 10px;\n  color: ", ";\n"], ["\n  margin-right: 10px;\n  color: ", ";\n"])), components_1.Colors.gullGrey);
exports.ResultText = styled_components_1.default.div(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 16px;\n"], ["\n  color: ", ";\n  font-size: 16px;\n"])), components_1.Colors.gullGrey);
exports.SearchResultTitle = styled_components_1.default.div(templateObject_38 || (templateObject_38 = __makeTemplateObject(["\n  color: ", ";\n  ", ";\n"], ["\n  color: ", ";\n  ",
    ";\n"])), components_1.Colors.arsenic, function (_a) {
    var _b = _a.type, type = _b === void 0 ? "major" : _b;
    return type === "major" ? "font-weight: 600; font-size: 18px" : "font-size: 16px";
});
exports.CombinedInputWrapper = styled_components_1.default.div(templateObject_39 || (templateObject_39 = __makeTemplateObject(["\n  width: 66.66%;\n  display: flex;\n"], ["\n  width: 66.66%;\n  display: flex;\n"])));
exports.CombinedInputInner = styled_components_1.default.div(templateObject_40 || (templateObject_40 = __makeTemplateObject(["\n  width: ", "%;\n  display: flex;\n"], ["\n  width: ", "%;\n  display: flex;\n"])), function (_a) {
    var _b = _a.width, width = _b === void 0 ? 40 : _b;
    return width;
});
exports.CloseIcon = styled_components_1.default(Close_1.default)(templateObject_41 || (templateObject_41 = __makeTemplateObject(["\n  cursor: pointer;\n  color: ", ";\n"], ["\n  cursor: pointer;\n  color: ", ";\n"])), components_1.Colors.gullGrey);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41;
//# sourceMappingURL=styles.js.map