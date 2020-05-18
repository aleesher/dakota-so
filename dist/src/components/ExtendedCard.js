"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var Card_1 = __importDefault(require("dakota-portal/dist/components/Card"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.Card = styled_components_1.default(Card_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  padding: 0;\n  margin-top: 28px;\n\n  #dakota-table {\n    margin: 0;\n  }\n\n  #dakota-table .table-header {\n    background-color: rgba(221, 226, 230, 0.4);\n  }\n\n  #dakota-table td:first-child,\n  #dakota-table th:first-child {\n    padding-left: 28px;\n  }\n\n  #dakota-table th:last-child {\n    text-align: right;\n    padding-right: 28px;\n  }\n\n  #dakota-table td:last-child {\n    text-align: right;\n    padding-right: 36px;\n  }\n"], ["\n  display: block;\n  padding: 0;\n  margin-top: 28px;\n\n  #dakota-table {\n    margin: 0;\n  }\n\n  #dakota-table .table-header {\n    background-color: rgba(221, 226, 230, 0.4);\n  }\n\n  #dakota-table td:first-child,\n  #dakota-table th:first-child {\n    padding-left: 28px;\n  }\n\n  #dakota-table th:last-child {\n    text-align: right;\n    padding-right: 28px;\n  }\n\n  #dakota-table td:last-child {\n    text-align: right;\n    padding-right: 36px;\n  }\n"])));
exports.ExtendedCardHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 28px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 28px;\n"])));
exports.Title = styled_components_1.default.h4(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 600;\n  margin-right: ", ";\n  font-size: 14px;\n"], ["\n  color: ", ";\n  font-weight: 600;\n  margin-right: ", ";\n  font-size: 14px;\n"])), Colors_1.default.fiord, function (_a) {
    var count = _a.count;
    return (count ? "-5px" : "10px");
});
exports.Toggle = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n  cursor: pointer;\n  text-decoration: underline;\n"], ["\n  color: ", ";\n  font-size: 14px;\n  cursor: pointer;\n  text-decoration: underline;\n"])), Colors_1.default.fiord);
exports.ExtendedCardBody = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: block;\n  padding: 0;\n  border-top: 1px solid ", ";\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n\n  ", "\n"], ["\n  display: block;\n  padding: 0;\n  border-top: 1px solid ", ";\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n\n  ",
    "\n"])), Colors_1.default.pattensBlue, function (_a) {
    var isOpened = _a.isOpened;
    return isOpened && styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      max-height: none;\n      opacity: 1;\n      padding: ", ";\n      transition: opacity 0.6s;\n    "], ["\n      max-height: none;\n      opacity: 1;\n      padding: ",
        ";\n      transition: opacity 0.6s;\n    "])), function (props) {
        return props.noPadding ? "0" : "20px 28px";
    });
});
var ExtendedCard = function (_a) {
    var _b = _a.hasToggle, hasToggle = _b === void 0 ? false : _b, children = _a.children;
    var _c = react_1.default.useState(false), isOpened = _c[0], toggle = _c[1];
    return hasToggle ? (react_1.default.createElement(exports.Card, null, children({ isOpened: isOpened, toggle: toggle }))) : (react_1.default.createElement(exports.Card, null, children));
};
exports.default = ExtendedCard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=ExtendedCard.js.map