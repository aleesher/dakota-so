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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var react_1 = __importStar(require("react"));
var constants_1 = require("../../../constants");
var OrderPreview_1 = __importDefault(require("../OrderPreview/OrderPreview"));
var styles_1 = require("./styles");
var StackPreview = function (_a) {
    var stack = _a.stack, _b = _a.color, color = _b === void 0 ? Colors_1.default.dodgerBlue : _b;
    var topOrder = stack.getTopOrder();
    return (react_1.default.createElement(styles_1.StackPreviewWrapper, null,
        stack.getBottomOrders().map(function (order, i) { return (react_1.default.createElement("div", { key: order.code, style: __assign(__assign({}, constants_1.ORDER_STYLES), { width: order.width, borderColor: color, top: 8 + constants_1.ORDER_PREVIEW_OFFSET * i }) })); }),
        react_1.default.createElement(OrderPreview_1.default, { order: topOrder, top: 8 + constants_1.ORDER_PREVIEW_OFFSET * (stack.getLength() - 1), color: color })));
};
exports.default = react_1.memo(StackPreview);
//# sourceMappingURL=StackPreview.js.map