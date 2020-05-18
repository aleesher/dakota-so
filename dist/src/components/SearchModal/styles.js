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
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var components_1 = require("dakota-portal/dist/components");
var ModalWrapper_1 = require("dakota-portal/dist/components/ModalWrapper");
exports.ModalBox = styled_components_1.default(ModalWrapper_1.ModalBox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 10px 10px 0 0;\n  background-color: tranparent;\n  overflow: hidden;\n  && {\n    ", "\n  }\n"], ["\n  border-radius: 10px 10px 0 0;\n  background-color: tranparent;\n  overflow: hidden;\n  && {\n    ", "\n  }\n"])), function (_a) {
    var width = _a.width;
    return (width ? "width: " + width + ";" : "");
});
exports.ModalHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  padding: 38px 45px;\n  font-size: 22px;\n  position: relative;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  padding: 38px 45px;\n  font-size: 22px;\n  position: relative;\n"])), components_1.Colors.arsenic, components_1.Colors.white);
exports.ModalCloseIcon = styled_components_1.default(Close_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 37px;\n  right: 45px;\n  color: ", ";\n  font-size: 24px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  top: 37px;\n  right: 45px;\n  color: ", ";\n  font-size: 24px;\n  cursor: pointer;\n"])), components_1.Colors.white);
exports.ModalBody = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 30px 45px;\n  position: relative;\n"], ["\n  padding: 30px 45px;\n  position: relative;\n"])));
exports.SearchInputWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  padding: 12px 31px 12px 30px;\n  border-radius: 4px;\n  border: 2px solid ", ";\n  margin: 0 45px 32px;\n"], ["\n  position: relative;\n  padding: 12px 31px 12px 30px;\n  border-radius: 4px;\n  border: 2px solid ", ";\n  margin: 0 45px 32px;\n"])), components_1.Colors.lightGray);
exports.SearchIcon = styled_components_1.default(Search_1.default).attrs(function () { return ({ fontSize: "large" }); })(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  right: 15px;\n  top: 11px;\n  color: ", ";\n"], ["\n  position: absolute;\n  right: 15px;\n  top: 11px;\n  color: ", ";\n"])), components_1.Colors.lightGray);
exports.SearchInput = styled_components_1.default(components_1.Input)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.TableRow = styled_components_1.default(Grid_1.default).attrs(function () { return ({ xs: 12 }); })(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding: ", "px 45px;\n  border-bottom: 1px solid ", ";\n\n  &:last-child {\n    border-bottom: 0;\n  }\n"], ["\n  padding: ", "px 45px;\n  border-bottom: 1px solid ", ";\n\n  &:last-child {\n    border-bottom: 0;\n  }\n"])), function (_a) {
    var _b = _a.paddingVertical, paddingVertical = _b === void 0 ? 45 : _b;
    return paddingVertical;
}, components_1.Colors.lightGray);
exports.TableText = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 18px;\n"], ["\n  color: ", ";\n  font-size: 18px;\n"])), components_1.Colors.arsenic);
exports.TablePrimaryText = styled_components_1.default(exports.TableText)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  font-weight: 600;\n  font-size: 20px;\n"], ["\n  font-weight: 600;\n  font-size: 20px;\n"])));
exports.TableButton = styled_components_1.default(components_1.Button)(templateObject_11 || (templateObject_11 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=styles.js.map