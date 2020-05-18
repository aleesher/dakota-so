"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var settings_1 = require("../../../provider/settings");
var styles_1 = require("./styles");
var CalendarViewDate = function (_a) {
    var viewDate = _a.viewDate;
    var timeUnit = settings_1.useSettingsState().timeUnit;
    var date = react_1.useMemo(function () {
        switch (timeUnit) {
            case "day":
                return viewDate.format("dddd D MMMM");
            case "week":
                return viewDate.format("wo YYYY");
            case "month":
                return viewDate.format("MMMM YYYY");
            case "year":
                return viewDate.format("YYYY");
        }
    }, [timeUnit, viewDate]);
    return react_1.default.createElement(styles_1.CalendarViewDateWrapper, null, date);
};
exports.default = CalendarViewDate;
//# sourceMappingURL=CalendarViewDate.js.map