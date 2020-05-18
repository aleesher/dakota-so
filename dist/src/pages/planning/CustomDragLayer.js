"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var react_1 = __importStar(require("react"));
var react_dnd_1 = require("react-dnd");
var constants_1 = require("./constants");
var helpers_1 = require("./helpers");
var MultipleOrdersPreview_1 = __importDefault(require("./partials/components/OrderPreview/MultipleOrdersPreview"));
var OrderPreview_1 = __importDefault(require("./partials/components/OrderPreview/OrderPreview"));
var StackPreview_1 = __importDefault(require("./partials/components/OrderStack/StackPreview"));
var dnd_1 = require("./provider/dnd");
var settings_1 = require("./provider/settings");
var layerStyles = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
};
function getItemStyles(initialOffset, currentOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: "none"
        };
    }
    var x = currentOffset.x, y = currentOffset.y;
    var transform = "translate(" + x + "px, " + y + "px)";
    return {
        transform: transform,
        WebkitTransform: transform
    };
}
function renderItem(itemType, item, color) {
    switch (itemType) {
        case constants_1.DRAG_ITEM_TYPE.ORDER:
            return item.totalSelected === 1 ? (react_1.default.createElement(OrderPreview_1.default, { order: item.order, color: color })) : (react_1.default.createElement(MultipleOrdersPreview_1.default, { item: item, color: color }));
        case constants_1.DRAG_ITEM_TYPE.STACK:
            return react_1.default.createElement(StackPreview_1.default, { stack: item.stack, color: color });
        default:
            return null;
    }
}
var CustomDragLayer = function () {
    var _a = react_dnd_1.useDragLayer(function (monitor) { return ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        delta: monitor.getDifferenceFromInitialOffset(),
        isDragging: monitor.isDragging()
    }); }), itemType = _a.itemType, isDragging = _a.isDragging, item = _a.item, initialOffset = _a.initialOffset, currentOffset = _a.currentOffset, delta = _a.delta;
    var _b = settings_1.useSettingsState(), employeeTimeScale = _b.employeeTimeScale, employeeViewDate = _b.employeeViewDate;
    var color = react_1.useMemo(function () {
        if (!isDragging) {
            return false;
        }
        var canDrop;
        switch (dnd_1.HoverObject.type) {
            case dnd_1.HOVER_TYPE.UNASSIGNED_ORDER: {
                canDrop = helpers_1.canDropToUnassignedOrder(item, dnd_1.HoverObject.code);
                break;
            }
            case dnd_1.HOVER_TYPE.EMPLOYEE: {
                canDrop = helpers_1.canDropToEmployee(employeeTimeScale, employeeViewDate, delta, item.type === constants_1.DRAG_ITEM_TYPE.STACK ? item.stack : item.order);
                break;
            }
            case dnd_1.HOVER_TYPE.EMPLOYEE_ORDER:
            case dnd_1.HOVER_TYPE.STACK: {
                canDrop = helpers_1.canDropToStack(employeeTimeScale, employeeViewDate, dnd_1.HoverObject.end);
            }
        }
        return !canDrop
            ? Colors_1.default.cinnabar
            : dnd_1.HoverObject.type === dnd_1.HOVER_TYPE.EMPLOYEE_ORDER ||
                dnd_1.HoverObject.type === dnd_1.HOVER_TYPE.STACK
                ? Colors_1.default.mediumSeaGreen
                : Colors_1.default.dodgerBlue;
    }, [isDragging, itemType, item, employeeTimeScale, employeeViewDate, delta]);
    if (!isDragging) {
        return null;
    }
    return (react_1.default.createElement("div", { style: layerStyles },
        react_1.default.createElement("div", { style: getItemStyles(initialOffset, currentOffset) }, renderItem(itemType, item, color))));
};
exports.default = CustomDragLayer;
//# sourceMappingURL=CustomDragLayer.js.map