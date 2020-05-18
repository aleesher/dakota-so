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
var constants_1 = require("../../../constants");
var OrderData_1 = __importDefault(require("../DayOrder/OrderData"));
var OrderPreview = function (_a) {
    var order = _a.order, color = _a.color, _b = _a.top, top = _b === void 0 ? 0 : _b;
    return (react_1.default.createElement("div", { style: __assign(__assign({}, constants_1.ORDER_STYLES), { width: order.width, top: top, borderColor: color }) },
        react_1.default.createElement(OrderData_1.default, { workOrder: order })));
};
exports.default = react_1.memo(OrderPreview);
//# sourceMappingURL=OrderPreview.js.map