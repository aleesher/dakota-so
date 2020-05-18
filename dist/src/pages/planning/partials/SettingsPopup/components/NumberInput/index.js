"use strict";
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
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var styles_1 = require("@material-ui/core/styles");
var styles_2 = require("./styles");
var StyledTextField = styles_1.withStyles(function () { return ({
    root: {
        width: 137
    }
}); })(TextField_1.default);
var NumberInput = function (_a) {
    var value = _a.value, onChange = _a.onChange, min = _a.min, max = _a.max, unit = _a.unit, disabled = _a.disabled;
    var _b = react_1.useState(value.toString()), inputValue = _b[0], setInputValue = _b[1];
    var handleChange = function (newValue) {
        setInputValue(newValue);
        if (newValue.trim() !== "") {
            onChange(+newValue);
        }
    };
    return (react_1.default.createElement(StyledTextField, { value: inputValue, onChange: function (e) { return handleChange(e.target.value); }, type: "number", variant: "outlined", InputProps: {
            endAdornment: (react_1.default.createElement(styles_2.StyledAdornment, { length: inputValue.length, disabled: disabled }, unit))
        }, inputProps: {
            min: min,
            max: max
        }, disabled: disabled }));
};
exports.default = NumberInput;
//# sourceMappingURL=index.js.map