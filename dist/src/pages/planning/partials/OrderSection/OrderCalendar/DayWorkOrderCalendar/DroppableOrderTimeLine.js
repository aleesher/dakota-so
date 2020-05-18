"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var constants_1 = require("../../../../constants");
var helpers_1 = require("../../../../helpers");
var provider_1 = require("../../../../provider");
var dnd_1 = require("../../../../provider/dnd");
var styles_1 = require("../../../../styles");
var DroppableOrderTimeLine = function (_a) {
    var order = _a.order, children = _a.children;
    var onDropToOrderCalendar = provider_1.useDataDispatch().onDropToOrderCalendar;
    var setIsOrderDragging = provider_1.usePageDispatch().setIsOrderDragging;
    var _b = react_dnd_1.useDrop({
        accept: constants_1.DRAG_ITEM_TYPE.ORDER,
        drop: function (item, mon) {
            var newStart = helpers_1.calculateNewStart(item.order.start, mon);
            onDropToOrderCalendar(item.order.code, newStart);
            setIsOrderDragging(false);
        },
        // collect: mon => ({
        //   isOver: mon.canDrop() && !!mon.isOver()
        // }),
        canDrop: function (item) {
            return helpers_1.canDropToUnassignedOrder(item, order.code);
        },
        hover: function () {
            if (dnd_1.HoverObject.type !== dnd_1.HOVER_TYPE.UNASSIGNED_ORDER ||
                dnd_1.HoverObject.code !== order.code) {
                dnd_1.HoverObject.type = dnd_1.HOVER_TYPE.UNASSIGNED_ORDER;
                dnd_1.HoverObject.code = order.code;
            }
        }
    }), _c = _b[0], dropRef = _b[1];
    return react_1.default.createElement(styles_1.TimeLineWrapper, { ref: dropRef }, children);
};
exports.default = DroppableOrderTimeLine;
//# sourceMappingURL=DroppableOrderTimeLine.js.map