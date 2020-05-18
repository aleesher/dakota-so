"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var column_1 = __importDefault(require("./column"));
var menu_1 = require("./menu");
var tableHelper = {
    createColumn: column_1.default,
    createActionMenuItems: menu_1.createActionMenuItems
};
exports.default = tableHelper;
//# sourceMappingURL=index.js.map