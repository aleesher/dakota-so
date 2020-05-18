"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
exports.getMonths = function () {
    return Array(12)
        .fill("")
        .map(function (_, i) {
        return moment_1.default(new Date())
            .startOf("year")
            .add(i, "month");
    });
};
//# sourceMappingURL=helpers.js.map