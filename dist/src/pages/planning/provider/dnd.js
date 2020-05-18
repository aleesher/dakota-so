"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HOVER_TYPE;
(function (HOVER_TYPE) {
    HOVER_TYPE["EMPLOYEE"] = "employee";
    HOVER_TYPE["EMPLOYEE_ORDER"] = "employee-order";
    HOVER_TYPE["UNASSIGNED_ORDER"] = "unassigned-order";
    HOVER_TYPE["STACK"] = "stack";
})(HOVER_TYPE = exports.HOVER_TYPE || (exports.HOVER_TYPE = {}));
// moved this state to separate file to avoid unnecessary rerenders
exports.HoverObject = {
    type: "",
    code: "",
    end: 0
};
//# sourceMappingURL=dnd.js.map