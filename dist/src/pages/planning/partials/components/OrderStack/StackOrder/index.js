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
var Resizable_1 = __importDefault(require("./Resizable"));
var Selected_1 = __importDefault(require("./Selected"));
var Simple_1 = __importDefault(require("./Simple"));
var StackOrder = function (_a) {
    var workOrder = _a.workOrder, top = _a.top;
    var _b = page_1.usePageState(), selectedOrders = _b.selectedOrders, totalSelected = _b.totalSelected;
    var isSelected = react_1.useMemo(function () {
        return !!selectedOrders[workOrder.code];
    }, [selectedOrders]);
    if (!isSelected) {
        return react_1.default.createElement(Simple_1.default, { workOrder: workOrder, top: top });
    }
    if (totalSelected === 1) {
        return react_1.default.createElement(Resizable_1.default, { workOrder: workOrder, top: top });
    }
    return react_1.default.createElement(Selected_1.default, { workOrder: workOrder, top: top });
};
exports.default = StackOrder;
//# sourceMappingURL=index.js.map