"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// tslint:disable:max-classes-per-file
var moment_1 = __importDefault(require("moment"));
var range_1 = __importDefault(require("lodash/range"));
var d3_scale_1 = require("d3-scale");
var constants_1 = require("../../constants");
var TimeScale = /** @class */ (function () {
    function TimeScale() {
    }
    TimeScale.prototype.init = function (viewDate, width) {
        this.start = moment_1.default(viewDate).startOf(this.timeUnit);
        this.end = moment_1.default(viewDate).endOf(this.timeUnit);
        this.scale = d3_scale_1.scaleLinear()
            .domain([this.start, this.end])
            .range([0, width]);
    };
    TimeScale.prototype.getTime = function (x) {
        return moment_1.default(this.scale.invert(x));
    };
    TimeScale.prototype.getX = function (date) {
        return this.scale(date);
    };
    TimeScale.prototype.getValues = function (from) {
        var _this = this;
        var start = from || this.start;
        return range_1.default(0, this.steps).map(function (v, i) {
            var date = moment_1.default(start).add(i, _this.stepUnit);
            return {
                x: _this.getX(date),
                label: date.format(_this.format)
            };
        });
    };
    return TimeScale;
}());
var DayTimeScale = /** @class */ (function (_super) {
    __extends(DayTimeScale, _super);
    function DayTimeScale(viewDate, width, showNonWorkingHours) {
        var _this = _super.call(this) || this;
        _this.timeUnit = "day";
        _this.steps = showNonWorkingHours ? 24 : 10;
        _this.stepUnit = "hour";
        _this.format = "HH:mm";
        _this.showNonWorkingHours = showNonWorkingHours;
        _this.init(viewDate, width);
        return _this;
    }
    DayTimeScale.prototype.init = function (viewDate, width) {
        if (this.showNonWorkingHours) {
            _super.prototype.init.call(this, viewDate, width);
        }
        else {
            this.start = moment_1.default(viewDate)
                .hours(7)
                .minutes(30);
            this.end = moment_1.default(viewDate)
                .hours(17)
                .minutes(30);
            this.scale = d3_scale_1.scaleLinear()
                .domain([this.start, this.end])
                .range([0, width]);
        }
        this.defaultOrderWidth = this.getX(moment_1.default(this.start).add(constants_1.DEFAULT_WORK_ORDER_DURATION, "hours"));
    };
    DayTimeScale.prototype.getValues = function () {
        if (this.showNonWorkingHours) {
            return _super.prototype.getValues.call(this);
        }
        var from = moment_1.default(this.start).add(30, "minutes");
        return __spreadArrays([
            {
                x: this.getX(this.start),
                label: this.start.format(this.format)
            }
        ], _super.prototype.getValues.call(this, from));
    };
    return DayTimeScale;
}(TimeScale));
var WeekTimeScale = /** @class */ (function (_super) {
    __extends(WeekTimeScale, _super);
    function WeekTimeScale(viewDate, width) {
        var _this = _super.call(this) || this;
        _this.timeUnit = "week";
        _this.steps = 7;
        _this.stepUnit = "day";
        _this.format = "dddd";
        _this.init(viewDate, width);
        return _this;
    }
    return WeekTimeScale;
}(TimeScale));
var MonthTimeScale = /** @class */ (function (_super) {
    __extends(MonthTimeScale, _super);
    function MonthTimeScale(viewDate, width) {
        var _this = _super.call(this) || this;
        _this.timeUnit = "month";
        _this.format = "wo";
        _this.init(viewDate, width);
        return _this;
    }
    MonthTimeScale.prototype.getValues = function () {
        var from = moment_1.default(this.start);
        var curWeek = from.week();
        var values = [];
        // if it is first day of week
        if (from.day() === 0) {
            values.push({
                x: this.getX(from),
                label: from.format(this.format)
            });
        }
        while (from.isBefore(this.end)) {
            from.add(1, "day");
            if (from.week() > curWeek) {
                values.push({
                    x: this.getX(from),
                    label: from.format(this.format)
                });
                curWeek = from.week();
            }
        }
        return values;
    };
    return MonthTimeScale;
}(TimeScale));
var YearTimeScale = /** @class */ (function (_super) {
    __extends(YearTimeScale, _super);
    function YearTimeScale(viewDate, width) {
        var _this = _super.call(this) || this;
        _this.timeUnit = "year";
        _this.steps = 12;
        _this.stepUnit = "month";
        _this.format = "MMM";
        _this.init(viewDate, width);
        return _this;
    }
    return YearTimeScale;
}(TimeScale));
function buildTimeScale(viewDate, unit, width, showNonWorkingHours) {
    if (width === void 0) { width = constants_1.PAGE_WIDTH - constants_1.LIST_WIDTH; }
    if (showNonWorkingHours === void 0) { showNonWorkingHours = false; }
    switch (unit) {
        case "day":
            return new DayTimeScale(viewDate, width, showNonWorkingHours);
        case "week":
            return new WeekTimeScale(viewDate, width);
        case "month":
            return new MonthTimeScale(viewDate, width);
        case "year":
            return new YearTimeScale(viewDate, width);
    }
}
exports.buildTimeScale = buildTimeScale;
//# sourceMappingURL=TimeScale.js.map