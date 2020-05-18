"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var constants_1 = require("../constants");
var page_1 = require("../provider/page");
function useDraggableStack(stack) {
    var _a = page_1.usePageDispatch(), setIsOrderDragging = _a.setIsOrderDragging, cancelDragging = _a.cancelDragging;
    var _b = react_dnd_1.useDrag({
        item: {
            type: constants_1.DRAG_ITEM_TYPE.STACK,
            stack: stack
        },
        begin: function () {
            setIsOrderDragging(true);
        },
        end: function (dropResult, mon) {
            // if user dropped order where is is not allowed
            if (mon.didDrop() === false) {
                cancelDragging();
            }
        }
    }), _c = _b[0], dragRef = _b[1], preview = _b[2];
    react_1.useEffect(function () {
        preview(react_dnd_html5_backend_1.getEmptyImage(), { captureDraggingState: true });
    }, []);
    return dragRef;
}
exports.useDraggableStack = useDraggableStack;
//# sourceMappingURL=draggableStack.js.map