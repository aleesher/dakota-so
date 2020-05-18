"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = require("immer");
var get_1 = __importDefault(require("lodash/get"));
var moment_1 = __importDefault(require("moment"));
var constants_1 = require("../../../constants");
var helpers_1 = require("../../../helpers");
function getMoment(data) {
    if (data === null) {
        return null;
    }
    return moment_1.default(data);
}
var CalendarOrder = /** @class */ (function () {
    function CalendarOrder(data, type) {
        this[_a] = true;
        this[immer_1.immerable] = true;
        Object.assign(this, data);
        this.type = type;
        this.startTime = getMoment(data.startTime);
        this.startDate = getMoment(get_1.default(data, "starDate"));
        this.endTime = getMoment(data.endTime);
        this.endDate = getMoment(data.endDate);
        this.isWithTime =
            this.startTime !== null &&
                this.startDate !== null &&
                this.endTime !== null &&
                this.endDate !== null;
        this.isSaving = false;
        this.error = "";
        this.start = 0;
        this.width = 0;
    }
    CalendarOrder.prototype.recalculateStartAndWidth = function (timeScale) {
        if (this.isWithTime) {
            this.start = timeScale.getX(this.startTime);
            this.calculateWidth(timeScale);
        }
        else {
            this.width = timeScale.defaultOrderWidth;
        }
    };
    CalendarOrder.prototype.useStartTimeOfStack = function (stack) {
        this.start = stack.start;
        this.startTime = stack.startTime;
        this.startDate = moment_1.default(this.startTime).startOf("day");
    };
    CalendarOrder.prototype.setNewStart = function (timeScale, newStart) {
        var startTime = timeScale.getTime(newStart);
        this.startTime = helpers_1.roundUpToQuarterHour(startTime);
        this.start = timeScale.getX(this.startTime);
        this.startDate = moment_1.default(this.startTime).startOf("day");
    };
    CalendarOrder.prototype.recalculateEndTime = function (timeScale) {
        this.endTime = timeScale.getTime(this.start + this.width);
        this.endDate = moment_1.default(this.endTime).startOf("day");
    };
    CalendarOrder.prototype.calculateWidth = function (timeScale) {
        var end = timeScale.getX(this.endTime);
        this.width = end - this.start;
    };
    CalendarOrder.prototype.updateResizedOrder = function (timeScale, newStart, newEnd) {
        // if start time was changed
        if (this.start !== newStart) {
            this.start = newStart;
            this.startTime = timeScale.getTime(newStart);
            this.startDate = moment_1.default(this.startTime).startOf("day");
        }
        else {
            this.endTime = timeScale.getTime(newEnd);
            this.endDate = moment_1.default(this.endTime).startOf("day");
        }
        this.width = newEnd - newStart;
        this.isSaving = true;
    };
    CalendarOrder.prototype.prepareData = function () {
        var data = {
            code: this.code,
            startTime: this.startTime,
            starDate: this.startDate,
            endTime: this.endTime,
            endDate: this.endDate
        };
        if (this.type !== constants_1.CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER) {
            data.soEmployeeCode = this.soEmployeeCode;
        }
        return data;
    };
    return CalendarOrder;
}());
exports.default = CalendarOrder;
_a = immer_1.immerable;
CalendarOrder[immer_1.immerable] = true;
//# sourceMappingURL=CalendarOrder.js.map