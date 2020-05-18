"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var style_1 = require("../../components/GeneralButton/style");
var GeneralButton = function (props) { return (React.createElement(style_1.CustomStyle, { className: props.className }, props.title)); };
exports.default = GeneralButton;
//# sourceMappingURL=index.js.map