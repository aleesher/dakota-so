"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var urls_1 = require("./urls");
exports.urls = urls_1.default;
var authHelpers_1 = require("./authHelpers");
exports.authHelpers = authHelpers_1.default;
exports.CUSTOMER_EVENT = authHelpers_1.CUSTOMER_EVENT;
var DnD_1 = require("./DnD");
exports.DnD = DnD_1.default;
var notification_1 = require("./notification");
exports.notification = notification_1.default;
exports.formatDate = function (date, defaultValue) {
    if (defaultValue === void 0) { defaultValue = "-"; }
    return date ? moment_1.default(date).format("DD-MM-YYYY") : defaultValue;
};
exports.generateCode = function () {
    return (Math.random()
        .toString(36)
        .slice(2, 6)
        .toUpperCase() + (Math.random() * 10000000).toFixed());
};
exports.generateHouseLetters = function () {
    return __spreadArrays(Array(26)).map(function (_, i) {
        var letter = String.fromCharCode(i + 97).toUpperCase();
        return {
            value: letter,
            label: letter
        };
    });
};
//# sourceMappingURL=index.js.map