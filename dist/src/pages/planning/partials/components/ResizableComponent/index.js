"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var re_resizable_1 = require("re-resizable");
var constants_1 = require("../../../constants");
var ResizableComponent = function (_a) {
    var children = _a.children, start = _a.start, end = _a.end, onResize = _a.onResize, _b = _a.direction, direction = _b === void 0 ? "both" : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    var _d = react_1.useState(start), left = _d[0], setLeft = _d[1];
    var _e = react_1.useState(start), tempLeft = _e[0], setTempLeft = _e[1];
    var _f = react_1.useState(end), right = _f[0], setRight = _f[1];
    var _g = react_1.useState(end), tempRight = _g[0], setTempRight = _g[1];
    var _h = react_1.useState(end - start), width = _h[0], setWidth = _h[1];
    // if the order was dragged
    react_1.useEffect(function () {
        setLeft(start);
        setTempLeft(start);
        setRight(end);
        setTempRight(end);
        setWidth(end - start);
    }, [start, end]);
    var handleResizeStart = function () {
        setTempLeft(left);
        setTempRight(right);
    };
    var handleResizeStop = function () {
        setWidth(right - left);
        onResize(left, right);
    };
    var handleResize = function (e, direction, ref, d) {
        e.preventDefault();
        if (direction === "left") {
            setLeft(tempLeft - d.width);
        }
        else {
            setRight(tempRight + d.width);
        }
    };
    return (react_1.default.createElement(re_resizable_1.Resizable, { style: __assign(__assign({}, style), { left: left }), size: {
            width: width,
            height: constants_1.ORDER_HEIGHT
        }, onResize: handleResize, onResizeStart: handleResizeStart, onResizeStop: handleResizeStop, enable: {
            left: direction === "left" || direction === "both",
            right: direction === "right" || direction === "both"
        } }, children));
};
exports.default = ResizableComponent;
//# sourceMappingURL=index.js.map