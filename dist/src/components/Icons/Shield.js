"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
exports.default = (function (_a) {
    var _b = _a.width, width = _b === void 0 ? "12px" : _b, _c = _a.height, height = _c === void 0 ? "13px" : _c, _d = _a.color, color = _d === void 0 ? Colors_1.default.dodgerBlue : _d;
    return (react_1.default.createElement("svg", { width: width, height: height, viewBox: "0 0 12 13", version: "1.1" },
        react_1.default.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            react_1.default.createElement("g", { id: "Agenda", transform: "translate(-1149.000000, -700.000000)", stroke: color, strokeWidth: "1.2" },
                react_1.default.createElement("g", { id: "Group-5-Copy-2", transform: "translate(1150.000000, 701.000000)" },
                    react_1.default.createElement("path", { d: "M10,3.28906358 C10,6.83576879 7.34567901,10.9827052 5,10.9827052 C2.65432099,10.9827052 0,6.83576879 0,3.28906358 C0,2.14455491 5,0.0462890173 5,0.0462890173 C5,0.0462890173 10,1.95380347 10,3.28906358 Z", id: "Stroke-1" }),
                    react_1.default.createElement("polyline", { id: "Stroke-3", strokeLinecap: "round", points: "2.78075926 5.57006936 4.48304321 7.32352023 7.71304321 3.99649711" }))))));
});
//# sourceMappingURL=Shield.js.map