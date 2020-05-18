"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var constants_1 = require("../../../constants");
var helpers_1 = require("../../../helpers");
var data_1 = require("../../../provider/data");
var dnd_1 = require("../../../provider/dnd");
var page_1 = require("../../../provider/page");
var settings_1 = require("../../../provider/settings");
var styles_1 = require("./styles");
exports.DroppableOrder = function (_a) {
    var workOrder = _a.workOrder, children = _a.children;
    var _b = settings_1.useSettingsState(), employeeTimeScale = _b.employeeTimeScale, employeeViewDate = _b.employeeViewDate;
    var _c = data_1.useDataDispatch(), onDropToOrder = _c.onDropToOrder, onDropStackToOrder = _c.onDropStackToOrder;
    var setIsOrderDragging = page_1.usePageDispatch().setIsOrderDragging;
    var _d = react_dnd_1.useDrop({
        accept: [constants_1.DRAG_ITEM_TYPE.ORDER, constants_1.DRAG_ITEM_TYPE.STACK],
        drop: function (item) {
            if (item.type === constants_1.DRAG_ITEM_TYPE.STACK) {
                var stack = item.stack;
                onDropStackToOrder(stack.id, stack.employeeResourceCode, workOrder.code, workOrder.soEmployeeCode);
            }
            else {
                onDropToOrder(workOrder.code, workOrder.soEmployeeCode);
            }
            setIsOrderDragging(false);
        },
        // collect: mon => ({
        //   isOver: mon.canDrop() && !!mon.isOver()
        // }),
        canDrop: function () {
            return helpers_1.canDropToStack(employeeTimeScale, employeeViewDate, workOrder.start + workOrder.width);
        },
        hover: function () {
            if (dnd_1.HoverObject.type !== dnd_1.HOVER_TYPE.EMPLOYEE_ORDER ||
                dnd_1.HoverObject.code !== workOrder.code) {
                dnd_1.HoverObject.type = dnd_1.HOVER_TYPE.EMPLOYEE_ORDER;
                dnd_1.HoverObject.code = workOrder.code;
                dnd_1.HoverObject.end = workOrder.start + workOrder.width;
            }
        }
    }), _e = _d[0], dropRef = _d[1];
    return (react_1.default.createElement(styles_1.DroppableOrderWrapper, { ref: dropRef }, children));
};
//# sourceMappingURL=DroppableOrder.js.map