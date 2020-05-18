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
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useClickOutside_1 = __importDefault(require("../../hooks/useClickOutside"));
var EditableLaneTitle = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n  box-sizing: border-box;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid blue;\n  font-size: 100%;\n"], ["\n  padding: ", ";\n  box-sizing: border-box;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid blue;\n  font-size: 100%;\n"])), function (_a) {
    var _b = _a.padding, padding = _b === void 0 ? 0 : _b;
    return padding + "px";
});
var VALUE;
var AutoClosableInput = function (props) {
    var initialValue = props.initialValue, onChange = props.onChange, _a = props.padding, padding = _a === void 0 ? 0 : _a;
    var _b = react_1.useState(initialValue), value = _b[0], setValue = _b[1];
    var ref = useClickOutside_1.default(function () { return onChange(VALUE); });
    react_1.useEffect(function () { return ref.current.focus(); }, []);
    // fixme: temp trick (otherwise useClickOutside's handler uses old value)
    VALUE = value;
    return (react_1.default.createElement(EditableLaneTitle, { ref: ref, padding: padding, value: value, onChange: function (event) { return setValue(event.currentTarget.value); }, onKeyDown: function (event) {
            if (event.keyCode === 13) {
                // if enter pressed
                onChange(value);
            }
        } }));
};
exports.default = AutoClosableInput;
var templateObject_1;
//# sourceMappingURL=AutoClosableInput.js.map