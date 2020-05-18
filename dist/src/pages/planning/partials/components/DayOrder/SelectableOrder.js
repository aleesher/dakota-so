"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var constants_1 = require("../../../constants");
var page_1 = require("../../../provider/page");
var settings_1 = require("../../../provider/settings");
var OrderData_1 = __importDefault(require("./OrderData"));
var SelectableOrder = function (_a) {
    var workOrder = _a.workOrder;
    var collapseOrders = settings_1.useSettingsState().collapseOrders;
    var _b = page_1.usePageDispatch(), setSelectedOrder = _b.setSelectedOrder, setSelectedStack = _b.setSelectedStack;
    var handleClick = function (e) {
        e.stopPropagation();
        // if stack was selected
        if (e.shiftKey && collapseOrders && !!workOrder.stackId) {
            setSelectedStack(workOrder.stackId);
        }
        else {
            var data = { type: workOrder.type };
            if (workOrder.type !== constants_1.CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER) {
                data.resourceCode = workOrder.soEmployeeCode;
            }
            if (workOrder.type === constants_1.CALENDAR_ORDER_TYPE.STACK_ORDER) {
                data.stackId = workOrder.stackId;
            }
            setSelectedOrder(workOrder.code, data, e.ctrlKey || e.metaKey);
        }
    };
    return (react_1.default.createElement("div", { onClick: handleClick },
        react_1.default.createElement(OrderData_1.default, { workOrder: workOrder })));
};
exports.default = SelectableOrder;
//# sourceMappingURL=SelectableOrder.js.map