"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var isObject_1 = __importDefault(require("lodash/isObject"));
var toString_1 = __importDefault(require("lodash/toString"));
var get_1 = __importDefault(require("lodash/get"));
var helpers_1 = require("./helpers");
var styles_1 = require("./styles");
var ValidationError = function (_a) {
    var _b = _a.field, field = _b === void 0 ? "Veld" : _b, _c = _a.hasError, hasError = _c === void 0 ? false : _c, _d = _a.text, text = _d === void 0 ? "" : _d;
    if (!text) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    var message = isObject_1.default(text) ? get_1.default(text, "value") : text;
    if (!hasError) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    return (react_1.default.createElement(styles_1.ErrorWrapper, null,
        react_1.default.createElement(styles_1.ErrorMessage, null,
            !!text
                ? helpers_1.formatValidationErrorText(message, toString_1.default(field))
                : field + " is verplicht",
            " ")));
};
exports.default = ValidationError;
//# sourceMappingURL=index.js.map