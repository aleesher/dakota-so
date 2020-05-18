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
        name: "serviceType",
        label: "Service Type",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "soType",
        label: "Service Order Type",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "globalID",
        label: "Global ID",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "soNumber",
        label: "Service Order Number",
        onChange: function () { return null; },
        checked: false
    },
    // card
    {
        name: "dakenMetGarantie",
        label: "Daken met garantie",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "lekkagesLaatse3maanden",
        label: "Lekkages laatse 3 maanden",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "lekkagesHistorie",
        label: "Lekkages historie",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "subComplexValue",
        label: "Sub-complex Value",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "dakenValue",
        label: "Daken Value",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "activiteitenValue",
        label: "Activiteiten Value",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "geregistreerdeUrenValue",
        label: "Geregistreerde uren Value",
        onChange: function () { return null; },
        checked: false
    },
    // next card
    {
        name: "postcode",
        label: "Postcode",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "Straatnaam",
        label: "straatnaam",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "plaats",
        label: "Plaats",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "huisnummer",
        label: "Huisnummer",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "klantNaam",
        label: "Klant Naam",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "klantNummer",
        label: "Klant Nummer",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "klantAdres",
        label: "Klant Address",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "klanttelefoonnummer",
        label: "Telefoonnummer",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "klantFacturen aan",
        label: "Klant Facturen aan",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "melder",
        label: "Melder",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "melderNAmes",
        label: "MelderNAmes",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "melderTelefoonnummer",
        label: "Melder Telefoonnummer",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "melderType",
        label: "Melder Type",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "melderEmailadres",
        label: "Melder E-mailadres",
        onChange: function () { return null; },
        checked: false
    },
    {
        name: "melderPrioriteit",
        label: "Prioriteit",
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
            } })); }), title: "Algemene informatie" }));
});
//# sourceMappingURL=Algemene.js.map