"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var isBoolean_1 = __importDefault(require("lodash/isBoolean"));
var constants_1 = require("../constants");
var styles_1 = require("../styles");
exports.default = (function (_a) {
    var data = _a.data, informationBoxValues = _a.informationBoxValues;
    var formatValue = function (val) {
        if (isBoolean_1.default(val)) {
            return val ? "Ja" : "Nee";
        }
        return val;
    };
    var renderInfoItem = function (title, val) { return (react_1.default.createElement(styles_1.InformatieRow, null,
        react_1.default.createElement(styles_1.RowItem, null,
            title,
            ": "),
        react_1.default.createElement(styles_1.RowLink, null, val))); };
    var complexCode = get_1.default(data, "subComplex.code");
    return !isEmpty_1.default(informationBoxValues) ? (react_1.default.createElement(styles_1.InformationBox, { xs: 10, item: true },
        react_1.default.createElement(styles_1.InformationBoxTitle, null, "Informatiebox"),
        react_1.default.createElement(styles_1.InformationBoxBody, null,
            constants_1.SERVICE_ORDER_INFO_FIELDS.map(function (_a) {
                var title = _a.title, key = _a.key;
                return renderInfoItem(title, formatValue(informationBoxValues[key]));
            }),
            renderInfoItem("Complex", complexCode)))) : (react_1.default.createElement(react_1.default.Fragment, null));
});
//# sourceMappingURL=InformationBox.js.map