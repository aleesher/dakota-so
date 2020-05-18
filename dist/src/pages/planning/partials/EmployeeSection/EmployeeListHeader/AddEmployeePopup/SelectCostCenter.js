"use strict";
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
var react_select_1 = __importDefault(require("react-select"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var mock_1 = require("../../../../mock");
var WIDTH = 360;
var COST_CENTER_OPTIONS = mock_1.COST_CENTERS.map(function (c) { return ({ label: c, value: c }); });
var customStyles = {
    control: function (styles) { return (__assign(__assign({}, styles), { marginRight: 40, height: 56, width: WIDTH, border: "2px solid " + Colors_1.default.lightGray, borderRadius: 3, backgroundColor: "white", outline: "none", boxShadow: "none", ":focus": {
            border: "2px solid " + Colors_1.default.fiord2
        }, ":hover": {
            border: "2px solid " + Colors_1.default.fiord2
        } })); },
    menu: function (styles) { return (__assign(__assign({}, styles), { width: WIDTH })); },
    multiValue: function (styles, _a) {
        var data = _a.data;
        return (__assign(__assign({}, styles), { backgroundColor: Colors_1.default.royalBlue + "21" }));
    },
    multiValueLabel: function (styles, _a) {
        var data = _a.data;
        return (__assign(__assign({}, styles), { color: Colors_1.default.royalBlue }));
    },
    multiValueRemove: function (styles, _a) {
        var data = _a.data;
        return (__assign(__assign({}, styles), { color: Colors_1.default.royalBlue, ":hover": {
                backgroundColor: Colors_1.default.royalBlue,
                color: "white"
            } }));
    },
    indicatorSeparator: function () { return ({}); }
};
var SelectCostCenter = function (_a) {
    var onChange = _a.onChange;
    var _b = react_1.useState([]), value = _b[0], setValue = _b[1];
    var handleChange = function (options) {
        if (options.length < 5) {
            setValue(options);
            onChange(options.map(function (o) { return o.value; }));
        }
    };
    return (react_1.default.createElement(react_select_1.default, { placeholder: "Amsterdam", value: value, closeMenuOnSelect: false, isMulti: true, options: COST_CENTER_OPTIONS, onChange: handleChange, styles: customStyles }));
};
exports.default = SelectCostCenter;
//# sourceMappingURL=SelectCostCenter.js.map