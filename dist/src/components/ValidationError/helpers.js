"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValidationErrorText = function (text, field) {
    return text
        ? field + " " + text
            .split(" ")
            .slice(1)
            .join(" ")
        : "";
};
//# sourceMappingURL=helpers.js.map