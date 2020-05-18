"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.default = (function (_a) {
    var _b = _a.width, width = _b === void 0 ? "14px" : _b, _c = _a.height, height = _c === void 0 ? "10px" : _c, _d = _a.color, color = _d === void 0 ? Colors_1.default.limerick : _d;
    return (react_1.default.createElement("svg", { width: width, height: height, viewBox: "0 0 14 10", version: "1.1" },
        react_1.default.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round" },
            react_1.default.createElement("g", { id: "Agenda", transform: "translate(-983.000000, -486.000000)", stroke: color, strokeWidth: "2.4" },
                react_1.default.createElement("polyline", { id: "Stroke-1-Copy", points: "985 490.837802 988.45131 494 995 488" })))));
});
//# sourceMappingURL=Done.js.map