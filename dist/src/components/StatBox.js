"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_customizable_progressbar_1 = __importDefault(require("react-customizable-progressbar"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var styles_1 = require("../pages/home/styles");
var StatBox = function (_a) {
    var _b = _a.color, color = _b === void 0 ? Colors_1.default.cinnabar : _b, _c = _a.progress, progress = _c === void 0 ? 10 : _c, _d = _a.title, title = _d === void 0 ? "open" : _d;
    var steps = 1000;
    return (react_1.default.createElement(styles_1.StatCard, { color: color },
        react_1.default.createElement("h4", null, title),
        react_1.default.createElement(react_customizable_progressbar_1.default, { radius: 50, progress: progress > steps ? steps : progress, strokeWidth: 10, strokeColor: color, strokeLinecap: "butt", trackStrokeWidth: 10, trackStrokeLinecap: "butt", cut: 180, rotate: -180, steps: steps },
            react_1.default.createElement(styles_1.Stat, { color: color }, progress))));
};
exports.default = StatBox;
//# sourceMappingURL=StatBox.js.map