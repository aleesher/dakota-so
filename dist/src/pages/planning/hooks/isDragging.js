"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var page_1 = require("../provider/page");
function useIsDragging(orderCode) {
    var _a = page_1.usePageState(), selectedOrders = _a.selectedOrders, totalSelected = _a.totalSelected, isOrderDragging = _a.isOrderDragging;
    var isDragging = react_1.useMemo(function () {
        return isOrderDragging && !!selectedOrders[orderCode];
    }, [selectedOrders, totalSelected, isOrderDragging]);
    return isDragging;
}
exports.useIsDragging = useIsDragging;
//# sourceMappingURL=isDragging.js.map