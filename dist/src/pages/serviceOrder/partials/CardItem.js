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
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var get_1 = __importDefault(require("lodash/get"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var components_1 = require("dakota-portal/dist/components");
var ValidationError_1 = __importDefault(require("../../../components/ValidationError"));
var helpers_1 = require("../helpers");
var CombinedInput_1 = __importDefault(require("./CombinedInput"));
var models_1 = require("../models");
var Styled = __importStar(require("../../home/styles"));
var styles_1 = require("../styles");
exports.default = (function (_a) {
    var title = _a.title, onChange = _a.onChange, type = _a.type, val = _a.value, _b = _a.options, options = _b === void 0 ? [] : _b, disabled = _a.disabled, name = _a.name, validation = _a.errors, onBlur = _a.onBlur, maxLength = _a.maxLength, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c;
    var value = helpers_1.formatLimitedText(val, maxLength);
    var handleOnSelectChange = function (selectedValue) {
        if (name === "orderType") {
            onChange({
                target: {
                    name: "serviceType",
                    value: helpers_1.getDefaultServiceType(selectedValue)
                }
            });
        }
        onChange({ target: { name: name, value: selectedValue } });
    };
    var renderItem = function () {
        switch (type) {
            case models_1.CardItemTypes.switch: {
                return (react_1.default.createElement(components_1.SwitchComponent, { checked: !!value, onChange: onChange(name) }));
            }
            case models_1.CardItemTypes.input: {
                return (react_1.default.createElement(Styled.StyledInput, { value: value, onChange: onChange, className: "styled-input", customType: "root", disabled: disabled, name: name, onBlur: onBlur }));
            }
            case models_1.CardItemTypes.textarea: {
                return (react_1.default.createElement(Styled.StyledTextarea, { value: val, onChange: onChange, className: "styled-input", customType: "root", disabled: disabled, multiline: true, name: name, onBlur: onBlur, fullWidth: fullWidth }));
            }
            case models_1.CardItemTypes.date: {
                return (react_1.default.createElement(styles_1.DateInput, { onChange: onChange(name), InputProps: {
                        className: "so-datepicker",
                        disableUnderline: true
                    }, keyboardIcon: react_1.default.createElement(styles_1.CalendarIcon, { fontSize: "small" }), format: "DD-MM-YYYY" }));
            }
            case models_1.CardItemTypes.time: {
                return (react_1.default.createElement(Styled.StyledInputWrapper, null,
                    react_1.default.createElement(react_input_mask_1.default, { mask: "99:99", maskChar: "", onChange: onChange, value: value, name: name, onBlur: onBlur }, function () { return (react_1.default.createElement(Styled.StyledInput, { value: value, onChange: onChange, className: "styled-input", customType: "root", disabled: disabled, name: name, onBlur: onBlur })); }),
                    react_1.default.createElement(styles_1.TimeIcon, null)));
            }
            case models_1.CardItemTypes.phone: {
                return (react_1.default.createElement(react_input_mask_1.default, { mask: "+9999999999", maskChar: " ", onChange: onChange, value: value, disabled: disabled, name: name, onBlur: onBlur }, function () { return (react_1.default.createElement(Styled.StyledInput, { value: value, onChange: onChange, className: "styled-input", customType: "root", disabled: disabled, name: name, onBlur: onBlur })); }));
            }
            case models_1.CardItemTypes.hour: {
                return (react_1.default.createElement(react_input_mask_1.default, { mask: "99 \\ur", maskChar: " ", onChange: onChange, value: value, onBlur: onBlur }, function () { return (react_1.default.createElement(Styled.StyledInput, { value: value, onChange: onChange, className: "styled-input", customType: "root", disabled: disabled, name: name, onBlur: onBlur })); }));
            }
            case models_1.CardItemTypes.price: {
                return (react_1.default.createElement(react_input_mask_1.default, { formatChars: { "9": "[0-9]" }, onChange: onChange, value: value, disabled: disabled, name: name, onBlur: onBlur }, function () { return (react_1.default.createElement(Styled.StyledInput, { value: value, onChange: onChange, className: "styled-input", customType: "root", disabled: disabled, name: name, onBlur: onBlur })); }));
            }
            default: {
                return (react_1.default.createElement(Styled.StyledSelect, { options: options, value: options.find(function (option) { return get_1.default(option, "value") === value; }), classNamePrefix: "type-select", onChange: function (_a) {
                        var value = _a.value;
                        return handleOnSelectChange(value);
                    }, isDisabled: disabled, name: name, onBlur: onBlur, height: 60 }));
            }
        }
    };
    var ratio = type === models_1.CardItemTypes.textarea ? 2 : 4;
    var ratio2 = type === models_1.CardItemTypes.textarea ? 10 : 8;
    var errors = get_1.default(validation, "errors");
    var touched = get_1.default(validation, "touched");
    return (react_1.default.createElement(Styled.BaseRow, { container: true, item: true, direction: "row", xs: 12, alignItems: "flex-start", justify: "flex-start" }, type === models_1.CardItemTypes.combinedInput ? (react_1.default.createElement(CombinedInput_1.default, { onBlur: onBlur, onChange: onChange, disabled: disabled, title: title, name: name, value: value })) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Grid_1.default, { item: true, xs: ratio },
            react_1.default.createElement(Styled.ItemTitle, { paddingTop: 22 }, title)),
        react_1.default.createElement(Grid_1.default, { item: true, xs: ratio2 },
            renderItem(),
            react_1.default.createElement(ValidationError_1.default, { hasError: get_1.default(errors, name) && get_1.default(touched, name), text: get_1.default(errors, name), field: title }))))));
});
//# sourceMappingURL=CardItem.js.map