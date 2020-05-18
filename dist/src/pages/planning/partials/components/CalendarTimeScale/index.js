"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var CalendarTimeScale = function (_a) {
    var timeScale = _a.timeScale;
    return (react_1.default.createElement(styles_1.TimeScaleWrapper, null, timeScale.getValues().map(function (v) { return (react_1.default.createElement(styles_1.TimeScalePoint, { key: v.label, position: v.x },
        react_1.default.createElement("div", null, v.label))); })));
};
exports.default = CalendarTimeScale;
//# sourceMappingURL=index.js.map