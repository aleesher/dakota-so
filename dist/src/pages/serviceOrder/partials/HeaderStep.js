"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("../styles");
exports.default = (function (_a) {
    var step = _a.step, history = _a.history;
    var lineColor = step === 1 ? components_1.Colors.pattensBlue : components_1.Colors.dodgerBlue;
    var redirectBack = function () {
        if (step === 2) {
            history.goBack();
        }
    };
    return (react_1.default.createElement(styles_1.HeaderStepWrapper, { step: 2 },
        react_1.default.createElement(styles_1.HeaderLine, { color: lineColor }),
        react_1.default.createElement(Tooltip_1.default, { title: "Algemene Informatie", placement: "bottom" },
            react_1.default.createElement(styles_1.HeaderStep, { onClick: redirectBack }, "1")),
        step === 1 ? (react_1.default.createElement(styles_1.HeaderDot, null)) : (react_1.default.createElement(Tooltip_1.default, { title: "Werkorders", placement: "bottom" },
            react_1.default.createElement(styles_1.HeaderStep, { align: "right" }, "2")))));
});
//# sourceMappingURL=HeaderStep.js.map