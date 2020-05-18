"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var Link_1 = __importDefault(require("react-router-dom/Link"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var ExpansionPanelDetails_1 = __importDefault(require("@material-ui/core/ExpansionPanelDetails"));
var components_1 = require("dakota-portal/dist/components");
var Input_1 = __importDefault(require("dakota-portal/dist/components/Input"));
var ExtendedCard_1 = require("../../../components/ExtendedCard");
var CalculatorSvg_1 = require("./details/CalculatorSvg");
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
exports.GeneralStatusWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
exports.Right = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  float: right;\n  margin-top: 20px;\n  margin-bottom: 40px;\n"], ["\n  float: right;\n  margin-top: 20px;\n  margin-bottom: 40px;\n"])));
exports.ItemTitle = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  padding-top: ", "px;\n  margin-right: ", "px;\n"], ["\n  color: ", ";\n  padding-top: ", "px;\n  margin-right: ", "px;\n"])), components_1.Colors.gullGrey, function (_a) {
    var _b = _a.paddingTop, paddingTop = _b === void 0 ? 10 : _b;
    return paddingTop;
}, function (_a) {
    var _b = _a.marginRight, marginRight = _b === void 0 ? 0 : _b;
    return marginRight;
});
exports.PromotedModalWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 5px 15px;\n"], ["\n  padding: 5px 15px;\n"])));
exports.LoaderWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 99999;\n  background-color: ", ";\n  opacity: 0.5;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"], ["\n  position: absolute;\n  z-index: 99999;\n  background-color: ", ";\n  opacity: 0.5;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"])), components_1.Colors.white);
exports.PromotedFieldModalSubmitButton = styled_components_1.default(components_1.Button)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  && {\n    display: flex;\n    font-size: 18px;\n    text-transform: none;\n    background-color: ", ";\n    margin: 32px 0 32px auto;\n  }\n\n  &&:hover {\n    background-color: ", ";\n  }\n"], ["\n  && {\n    display: flex;\n    font-size: 18px;\n    text-transform: none;\n    background-color: ", ";\n    margin: 32px 0 32px auto;\n  }\n\n  &&:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var color = _a.color;
    return (color ? color : components_1.Colors.fiord);
}, function (_a) {
    var color = _a.color;
    return (color ? color : components_1.Colors.fiord);
});
exports.CheckBoxContainer = styled_components_1.default(Grid_1.default)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  && {\n    border: ", " solid 1px;\n    padding: 10px;\n    border-radius: 3px;\n    margin: 15px;\n\n    label span {\n      padding: 4px;\n    }\n  }\n"], ["\n  && {\n    border: ", " solid 1px;\n    padding: 10px;\n    border-radius: 3px;\n    margin: 15px;\n\n    label span {\n      padding: 4px;\n    }\n  }\n"])), components_1.Colors.pattensBlue);
exports.StyledFormControlLabel = styled_components_1.default(FormControlLabel_1.default)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  && {\n    margin-right: 8px;\n\n    .control-label {\n      color: ", ";\n      font-size: 14px;\n      font-weight: 600;\n      opacity: 0.7;\n    }\n\n    .agreement-label {\n      font-weight: 600;\n    }\n\n    .error {\n      color: ", ";\n    }\n\n    &:hover {\n      padding: 0;\n    }\n  }\n"], ["\n  && {\n    margin-right: 8px;\n\n    .control-label {\n      color: ", ";\n      font-size: 14px;\n      font-weight: 600;\n      opacity: 0.7;\n    }\n\n    .agreement-label {\n      font-weight: 600;\n    }\n\n    .error {\n      color: ", ";\n    }\n\n    &:hover {\n      padding: 0;\n    }\n  }\n"])), components_1.Colors.black, components_1.Colors.cinnabar);
exports.GeneralStatusItem = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  width: 100%;\n  ", "\n"], ["\n  width: 100%;\n  ",
    "\n"])), function (_a) {
    var last = _a.last;
    return last && styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      margin-left: 20px;\n    "], ["\n      margin-left: 20px;\n    "])));
});
exports.CustomModal = styled_components_1.default(components_1.SlideModal)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  && {\n    margin: 0;\n  }\n"], ["\n  && {\n    margin: 0;\n  }\n"])));
exports.DialpadIcon = styled_components_1.default(CalculatorSvg_1.CalculatorIcon)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  color: ", ";\n  margin-left: 8px;\n  && {\n    font-size: 14px;\n  }\n"], ["\n  color: ", ";\n  margin-left: 8px;\n  && {\n    font-size: 14px;\n  }\n"])), components_1.Colors.fiord);
exports.Wrapper = styled_components_1.default(function (_a) {
    var content = _a.content, props = __rest(_a, ["content"]);
    return react_1.default.createElement(Grid_1.default, __assign({}, props));
})(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  && {\n    width: 100%;\n    margin-top: 10px;\n    font-size: ", ";\n  }\n"], ["\n  && {\n    width: 100%;\n    margin-top: 10px;\n    font-size: ", ";\n  }\n"])), function (_a) {
    var content = _a.content;
    return (content ? "14px" : "16px");
});
exports.ItemLink = styled_components_1.default(Link_1.default)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n"])), components_1.Colors.dodgerBlue);
exports.EditIcon = styled_components_1.default(function (_a) {
    var props = __rest(_a, []);
    return react_1.default.createElement(Edit_1.default, __assign({}, props));
})(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  && {\n    font-size: 18px;\n    border-radius: 10%;\n    padding: 5px;\n    margin: 12px 0px 12px 6px;\n  }\n"], ["\n  && {\n    font-size: 18px;\n    border-radius: 10%;\n    padding: 5px;\n    margin: 12px 0px 12px 6px;\n  }\n"])));
exports.ItemData = styled_components_1.default.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ",
    ";\n"])), function (_a) {
    var ok = _a.ok, warn = _a.warn, danger = _a.danger, good = _a.good;
    return ok
        ? components_1.Colors.dodgerBlue
        : danger
            ? components_1.Colors.cinnabar
            : warn
                ? components_1.Colors.lightningYellow
                : good
                    ? components_1.Colors.oliveDrab
                    : components_1.Colors.fiord;
});
exports.RoofRight = styled_components_1.default(Grid_1.default)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  padding: 12px;\n"], ["\n  padding: 12px;\n"])));
exports.ItemTopic = styled_components_1.default(exports.ItemData)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n\n  background-color: ", ";\n\n  margin-top: ", ";\n\n  ", "\n   \n  ", "\n   \n  ", ";\n\n  ", "\n\n  ", "\n"], ["\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n\n  background-color: ",
    ";\n\n  margin-top: ", ";\n\n  ",
    "\n   \n  ",
    "\n   \n  ",
    ";\n\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var ok = _a.ok, warn = _a.warn, danger = _a.danger, good = _a.good;
    return ok
        ? components_1.Colors.pattensBlueLighter
        : danger
            ? components_1.Colors.sunsetOrange + "3b"
            : warn
                ? components_1.Colors.goldenPoppy + "3b"
                : good
                    ? components_1.Colors.deYork + "3b"
                    : components_1.Colors.white;
}, function (_a) {
    var spaced = _a.spaced;
    return (spaced ? "10px" : "0px");
}, function (_a) {
    var ok = _a.ok, tb = _a.tb;
    return (ok || tb) &&
        "\n    text-align: center;\n    display: inline-block;\n   ";
}, function (_a) {
    var label = _a.label;
    return label &&
        "\n    color: " + components_1.Colors.gullGrey + ";\n  ";
}, function (_a) {
    var spaced = _a.spaced;
    return spaced &&
        "\n      padding: 5px;\n      min-width: 180px;\n    ";
}, function (_a) {
    var tb = _a.tb;
    return tb &&
        "\n      min-width: 40px;\n      font-size: 12px;\n      padding: 5px;\n  ";
}, function (_a) {
    var ok = _a.ok, warn = _a.warn, danger = _a.danger, good = _a.good;
    return (ok || warn || danger || good) &&
        "\n      line-height: 1;\n      border-radius: 2px;\n      padding: 5px 8px;\n  ";
});
exports.RightItem = styled_components_1.default.div(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  sup {\n    font-size: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  sup {\n    font-size: 10px;\n  }\n"])));
exports.RightPadding = styled_components_1.default.div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  padding-left: 40px;\n"], ["\n  padding-left: 40px;\n"])));
exports.LevelCard = styled_components_1.default(components_1.Card)(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  display: inline-block;\n  padding: 0;\n  min-width: ", ";\n  width: 100%;\n  margin-right: ", ";\n  margin-bottom: 16px;\n  && #dakota-table {\n    margin: 0px 0 16px;\n    tbody tr:first-child,\n    thead tr:first-child {\n      padding-left: 55px !important;\n      text-align: left;\n    }\n\n    td:first-child {\n      padding-left: 0px;\n    }\n    th:first-child {\n      padding-left: 40px;\n    }\n\n    thead {\n      background-color: ", ";\n      box-shadow: none;\n      border-bottom: none;\n      tr {\n        border-bottom: none;\n        th {\n          border-bottom: none;\n          padding: 14px 10px;\n        }\n      }\n    }\n  }\n"], ["\n  display: inline-block;\n  padding: 0;\n  min-width: ", ";\n  width: 100%;\n  margin-right: ", ";\n  margin-bottom: 16px;\n  && #dakota-table {\n    margin: 0px 0 16px;\n    tbody tr:first-child,\n    thead tr:first-child {\n      padding-left: 55px !important;\n      text-align: left;\n    }\n\n    td:first-child {\n      padding-left: 0px;\n    }\n    th:first-child {\n      padding-left: 40px;\n    }\n\n    thead {\n      background-color: ", ";\n      box-shadow: none;\n      border-bottom: none;\n      tr {\n        border-bottom: none;\n        th {\n          border-bottom: none;\n          padding: 14px 10px;\n        }\n      }\n    }\n  }\n"])), function (_a) {
    var full = _a.full;
    return (full ? "1040px" : "500px");
}, function (props) { return (props.isLast ? 0 : "16px"); }, components_1.Colors.aliceBlueGrayish);
exports.LevelHeader = styled_components_1.default(ExtendedCard_1.ExtendedCardHeader)(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  padding: 12px 10px 7px 40px;\n  min-height: 56px;\n"], ["\n  padding: 12px 10px 7px 40px;\n  min-height: 56px;\n"])));
exports.InputWrapper = styled_components_1.default.div(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  display: ", ";\n  flex: 1;\n  margin-left: 0;\n  margin: 10px;\n\n  &:nth-child(2) {\n    margin-left: 24px;\n  }\n\n  ", " {\n    flex: 1;\n  }\n  ", "\n"], ["\n  display: ", ";\n  flex: 1;\n  margin-left: 0;\n  margin: 10px;\n\n  &:nth-child(2) {\n    margin-left: 24px;\n  }\n\n  ", " {\n    flex: 1;\n  }\n  ",
    "\n"])), function (props) { return (props.isRadio ? "flex" : "block"); }, Input_1.default, function (_a) {
    var wrap = _a.wrap;
    return wrap && styled_components_1.css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n      border: 2px solid ", ";\n      border-radius: 5px;\n      padding: 10px;\n    "], ["\n      border: 2px solid ", ";\n      border-radius: 5px;\n      padding: 10px;\n    "])), components_1.Colors.pattensBlue);
});
exports.SubmitButton = styled_components_1.default(components_1.Button)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  && {\n    display: flex;\n    font-size: 18px;\n    text-transform: none;\n    margin: 32px 0 32px auto;\n    font-size: 14px;\n  }\n"], ["\n  && {\n    display: flex;\n    font-size: 18px;\n    text-transform: none;\n    margin: 32px 0 32px auto;\n    font-size: 14px;\n  }\n"])));
exports.LevelData = styled_components_1.default.div(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-start;\n  padding: ", ";\n  font-size: 14px;\n  min-height: ", ";\n  border-top: ", ";\n"], ["\n  display: flex;\n  align-items: flex-start;\n  padding: ", ";\n  font-size: 14px;\n  min-height: ", ";\n  border-top: ", ";\n"])), function (_a) {
    var tb = _a.tb;
    return (tb ? "0px" : "16px 40px");
}, function (_a) {
    var edit = _a.edit;
    return (edit ? "400px" : "300px");
}, function (_a) {
    var tb = _a.tb;
    return (tb ? "none" : "1px solid " + components_1.Colors.pattensBlue);
});
exports.CollapseLink = styled_components_1.default.p(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  text-decoration: underline;\n  font-size: 14px;\n  cursor: pointer;\n"], ["\n  text-decoration: underline;\n  font-size: 14px;\n  cursor: pointer;\n"])));
exports.ViewSwitchButton = styled_components_1.default.button(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  cursor: pointer;\n  height: 29px;\n  width: 62px;\n  border-radius: 20px;\n  background-color: ", ";\n  border: none;\n  outline: none;\n  font-size: 10px;\n  font-weight: 700;\n  color: ", ";\n"], ["\n  cursor: pointer;\n  height: 29px;\n  width: 62px;\n  border-radius: 20px;\n  background-color: ",
    ";\n  border: none;\n  outline: none;\n  font-size: 10px;\n  font-weight: 700;\n  color: ",
    ";\n"])), function (_a) {
    var active = _a.active;
    return active ? components_1.Colors.white : "transparent";
}, function (_a) {
    var active = _a.active;
    return active ? components_1.Colors.fiord : "rgba(76, 87, 96, 0.5)";
});
exports.ViewSwitchContainer = styled_components_1.default.div(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  margin-right: 100px;\n  border-radius: 18px;\n  background-color: ", "96;\n"], ["\n  margin-right: 100px;\n  border-radius: 18px;\n  background-color: ", "96;\n"])), components_1.Colors.aliceBlue);
exports.Tab = styled_components_1.default.div(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n  margin-right: 100px;\n"], ["\n  margin-right: 100px;\n"])));
exports.TitleCount = styled_components_1.default.span(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n  font-size: 12px;\n  line-height: 20px;\n  min-width: 20px;\n  text-align: center;\n  border-radius: 50%;\n  margin-bottom: 18px;\n  margin-left: 4px;\n  color: ", ";\n  background-color: ", ";\n"], ["\n  font-size: 12px;\n  line-height: 20px;\n  min-width: 20px;\n  text-align: center;\n  border-radius: 50%;\n  margin-bottom: 18px;\n  margin-left: 4px;\n  color: ", ";\n  background-color: ", ";\n"])), components_1.Colors.white, components_1.Colors.cinnabar);
exports.AdviceText = styled_components_1.default.div(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n  font-size: 14px;\n  font-weight: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n"], ["\n  font-size: 14px;\n  font-weight: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n"])), function (_a) {
    var heavy = _a.heavy;
    return (heavy ? "600" : "400");
}, function (_a) {
    var heavy = _a.heavy;
    return (heavy ? components_1.Colors.black : components_1.Colors.fiord);
});
exports.AccordionPanelDetails = styled_components_1.default(ExpansionPanelDetails_1.default)(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n  && {\n    display: block !important;\n    padding: 8px 53px 30px !important;\n    position: relative;\n  }\n  &:last-child {\n    margin-top: -10px !important;\n  }\n\n  &:first-child {\n    margin-top: 25px !important;\n  }\n"], ["\n  && {\n    display: block !important;\n    padding: 8px 53px 30px !important;\n    position: relative;\n  }\n  &:last-child {\n    margin-top: -10px !important;\n  }\n\n  &:first-child {\n    margin-top: 25px !important;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33;
//# sourceMappingURL=styles.js.map