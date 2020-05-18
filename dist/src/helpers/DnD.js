"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Colors_1 = __importDefault(require("dakota-portal/dist/components/Colors"));
var reorder = function (list, startIndex, endIndex) {
    var result = Array.from(list);
    var removed = result.splice(startIndex, 1)[0];
    result.splice(endIndex, 0, removed);
    return result;
};
var move = function (source, destination, droppableSource, droppableDestination) {
    var sourceClone = Array.from(source);
    var destClone = Array.from(destination);
    var removed = sourceClone.splice(droppableSource.index, 1)[0];
    destClone.splice(droppableDestination.index, 0, removed);
    var result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};
var getItemStyle = function (isDragging, draggableStyle) { return (__assign({ 
    // some basic styles to make the items look a bit nicer
    userSelect: "none", padding: 1, margin: "0 0 0 0", 
    // change background colour if dragging
    background: isDragging ? Colors_1.default.pattensBlue : null }, draggableStyle)); };
exports.getListStyle = function (isDraggingOver) { return ({
    background: isDraggingOver ? Colors_1.default.snow : null
}); };
exports.default = {
    reorder: reorder,
    move: move,
    getItemStyle: getItemStyle,
    getListStyle: exports.getListStyle
};
//# sourceMappingURL=DnD.js.map