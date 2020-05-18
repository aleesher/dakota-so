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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var range_1 = __importDefault(require("lodash/range"));
var constants_1 = require("../../../constants");
var OrderPreview_1 = __importDefault(require("./OrderPreview"));
var MultipleOrdersPreview = function (_a) {
    var _b = _a.item, order = _b.order, totalSelected = _b.totalSelected, color = _a.color;
    return (react_1.default.createElement("div", { style: { position: "relative" } },
        range_1.default(0, totalSelected).map(function (i) { return (react_1.default.createElement("div", { key: i, style: __assign(__assign({}, constants_1.ORDER_STYLES), { width: order.width, borderColor: color, top: constants_1.ORDER_PREVIEW_OFFSET * i, left: constants_1.ORDER_PREVIEW_OFFSET * i }) })); }),
        react_1.default.createElement(OrderPreview_1.default, { order: order, color: color })));
};
exports.default = react_1.memo(MultipleOrdersPreview);
//# sourceMappingURL=MultipleOrdersPreview.js.map