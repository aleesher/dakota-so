"use strict";
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
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Styled = __importStar(require("../styles"));
var Checkbox_1 = __importDefault(require("dakota-portal/dist/components/Checkbox"));
exports.default = (function (_a) {
    var title = _a.title, fields = _a.fields;
    return (react_1.default.createElement(Grid_1.default, { container: true, item: true, direction: "row", xs: 12, alignItems: "flex-start", justify: "flex-start" },
        react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
            react_1.default.createElement(Styled.ItemTitle, null, title)),
        react_1.default.createElement(Styled.CheckBoxContainer, { container: true, item: true, xs: 12, alignItems: "flex-start", justify: "flex-start" }, fields.map(function (field) { return (react_1.default.createElement(Grid_1.default, { item: true, xs: 4 },
            react_1.default.createElement(Styled.StyledFormControlLabel, { name: field.name, control: react_1.default.createElement(Checkbox_1.default, { color: "secondary", checked: field.checked, onChange: field.onChange }), label: field.label, classes: { label: "control-label" } }))); }))));
});
//# sourceMappingURL=BaseLayout.js.map