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
var draggableStack_1 = require("../../../../hooks/draggableStack");
var page_1 = require("../../../../provider/page");
var StackPreview_1 = __importDefault(require("../StackPreview"));
var styles_1 = require("../styles");
var SelectedCollapsedStack = function (_a) {
    var stack = _a.stack;
    var dragRef = draggableStack_1.useDraggableStack(stack);
    var _b = page_1.usePageState(), selectedStackId = _b.selectedStackId, isOrderDragging = _b.isOrderDragging;
    var isDragging = react_1.useMemo(function () {
        return isOrderDragging && selectedStackId === stack.id;
    }, [selectedStackId, isOrderDragging]);
    return (react_1.default.createElement(styles_1.DraggableOrderStackWrapper, { ref: dragRef, left: stack.start, width: stack.width, isDragging: isDragging },
        react_1.default.createElement(StackPreview_1.default, { stack: stack })));
};
exports.default = SelectedCollapsedStack;
//# sourceMappingURL=Selected.js.map