"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var components_1 = require("dakota-portal/dist/components");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  position: relative;\n  padding: 8 8 45px;\n\n  && .Search {\n    margin-left: 50px;\n  }\n"], ["\n  display: flex;\n  flex: 1;\n  position: relative;\n  padding: 8 8 45px;\n\n  && .Search {\n    margin-left: 50px;\n  }\n"])));
var Button = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: -4px;\n  bottom: 0;\n  left: 1px;\n  z-index: 1;\n  width: 34px;\n  font-size: 16px;\n  text-align: left;\n  padding-left: 15px;\n  color: ", ";\n"], ["\n  position: absolute;\n  top: -4px;\n  bottom: 0;\n  left: 1px;\n  z-index: 1;\n  width: 34px;\n  font-size: 16px;\n  text-align: left;\n  padding-left: 15px;\n  color: ", ";\n"])), components_1.Colors.heather);
var Input = styled_components_1.default(components_1.Input)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  font-size: 19px;\n\n  .dakota-textfield-input--underline {\n    border-bottom: 0 !important;\n  }\n"], ["\n  flex: 1;\n  font-size: 19px;\n\n  .dakota-textfield-input--underline {\n    border-bottom: 0 !important;\n  }\n"])));
var SearchInput = function (_a) {
    var _b = _a.text, text = _b === void 0 ? "" : _b, placeholder = _a.placeholder, onSearch = _a.onSearch;
    var _c = react_1.default.useState(text), value = _c[0], setValue = _c[1];
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(Button, { onClick: function () { return onSearch(value); } },
            react_1.default.createElement(Search_1.default, { color: "inherit" })),
        react_1.default.createElement(Input, { value: value, className: "Search", placeholder: placeholder, onChange: function (e) { return setValue(e.target.value); } })));
};
exports.default = SearchInput;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=SearchInput.js.map