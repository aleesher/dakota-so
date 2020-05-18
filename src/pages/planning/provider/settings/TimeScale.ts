// tslint:disable:max-classes-per-file
import moment, { Moment, unitOfTime } from "moment";
import _range from "lodash/range";
import { scaleLinear, ScaleLinear } from "d3-scale";
import {
  DEFAULT_WORK_ORDER_DURATION,
  LIST_WIDTH,
  PAGE_WIDTH
} from "../../constants";
import { ITimeScale, TScaleValue, TTimeUnit } from "../../types";

abstract class TimeScale implements ITimeScale {
  protected abstract timeUnit: TTimeUnit;

  protected start: Moment;
  protected end: Moment;
  protected scale: ScaleLinear<number, number>;
  protected steps: number;
  protected stepUnit: unitOfTime.Base;
  protected format: string;

  protected init(viewDate: Moment, width: number) {
    this.start = moment(viewDate).startOf(this.timeUnit);
    this.end = moment(viewDate).endOf(this.timeUnit);
    this.scale = scaleLinear()
      .domain([this.start, this.end])
      .range([0, width]);
  }

  getTime(x: number): Moment {
    return moment(this.scale.invert(x));
  }

  getX(date: Moment): number {
    return this.scale(date);
  }

  getValues(from?: Moment): TScaleValue[] {
    const start = from || this.start;
    return _range(0, this.steps).map((v, i) => {
      const date = moment(start).add(i, this.stepUnit);
      return {
        x: this.getX(date),
        label: date.format(this.format)
      };
    });
  }
}

class DayTimeScale extends TimeScale {
  timeUnit: TTimeUnit = "day";
  showNonWorkingHours: boolean;
  defaultOrderWidth: number;

  constructor(viewDate: Moment, width: number, showNonWorkingHours: boolean) {
    super();
    this.steps = showNonWorkingHours ? 24 : 10;
    this.stepUnit = "hour";
    this.format = "HH:mm";
    this.showNonWorkingHours = showNonWorkingHours;
    this.init(viewDate, width);
  }

  init(viewDate: Moment, width: number) {
    if (this.showNonWorkingHours) {
      super.init(viewDate, width);
    } else {
      this.start = moment(viewDate)
        .hours(7)
        .minutes(30);
      this.end = moment(viewDate)
        .hours(17)
        .minutes(30);
      this.scale = scaleLinear()
        .domain([this.start, this.end])
        .range([0, width]);
    }

    this.defaultOrderWidth = this.getX(
      moment(this.start).add(DEFAULT_WORK_ORDER_DURATION, "hours")
    );
  }

  getValues(): TScaleValue[] {
    if (this.showNonWorkingHours) {
      return super.getValues();
    }

    const from = moment(this.start).add(30, "minutes");
    return [
      {
        x: this.getX(this.start),
        label: this.start.format(this.format)
      },
      ...super.getValues(from)
    ];
  }
}

class WeekTimeScale extends TimeScale {
  timeUnit: TTimeUnit = "week";

  constructor(viewDate: Moment, width: number) {
    super();
    this.steps = 7;
    this.stepUnit = "day";
    this.format = "dddd";
    this.init(viewDate, width);
  }
}

class MonthTimeScale extends TimeScale {
  timeUnit: TTimeUnit = "month";

  constructor(viewDate: Moment, width: number) {
    super();
    this.format = "wo";
    this.init(viewDate, width);
  }

  getValues(): TScaleValue[] {
    const from = moment(this.start);
    let curWeek = from.week();
    const values = [];

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
  }
}

class YearTimeScale extends TimeScale {
  timeUnit: TTimeUnit = "year";

  constructor(viewDate: Moment, width: number) {
    super();
    this.steps = 12;
    this.stepUnit = "month";
    this.format = "MMM";
    this.init(viewDate, width);
  }
}

export function buildTimeScale(
  viewDate: Moment,
  unit: TTimeUnit,
  width: number = PAGE_WIDTH - LIST_WIDTH,
  showNonWorkingHours = false
): ITimeScale {
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
