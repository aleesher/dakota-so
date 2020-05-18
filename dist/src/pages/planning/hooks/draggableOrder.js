"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var constants_1 = require("../constants");
var page_1 = require("../provider/page");
function useDraggableOrder(workOrder) {
    var _a = page_1.usePageDispatch(), setIsOrderDragging = _a.setIsOrderDragging, cancelDragging = _a.cancelDragging;
    var _b = page_1.usePageState(), totalSelected = _b.totalSelected, selectedOrders = _b.selectedOrders;
    var _c = react_dnd_1.useDrag({
        item: {
            type: constants_1.DRAG_ITEM_TYPE.ORDER,
            order: workOrder,
            totalSelected: totalSelected
        },
        collect: function (monitor) { return ({
            isDragging: !!monitor.isDragging()
        }); },
        canDrag: function () { return !workOrder.isSaving && !!selectedOrders[workOrder.code]; },
        begin: function () {
            setIsOrderDragging(true);
        },
        end: function (dropResult, mon) {
            // if user dropped order where is is not allowed
            if (mon.didDrop() === false) {
                cancelDragging();
            }
        }
    }), isDragging = _c[0].isDragging, dragRef = _c[1], preview = _c[2];
    react_1.useEffect(function () {
        preview(react_dnd_html5_backend_1.getEmptyImage(), { captureDraggingState: true });
    }, []);
    return [dragRef, isDragging];
}
exports.useDraggableOrder = useDraggableOrder;
//# sourceMappingURL=draggableOrder.js.map