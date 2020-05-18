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
var react_1 = __importDefault(require("react"));
var BaseLayout_1 = __importDefault(require("./BaseLayout"));
var FIELDS = [
    {
        name: "werkorderNummer",
        label: "Werkorder nummer",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "dakenMetGarantie",
        label: "Daken met garantie",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "complex",
        label: "Complex",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "dakToegang",
        label: "Dak toegang",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "werkNemer",
        label: "Werknemer",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "datum",
        label: "Datum",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "tijd",
        label: "Tijd",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "doorloopTijd",
        label: "Doorlooptijd",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "verwachtAantalUur",
        label: "Verwacht aantal uur",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "werkordersTotaal",
        label: "Werkorders Totaal",
        onChange: function () { return null; },
        checked: false
    }
];
exports.default = (function (_a) {
    var promotedGroup = _a.promotedGroup, updatePromotedGroup = _a.updatePromotedGroup;
    return (react_1.default.createElement(BaseLayout_1.default, { fields: FIELDS.map(function (promoted) { return (__assign(__assign({}, promoted), { checked: promotedGroup.includes(promoted.name), onChange: function () {
                if (!promotedGroup.includes(promoted.name) &&
                    promotedGroup.length < 3) {
                    updatePromotedGroup(__spreadArrays(promotedGroup, [promoted.name]));
                }
                else {
                    updatePromotedGroup(__spreadArrays(promotedGroup.filter(function (e) { return e !== promoted.name; })));
                }
            } })); }), title: "Workorders" }));
});
//# sourceMappingURL=Workorder.js.map