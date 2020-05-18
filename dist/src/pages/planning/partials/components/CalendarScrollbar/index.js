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
var constants_1 = require("../../../constants");
var provider_1 = require("../../../provider");
var NextIcon_1 = __importDefault(require("../../icons/NextIcon"));
var PrevIcon_1 = __importDefault(require("../../icons/PrevIcon"));
var CalendarViewDate_1 = __importDefault(require("./CalendarViewDate"));
var styles_1 = require("./styles");
var CalendarScrollbar = function (_a) {
    var viewDate = _a.viewDate, onChange = _a.onChange;
    var _b = provider_1.useSettingsState(), startDate = _b.startDate, endDate = _b.endDate, timeUnit = _b.timeUnit, messageCenter = _b.messageCenter;
    var pageWidth = provider_1.usePageState().pageWidth;
    var scrollWidth = react_1.useMemo(function () {
        var width = pageWidth - constants_1.LIST_WIDTH - constants_1.CALENDAR_DATE_WIDTH - constants_1.SCROLL_BUTTONS_WIDTH;
        if (messageCenter.isPinned) {
            width -= constants_1.MESSAGES_MENU_WIDTH;
        }
        return width < constants_1.SCROLL_WIDTH ? width : constants_1.SCROLL_WIDTH;
    }, [pageWidth, messageCenter.isPinned]);
    var total = endDate.diff(startDate, timeUnit) + 1;
    var position = viewDate.diff(startDate, timeUnit);
    var curWidth = scrollWidth / total;
    var curMargin = curWidth * position;
    var handleClickNext = function () {
        if (moment_1.default(viewDate).startOf(timeUnit) < moment_1.default(endDate).startOf(timeUnit)) {
            var nextDate = moment_1.default(viewDate);
            nextDate.add(1, timeUnit);
            onChange(nextDate);
        }
    };
    var handleClickPrev = function () {
        if (moment_1.default(viewDate).startOf(timeUnit) > moment_1.default(startDate).startOf(timeUnit)) {
            var prevDate = moment_1.default(viewDate);
            prevDate.subtract(1, timeUnit);
            onChange(prevDate);
        }
    };
    return (react_1.default.createElement(styles_1.CalendarScrollbarWrapper, null,
        react_1.default.createElement(CalendarViewDate_1.default, { viewDate: viewDate }),
        react_1.default.createElement(styles_1.CalendarScroll, { width: scrollWidth },
            react_1.default.createElement(styles_1.CurrentDay, { width: curWidth, marginLeft: curMargin })),
        react_1.default.createElement(styles_1.CalendarScrollButtons, null,
            react_1.default.createElement("div", { onClick: handleClickPrev },
                react_1.default.createElement(PrevIcon_1.default, null)),
            react_1.default.createElement("div", { onClick: handleClickNext },
                react_1.default.createElement(NextIcon_1.default, null)))));
};
exports.default = CalendarScrollbar;
//# sourceMappingURL=index.js.map