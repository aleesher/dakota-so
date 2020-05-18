"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Done_1 = __importDefault(require("@material-ui/icons/Done"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var components_1 = require("dakota-portal/dist/components");
var styles_1 = require("./styles");
var DEFAULT_APPOINTMENT_INTERVAL = 2;
var AppointmentAdder = function (_a) {
    var orderDate = _a.orderDate, onSubmit = _a.onSubmit;
    var _b = react_1.default.useState(false), startedCreating = _b[0], setStartedCreating = _b[1];
    var _c = react_1.default.useState(), orderType = _c[0], setOrderType = _c[1];
    var _d = react_1.default.useState(DEFAULT_APPOINTMENT_INTERVAL), interval = _d[0], setInterval = _d[1];
    var handleCancel = function () {
        setInterval(0);
        setOrderType(undefined);
        setStartedCreating(false);
    };
    var handleSubmit = function () {
        onSubmit({
            interval: interval,
            orderDate: orderDate,
            orderType: orderType.value,
            status: "No_Appointment"
        });
    };
    var handleIntervalChange = function (str) {
        var value = str.replace(/\./, "");
        var data = !isNaN(parseInt(value, 10)) || value === "" ? value : interval;
        setInterval(data);
    };
    return (react_1.default.createElement(styles_1.Container, { startedCreating: startedCreating, onDoubleClick: function () { return setStartedCreating(true); } },
        react_1.default.createElement(styles_1.SelectWrapper, null,
            react_1.default.createElement(components_1.Select, { options: [
                    { label: "IO", value: "InspectionAndMaintenance" },
                    { label: "O", value: "Maintenance" },
                    { label: "N", value: "ZeroMeasurement" },
                    { label: "I", value: "Inspection" },
                    { label: "IV", value: "FallProtectionInspection" }
                ], value: orderType, onChange: setOrderType })),
        react_1.default.createElement(styles_1.IntervalLabel, null,
            "interval:",
            react_1.default.createElement(styles_1.Input, { value: interval, onChange: function (e) { return handleIntervalChange(e.target.value); } })),
        !!orderType && (react_1.default.createElement(styles_1.SubmitButton, { onClick: handleSubmit },
            react_1.default.createElement(Done_1.default, { fontSize: "inherit" }))),
        react_1.default.createElement(styles_1.CancelButton, { onClick: handleCancel },
            react_1.default.createElement(Close_1.default, { fontSize: "inherit" }))));
};
exports.default = AppointmentAdder;
//# sourceMappingURL=AppointmentAdder.js.map