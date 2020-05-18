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
var react_1 = __importDefault(require("react"));
var Pagination_1 = __importDefault(require("dakota-portal/dist/components/Pagination"));
var styles_1 = require("./styles");
var Pagination = function (props) { return (react_1.default.createElement(styles_1.PaginationWrapper, null,
    react_1.default.createElement(Pagination_1.default, __assign({}, props)))); };
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map