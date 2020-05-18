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
var react_router_dom_1 = require("react-router-dom");
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var Settings_1 = __importDefault(require("@material-ui/icons/Settings"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var ModalWrapper_1 = require("dakota-portal/dist/components/ModalWrapper");
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var components_1 = require("dakota-portal/dist/components");
var SortableTableStyles_1 = require("dakota-portal/dist/components/SortableTable/SortableTableStyles");
var Input_1 = __importDefault(require("dakota-portal/dist/components/Input"));
var models_1 = require("../serviceOrder/models");
exports.Title = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 24px;\n  line-height: 40px;\n  margin-bottom: 10px;\n  margin-left: 14px;\n"], ["\n  color: ", ";\n  font-size: 24px;\n  line-height: 40px;\n  margin-bottom: 10px;\n  margin-left: 14px;\n"])), Colors_1.default.eclipse);
exports.ModalWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  padding: 42px;\n  width: 700px;\n  flex-direction: column;\n  overflow: scroll;\n  max-height: calc(100vh - 100px);\n"], ["\n  display: flex;\n  padding: 42px;\n  width: 700px;\n  flex-direction: column;\n  overflow: scroll;\n  max-height: calc(100vh - 100px);\n"])));
exports.CheckBoxContainer = styled_components_1.default(Grid_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  && label span {\n    padding: 4px;\n  }\n"], ["\n  && label span {\n    padding: 4px;\n  }\n"])));
exports.ItemTitle = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  padding-top: ", "px;\n  margin-right: ", "px;\n"], ["\n  color: ", ";\n  padding-top: ", "px;\n  margin-right: ", "px;\n"])), Colors_1.default.gullGrey, function (_a) {
    var _b = _a.paddingTop, paddingTop = _b === void 0 ? 10 : _b;
    return paddingTop;
}, function (_a) {
    var _b = _a.marginRight, marginRight = _b === void 0 ? 0 : _b;
    return marginRight;
});
exports.StyledFormControlLabel = styled_components_1.default(FormControlLabel_1.default)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  && {\n    margin-right: 8px;\n\n    .control-label {\n      color: ", ";\n      font-size: 14px;\n      font-weight: 600;\n      opacity: 0.7;\n    }\n\n    .agreement-label {\n      font-weight: 600;\n    }\n\n    .error {\n      color: ", ";\n    }\n\n    &:hover {\n      padding: 0;\n    }\n  }\n"], ["\n  && {\n    margin-right: 8px;\n\n    .control-label {\n      color: ", ";\n      font-size: 14px;\n      font-weight: 600;\n      opacity: 0.7;\n    }\n\n    .agreement-label {\n      font-weight: 600;\n    }\n\n    .error {\n      color: ", ";\n    }\n\n    &:hover {\n      padding: 0;\n    }\n  }\n"])), Colors_1.default.black, Colors_1.default.cinnabar);
exports.BaseRow = styled_components_1.default(Grid_1.default)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  && {\n    margin-top: 20px;\n  }\n"], ["\n  && {\n    margin-top: 20px;\n  }\n"])));
exports.RowItem = styled_components_1.default(Grid_1.default)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  && {\n    background-color: #f1f4f6;\n    padding: 0px;\n    width: 400px;\n    border-radius: 1px;\n  }\n"], ["\n  && {\n    background-color: #f1f4f6;\n    padding: 0px;\n    width: 400px;\n    border-radius: 1px;\n  }\n"])));
exports.CPName = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  && {\n    font-weight: 600;\n    padding: 6px 4px;\n    font-size: 16px;\n  }\n"], ["\n  && {\n    font-weight: 600;\n    padding: 6px 4px;\n    font-size: 16px;\n  }\n"])));
exports.CPAction = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 12px;\n  &:hover {\n    text-decoration: none;\n  }\n"], ["\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 12px;\n  &:hover {\n    text-decoration: none;\n  }\n"])));
exports.ARow = styled_components_1.default(Grid_1.default)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  && {\n    border-bottom: 1px solid ", ";\n    padding: 15px;\n    line-height: 1.2;\n  }\n"], ["\n  && {\n    border-bottom: 1px solid ", ";\n    padding: 15px;\n    line-height: 1.2;\n  }\n"])), Colors_1.default.lightGray);
exports.StyledSelect = styled_components_1.default(components_1.Select)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  && {\n    width: calc(100% - ", "px);\n    max-width: 470px;\n  }\n\n  .type-select__control {\n    height: ", "px;\n    border: 2px solid ", ";\n    border-radius: 5px;\n    box-shadow: none;\n    padding-left: 8px;\n    padding-right: 8px;\n    font-size: 16px;\n  }\n\n  .type-select__control--is-focused,\n  .type-select__control--menu-is-open {\n    border: 2px solid ", ";\n    &:hover {\n      border-color: ", ";\n    }\n  }\n\n  .type-select__indicator-separator {\n    display: none;\n  }\n"], ["\n  && {\n    width: calc(100% - ", "px);\n    max-width: 470px;\n  }\n\n  .type-select__control {\n    height: ", "px;\n    border: 2px solid ", ";\n    border-radius: 5px;\n    box-shadow: none;\n    padding-left: 8px;\n    padding-right: 8px;\n    font-size: 16px;\n  }\n\n  .type-select__control--is-focused,\n  .type-select__control--menu-is-open {\n    border: 2px solid ", ";\n    &:hover {\n      border-color: ", ";\n    }\n  }\n\n  .type-select__indicator-separator {\n    display: none;\n  }\n"])), function (_a) {
    var _b = _a.width, width = _b === void 0 ? 50 : _b;
    return width;
}, function (_a) {
    var _b = _a.height, height = _b === void 0 ? 45 : _b;
    return height;
}, Colors_1.default.pattensBlue, Colors_1.default.fiord, Colors_1.default.fiord);
exports.ModalHeader = styled_components_1.default(exports.ModalWrapper)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  display: flex;\n  padding: 5px 0;\n  line-height: 1.2;\n  border-bottom: solid 1px ", ";\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  box-sizing: border-box;\n  overflow: hidden;\n"], ["\n  display: flex;\n  padding: 5px 0;\n  line-height: 1.2;\n  border-bottom: solid 1px ", ";\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  box-sizing: border-box;\n  overflow: hidden;\n"])), Colors_1.default.lightGray);
exports.CloseIcon = styled_components_1.default(Close_1.default)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 16px;\n  cursor: pointer;\n"], ["\n  font-size: 16px;\n  cursor: pointer;\n"])));
exports.ModelHeadTagline = styled_components_1.default.h3(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  margin: 5px;\n"], ["\n  margin: 5px;\n"])));
exports.ModelHeadTitle = styled_components_1.default(exports.Title)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  margin: 5px 5px 15px;\n  font-size: 24px;\n  color: #4c5760;\n"], ["\n  margin: 5px 5px 15px;\n  font-size: 24px;\n  color: #4c5760;\n"])));
exports.ModalBody = styled_components_1.default(Grid_1.default)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  && {\n    margin-top: 10px;\n    overflow: scroll;\n  }\n"], ["\n  && {\n    margin-top: 10px;\n    overflow: scroll;\n  }\n"])));
exports.HomePage = styled_components_1.default.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  max-width: 1200px;\n"], ["\n  max-width: 1200px;\n"])));
exports.TopWrapper = styled_components_1.default.div(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  padding: 0px 30px;\n"], ["\n  padding: 0px 30px;\n"])));
exports.BottomWrapper = styled_components_1.default(exports.TopWrapper)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  margin-top: 10px;\n  padding: 1px 10px 0px 36px;\n"], ["\n  margin-top: 10px;\n  padding: 1px 10px 0px 36px;\n"])));
exports.InputWrapper = styled_components_1.default.div(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  display: ", ";\n  flex: 1;\n  margin-left: 0;\n  margin: 10px;\n\n  &:nth-child(2) {\n    margin-left: 24px;\n  }\n\n  ", " {\n    flex: 1;\n  }\n  ", "\n"], ["\n  display: ", ";\n  flex: 1;\n  margin-left: 0;\n  margin: 10px;\n\n  &:nth-child(2) {\n    margin-left: 24px;\n  }\n\n  ", " {\n    flex: 1;\n  }\n  ",
    "\n"])), function (props) { return (props.isRadio ? "flex" : "block"); }, Input_1.default, function (_a) {
    var _b = _a.wrap, wrap = _b === void 0 ? false : _b;
    return wrap && styled_components_1.css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n      border: 2px solid ", ";\n      border-radius: 5px;\n      padding: 1px;\n      width: 110px;\n    "], ["\n      border: 2px solid ", ";\n      border-radius: 5px;\n      padding: 1px;\n      width: 110px;\n    "])), Colors_1.default.pattensBlue);
});
exports.StyledInputWrapper = styled_components_1.default.div(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
exports.StyledInput = styled_components_1.default(components_1.Input)(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  && {\n    width: ", ";\n    box-sizing: border-box;\n    position: relative;\n  }\n\n  ", ";\n"], ["\n  && {\n    width: ",
    ";\n    box-sizing: border-box;\n    position: relative;\n  }\n\n  ", ";\n"])), function (_a) {
    var type = _a.type;
    return type === models_1.CardItemTypes.combinedInput ? "80px" : "calc(100% - 50px)";
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "" : "");
});
exports.StyledTextarea = styled_components_1.default(exports.StyledInput)(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  && {\n    min-height: 151px;\n    width: ", ";\n  }\n"], ["\n  && {\n    min-height: 151px;\n    width: ", ";\n  }\n"])), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "calc(100% - 50px)");
});
exports.Serviceorder = styled_components_1.default(components_1.Card)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  padding: 0;\n  display: ", ";\n  && table thead tr {\n    background-color: ", ";\n    th {\n      span {\n        text-transform: unset;\n      }\n      font-weight: 400;\n    }\n  }\n  table.fixed_table tr td:first-child {\n    font-size: 14px;\n  }\n"], ["\n  padding: 0;\n  display: ", ";\n  && table thead tr {\n    background-color: ", ";\n    th {\n      span {\n        text-transform: unset;\n      }\n      font-weight: 400;\n    }\n  }\n  table.fixed_table tr td:first-child {\n    font-size: 14px;\n  }\n"])), function (_a) {
    var _b = _a.display, display = _b === void 0 ? "flex" : _b;
    return display;
}, Colors_1.default.white);
exports.SoItem = styled_components_1.default.div(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n"], ["\n  margin-top: 40px;\n  margin-bottom: 40px;\n"])));
exports.TData = styled_components_1.default(SortableTableStyles_1.Td)(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  color: ", ";\n  ", "\n  font-weight: 600;\n\n  & > a {\n    color: inherit;\n  }\n"], ["\n  color: ", ";\n  ",
    "\n  font-weight: 600;\n\n  & > a {\n    color: inherit;\n  }\n"])), function (_a) {
    var color = _a.color;
    return (color ? color : Colors_1.default.fiord);
}, function (_a) {
    var _b = _a.isThemed, isThemed = _b === void 0 ? false : _b;
    return isThemed ? "background-color: " + Colors_1.default.aliceBlueGrayish + ";" : "";
});
exports.ClientServiceorder = styled_components_1.default(exports.Serviceorder)(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  margin-top: -8px;\n  padding-top: 0px;\n  padding-bottom: 1px;\n"], ["\n  margin-top: -8px;\n  padding-top: 0px;\n  padding-bottom: 1px;\n"])));
exports.StatCard = styled_components_1.default(components_1.Card)(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  border-top: solid 5px ", ";\n  border-radius: 5px;\n  padding: 20px;\n  flex-direction: column;\n  margin: 10px;\n  min-width: 170px;\n  max-height: 100px;\n  overflow: hidden;\n  text-align: center;\n"], ["\n  border-top: solid 5px ", ";\n  border-radius: 5px;\n  padding: 20px;\n  flex-direction: column;\n  margin: 10px;\n  min-width: 170px;\n  max-height: 100px;\n  overflow: hidden;\n  text-align: center;\n"])), function (_a) {
    var color = _a.color;
    return (color ? color : Colors_1.default.cinnabar);
});
exports.Stat = styled_components_1.default.span(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n  display: flex;\n  user-select: none;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  position: absolute;\n  color: ", ";\n  top: -8px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  font-size: 22.5px;\n"], ["\n  display: flex;\n  user-select: none;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  position: absolute;\n  color: ", ";\n  top: -8px;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  font-size: 22.5px;\n"])), function (_a) {
    var color = _a.color;
    return (color ? color : Colors_1.default.cinnabar);
});
exports.SaveButton = styled_components_1.default(components_1.Button)(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n  && {\n    display: flex;\n    font-size: 18px;\n    text-transform: none;\n    margin: 12px 0 12px auto;\n    margin-top: 16px;\n    font-size: 14px;\n    padding: 6px 24px;\n  }\n"], ["\n  && {\n    display: flex;\n    font-size: 18px;\n    text-transform: none;\n    margin: 12px 0 12px auto;\n    margin-top: 16px;\n    font-size: 14px;\n    padding: 6px 24px;\n  }\n"])));
var RenderIcon = function (Icon) { return styled_components_1.default(Icon)(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n  color: ", ";\n  margin-right: ", ";\n  cursor: pointer;\n"], ["\n  color: ", ";\n  margin-right: ", ";\n  cursor: pointer;\n"])), function (props) { return (props.menu ? Colors_1.default.primary : Colors_1.default.gullGrey); }, function (props) { return (props.menu ? "10px" : 0); }); };
exports.SettingsIcon = RenderIcon(Settings_1.default);
exports.CockpitLoaderWrapper = styled_components_1.default.div(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n  height: 481px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  height: 481px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
exports.UnstyledLink = styled_components_1.default(react_router_dom_1.Link)(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n  color: ", ";\n  text-decoration: none;\n  cursor: pointer;\n"], ["\n  color: ", ";\n  text-decoration: none;\n  cursor: pointer;\n"])), Colors_1.default.fiord);
exports.ModalBoxs = styled_components_1.default(ModalWrapper_1.ModalBox)(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n  border-radius: 5px;\n"], ["\n  border-radius: 5px;\n"])));
exports.InputLabel = styled_components_1.default(InputLabel_1.default)(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n  position: static !important;\n  margin-bottom: 18px;\n  font-size: 14px !important;\n"], ["\n  position: static !important;\n  margin-bottom: 18px;\n  font-size: 14px !important;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36;
//# sourceMappingURL=styles.js.map