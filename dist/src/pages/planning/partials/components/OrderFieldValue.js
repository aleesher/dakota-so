"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var moment_1 = __importDefault(require("moment"));
var OrderFieldValue = function (_a) {
    var type = _a.type, value = _a.value;
    switch (type) {
        case "DateTime": {
            return moment_1.default.isMoment(value) && value.isValid()
                ? value.format("YYYY.MM.DD HH:mm")
                : "-";
        }
        case "Date": {
            return moment_1.default.isMoment(value) && value.isValid()
                ? value.format("YYYY.MM.DD")
                : "-";
        }
        case "Time": {
            return moment_1.default.isMoment(value) && value.isValid()
                ? value.format("HH:mm")
                : "-";
        }
    }
    return value === null || typeof value === "undefined" ? "-" : value;
};
exports.default = react_1.memo(OrderFieldValue);
//# sourceMappingURL=OrderFieldValue.js.map