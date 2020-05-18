import { immerable } from "immer";
import _get from "lodash/get";
import moment, { Moment } from "moment";
import { CALENDAR_ORDER_TYPE } from "../../../constants";
import { roundUpToQuarterHour } from "../../../helpers";
import {
  ITimeScale,
  TOrderStatus,
  TOrderType,
  TPriority,
  TUpdateOrderData,
  TWorkOrder
} from "../../../types";
import OrderStack from "./OrderStack";

function getMoment(data) {
  if (data === null) {
    return null;
  }
  return moment(data);
}

export default class CalendarOrder {
  [immerable] = true;

  // model fields
  id: string;
  code: string;
  soCode: string;
  soEmployeeCode: string;
  soStatus: TOrderStatus;
  soOrderType: TOrderType;
  soPriority: TPriority;
  startDate: Moment;
  startTime: Moment;
  endDate: Moment;
  endTime: Moment;
  description: string;
  isLocked: boolean;

  // frontend fields
  type: CALENDAR_ORDER_TYPE;
  stackId?: string;
  isSaving: boolean;
  error: string;
  isWithTime: boolean;
  start: number;
  width: number;
  costCenter?: string;
  employeeName?: string;

  constructor(data: TWorkOrder, type: CALENDAR_ORDER_TYPE) {
    this[immerable] = true;

    Object.assign(this, data);

    this.type = type;

    this.startTime = getMoment(data.startTime);
    this.startDate = getMoment(_get(data, "starDate"));
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

  recalculateStartAndWidth(timeScale: ITimeScale) {
    if (this.isWithTime) {
      this.start = timeScale.getX(this.startTime);
      this.calculateWidth(timeScale);
    } else {
      this.width = timeScale.defaultOrderWidth;
    }
  }

  useStartTimeOfStack(stack: OrderStack) {
    this.start = stack.start;
    this.startTime = stack.startTime;
    this.startDate = moment(this.startTime).startOf("day");
  }

  setNewStart(timeScale: ITimeScale, newStart: number) {
    const startTime = timeScale.getTime(newStart);
    this.startTime = roundUpToQuarterHour(startTime);
    this.start = timeScale.getX(this.startTime);
    this.startDate = moment(this.startTime).startOf("day");
  }

  recalculateEndTime(timeScale: ITimeScale) {
    this.endTime = timeScale.getTime(this.start + this.width);
    this.endDate = moment(this.endTime).startOf("day");
  }

  calculateWidth(timeScale: ITimeScale) {
    const end = timeScale.getX(this.endTime);
    this.width = end - this.start;
  }

  updateResizedOrder(timeScale: ITimeScale, newStart: number, newEnd: number) {
    // if start time was changed
    if (this.start !== newStart) {
      this.start = newStart;
      this.startTime = timeScale.getTime(newStart);
      this.startDate = moment(this.startTime).startOf("day");
    } else {
      this.endTime = timeScale.getTime(newEnd);
      this.endDate = moment(this.endTime).startOf("day");
    }

    this.width = newEnd - newStart;

    this.isSaving = true;
  }

  prepareData(): TUpdateOrderData {
    const data: TUpdateOrderData = {
      code: this.code,
      startTime: this.startTime,
      starDate: this.startDate,
      endTime: this.endTime,
      endDate: this.endDate
    };

    if (this.type !== CALENDAR_ORDER_TYPE.UNASSIGNED_ORDER) {
      data.soEmployeeCode = this.soEmployeeCode;
    }

    return data;
  }
}

CalendarOrder[immerable] = true;
