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
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var page_1 = require("../../../provider/page");
var OrderTooltip_1 = require("../OrderTooltip");
var OrderWithActionMenu_1 = __importDefault(require("./OrderWithActionMenu"));
var styles_1 = require("./styles");
var DayOrderContent = function (_a) {
    var workOrder = _a.workOrder;
    var isOrderDragging = page_1.usePageState().isOrderDragging;
    if (workOrder.isSaving) {
        return (react_1.default.createElement(styles_1.LoaderWrapper, null,
            react_1.default.createElement(CircularProgress_1.default, null)));
    }
    if (workOrder.error) {
        return react_1.default.createElement("div", null, workOrder.error);
    }
    return !isOrderDragging ? (react_1.default.createElement(OrderTooltip_1.OrderTooltip, { workOrder: workOrder },
        react_1.default.createElement("div", null,
            react_1.default.createElement(OrderWithActionMenu_1.default, { workOrder: workOrder })))) : (react_1.default.createElement(OrderWithActionMenu_1.default, { workOrder: workOrder }));
};
exports.default = react_1.memo(DayOrderContent);
//# sourceMappingURL=DayOrderContent.js.map