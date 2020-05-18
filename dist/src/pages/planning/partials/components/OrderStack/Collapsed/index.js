"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var page_1 = require("../../../../provider/page");
var Selected_1 = __importDefault(require("./Selected"));
var Simple_1 = __importDefault(require("./Simple"));
var CollapsedOrderStack = function (_a) {
    var stack = _a.stack;
    var selectedStackId = page_1.usePageState().selectedStackId;
    var isSelected = react_1.useMemo(function () { return stack.id === selectedStackId; }, [
        stack.id,
        selectedStackId
    ]);
    return isSelected ? (react_1.default.createElement(Selected_1.default, { stack: stack })) : (react_1.default.createElement(Simple_1.default, { stack: stack }));
};
exports.default = CollapsedOrderStack;
//# sourceMappingURL=index.js.map