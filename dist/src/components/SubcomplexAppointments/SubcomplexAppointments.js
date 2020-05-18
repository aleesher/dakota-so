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
var moment_1 = __importDefault(require("moment"));
var components_1 = require("./../../components");
var Appointment_1 = __importDefault(require("./Appointment"));
var AppointmentAdder_1 = __importDefault(require("./AppointmentAdder"));
var styles_1 = require("./styles");
var helpers_1 = require("./helpers");
var SubcomplexAppointments = function (_a) {
    var meta = _a.meta, sComplexes = _a.subcomplexes, onQueryChange = _a.onQueryChange;
    var _b = react_1.default.useState(sComplexes), subComplexes = _b[0], setSubComplexes = _b[1];
    var handleAddAppointment = function (subComplexId, appointment) {
        var updatedSubComplexes = subComplexes.map(function (sComplex) {
            return sComplex.id !== subComplexId
                ? sComplex
                : __assign(__assign({}, sComplex), { data: __spreadArrays(sComplex.data, [appointment]) });
        });
        setSubComplexes(updatedSubComplexes);
    };
    var handleOrderDateChange = function (subcomplexId, orderDate, newOrderDate) {
        var updatedSubComplexes = subComplexes.map(function (sComplex) {
            return sComplex.id !== subcomplexId
                ? sComplex
                : __assign(__assign({}, sComplex), { data: sComplex.data.map(function (appointment) {
                        return appointment.orderDate !== orderDate
                            ? appointment
                            : __assign(__assign({}, appointment), { orderDate: newOrderDate });
                    }) });
        });
        setSubComplexes(updatedSubComplexes);
    };
    var months = helpers_1.getMonths();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.Container, null,
            react_1.default.createElement(styles_1.Table, null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement(styles_1.Th, null,
                        "Sub-complexen",
                        react_1.default.createElement(components_1.SubcomplexMenu, { title: "Open menu", actions: [{ label: "action", onClick: function () { return null; } }] })),
                    months.map(function (month) { return (react_1.default.createElement(styles_1.Th, null,
                        month.format("MMM").slice(0, -1),
                        react_1.default.createElement(components_1.SubcomplexMenu, { title: "Open menu", actions: [{ label: "action", onClick: function () { return null; } }] }))); })),
                react_1.default.createElement("tbody", null, subComplexes.map(function (_a) {
                    var id = _a.id, code = _a.code, data = _a.data;
                    return (react_1.default.createElement("tr", { key: id },
                        react_1.default.createElement(styles_1.Td, { style: { width: "16%" } },
                            code,
                            react_1.default.createElement(components_1.SubcomplexMenu, { title: "Open menu", actions: [{ label: "action", onClick: function () { return null; } }] })),
                        months.map(function (month) {
                            var appointment = data.find(function (_a) {
                                var orderDate = _a.orderDate;
                                return moment_1.default(orderDate).format("MMM") === month.format("MMM");
                            });
                            return (react_1.default.createElement(styles_1.Td, { key: month.format("MMMM"), "data-date": month.format("DD-MM-YYYY") }, !!appointment ? (react_1.default.createElement(Appointment_1.default, __assign({}, appointment, { onChangeOrderDate: function (newOrderDate) {
                                    return handleOrderDateChange(id, appointment.orderDate, newOrderDate);
                                } }))) : (react_1.default.createElement(AppointmentAdder_1.default, { orderDate: month.toDate(), onSubmit: function (appointment) {
                                    return handleAddAppointment(id, appointment);
                                } }))));
                        })));
                })))),
        react_1.default.createElement(styles_1.StatusesDescription, null, "IO = Inspectie & Onderhoud, O = Onderhoud, N = Nulmeting, I = Inspectie, IV = Inspectie Valbeveiligin")));
};
exports.default = SubcomplexAppointments;
//# sourceMappingURL=SubcomplexAppointments.js.map