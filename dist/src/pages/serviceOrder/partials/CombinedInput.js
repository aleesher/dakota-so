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
var get_1 = __importDefault(require("lodash/get"));
var map_1 = __importDefault(require("lodash/map"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var models_1 = require("../models");
var Styled = __importStar(require("../../home/styles"));
var styles_1 = require("../styles");
var CombinedInput = function (_a) {
    var onChange = _a.onChange, onBlur = _a.onBlur, value = _a.value, title = _a.title, disabled = _a.disabled, name = _a.name;
    return (react_1.default.createElement(Grid_1.default, { xs: 12, container: true },
        react_1.default.createElement(Grid_1.default, { xs: 4 },
            react_1.default.createElement(Styled.ItemTitle, { paddingTop: 22 }, get_1.default(title, "[0]"))),
        react_1.default.createElement(styles_1.CombinedInputWrapper, null, map_1.default(name, function (n, i) { return (react_1.default.createElement(styles_1.CombinedInputInner, { width: i === 0 ? 25 : 40, key: get_1.default(value, n) + "_" + i },
            i !== 0 && (react_1.default.createElement(Styled.ItemTitle, { paddingTop: 22, marginRight: 20 }, get_1.default(title, "" + [i]))),
            react_1.default.createElement(Styled.StyledInput, { value: get_1.default(value, n) || "", onChange: onChange, className: "styled-input", customType: "root", disabled: disabled, name: n, onBlur: onBlur, type: models_1.CardItemTypes.combinedInput }))); }))));
};
exports.default = CombinedInput;
//# sourceMappingURL=CombinedInput.js.map