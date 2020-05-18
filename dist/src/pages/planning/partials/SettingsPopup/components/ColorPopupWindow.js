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
var reactjs_popup_1 = __importDefault(require("reactjs-popup"));
var react_color_1 = require("react-color");
var ColorPopupWindow = function (_a) {
    var open = _a.open, initialColor = _a.initialColor, onClose = _a.onClose;
    var _b = react_1.useState(initialColor), currentColor = _b[0], setCurrentColor = _b[1];
    react_1.useEffect(function () { return setCurrentColor(initialColor); }, [initialColor]);
    return (react_1.default.createElement(reactjs_popup_1.default, { open: open, closeOnDocumentClick: true, closeOnEscape: true, lockScroll: true, contentStyle: {
            width: 410,
            height: 44,
            padding: 20,
            borderRadius: 5
        }, onClose: function () { return onClose(currentColor); } },
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_color_1.SliderPicker, { color: currentColor, onChangeComplete: function (color) { return setCurrentColor(color.hex); } }))));
};
exports.default = ColorPopupWindow;
//# sourceMappingURL=ColorPopupWindow.js.map