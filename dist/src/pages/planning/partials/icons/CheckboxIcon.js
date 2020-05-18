"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var CheckboxIcon = function (_a) {
    var checked = _a.checked, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return (react_1.default.createElement("svg", { width: "30px", height: "31px", viewBox: "0 0 30 31" },
        react_1.default.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            react_1.default.createElement("g", { id: "Deadline", transform: "translate(-476.000000, -538.000000)" },
                react_1.default.createElement("g", { transform: "translate(436.000000, 104.000000)", id: "Group_2840" },
                    react_1.default.createElement("g", { transform: "translate(40.000000, 434.500000)" },
                        react_1.default.createElement("g", { id: "Rectangle_661-2" },
                            react_1.default.createElement("rect", { id: "Rectangle", stroke: disabled ? Colors_1.default.gullGrey : Colors_1.default.dodgerBlue, strokeWidth: "2", x: "1", y: "1", width: "28", height: "28", rx: "3" })),
                        react_1.default.createElement("polygon", { id: "checkmark-2", fill: disabled
                                ? Colors_1.default.gullGrey
                                : checked
                                    ? Colors_1.default.dodgerBlue
                                    : "transparent", fillRule: "nonzero", points: "20.409 9.354 13.033 16.73 9.592 13.288 7.133 15.746 13.033 21.646 22.867 11.812" })))))));
};
exports.default = CheckboxIcon;
//# sourceMappingURL=CheckboxIcon.js.map