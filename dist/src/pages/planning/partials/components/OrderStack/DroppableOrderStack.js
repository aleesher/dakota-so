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
var DroppableOrderStack2 = function (_a) {
    var stack = _a.stack, children = _a.children;
    var _b = settings_1.useSettingsState(), employeeTimeScale = _b.employeeTimeScale, employeeViewDate = _b.employeeViewDate;
    var _c = data_1.useDataDispatch(), onDropToStack = _c.onDropToStack, onDropStackToStack = _c.onDropStackToStack;
    var setIsOrderDragging = page_1.usePageDispatch().setIsOrderDragging;
    var _d = react_dnd_1.useDrop({
        accept: [constants_1.DRAG_ITEM_TYPE.ORDER, constants_1.DRAG_ITEM_TYPE.STACK],
        drop: function (item) {
            if (item.type === constants_1.DRAG_ITEM_TYPE.STACK) {
                onDropStackToStack(item.stack.id, item.stack.employeeResourceCode, stack.id, stack.employeeResourceCode);
            }
            else {
                if (item.totalSelected === 1 && item.order.stackId === stack.id) {
                    // do nothing - order was dropped to the same stack
                }
                else {
                    onDropToStack(stack.employeeResourceCode, stack.id);
                }
            }
            setIsOrderDragging(false);
        },
        // collect: mon => ({
        //   isOver: mon.canDrop() && !!mon.isOver()
        // }),
        canDrop: function (item, mon) {
            return helpers_1.canDropToStack(employeeTimeScale, employeeViewDate, stack.start + stack.width);
        },
        hover: function () {
            if (dnd_1.HoverObject.type !== dnd_1.HOVER_TYPE.STACK ||
                dnd_1.HoverObject.code !== stack.id) {
                dnd_1.HoverObject.type = dnd_1.HOVER_TYPE.STACK;
                dnd_1.HoverObject.code = stack.id;
                dnd_1.HoverObject.end = stack.start + stack.width;
            }
        }
    }), _e = _d[0], dropRef = _d[1];
    return (react_1.default.createElement(styles_1.DroppableOrderStackWrapper, { ref: dropRef, left: stack.start, width: stack.width }, children));
};
exports.default = DroppableOrderStack2;
//# sourceMappingURL=DroppableOrderStack.js.map