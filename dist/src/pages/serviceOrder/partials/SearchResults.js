"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reduce_1 = __importDefault(require("lodash/reduce"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var styles_1 = require("../styles");
exports.default = (function (_a) {
    var onSelectResult = _a.onSelectResult, _b = _a.results, results = _b === void 0 ? [] : _b, values = _a.values;
    if (isEmpty_1.default(results)) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    var formatAddress = function (_a) {
        var id = _a.id, street = _a.street, rest = __rest(_a, ["id", "street"]);
        return reduce_1.default(rest, function (acc, val, key) {
            if (val) {
                return acc + ", " + val;
            }
            return acc;
        }, street);
    };
    return (react_1.default.createElement(styles_1.SearchResultWrapper, { xs: 10, item: true },
        react_1.default.createElement(styles_1.ResultTopArea, null,
            react_1.default.createElement(styles_1.SearchResultTitle, null, "Resultaten"),
            react_1.default.createElement(styles_1.SearchResultTitle, { type: "minor" },
                "Aantal resultaten: ",
                results.length)),
        react_1.default.createElement(styles_1.ResultBottomArea, null, results.map(function (address) { return (react_1.default.createElement(styles_1.SearchResult, { key: address.id, onClick: function () { return onSelectResult({ address: address, values: values }); } },
            react_1.default.createElement(styles_1.LocationIcon, null),
            react_1.default.createElement(styles_1.ResultText, null, formatAddress(address)))); }))));
});
//# sourceMappingURL=SearchResults.js.map