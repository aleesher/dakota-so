"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var moment_1 = __importDefault(require("moment"));
var page_1 = require("../../../provider/page");
var Schedule_1 = __importDefault(require("@material-ui/icons/Schedule"));
var DEADLINE_STATUSES = ["Open", "In_Process"];
var DeadlineIcon = function (_a) {
    var workOrder = _a.workOrder;
    var currentTime = page_1.usePageState().currentTime;
    var showDeadlineIcon = react_1.useMemo(function () {
        if (!workOrder.isWithTime) {
            return false;
        }
        if (!DEADLINE_STATUSES.includes(workOrder.soStatus)) {
            return false;
        }
        if (workOrder.endTime.format("YYYYMMDD") < moment_1.default().format("YYYYMMDD")) {
            return true;
        }
        var endHour = workOrder.endTime.hours();
        var endMinutes = workOrder.endTime.minutes();
        if (endHour < currentTime.hours) {
            return true;
        }
        if (endHour === currentTime.hours && endMinutes < currentTime.minutes) {
            return true;
        }
        return false;
    }, [workOrder, currentTime.minutes]);
    return showDeadlineIcon ? react_1.default.createElement(Schedule_1.default, null) : null;
};
exports.default = react_1.memo(DeadlineIcon);
//# sourceMappingURL=DeadlineIcon.js.map