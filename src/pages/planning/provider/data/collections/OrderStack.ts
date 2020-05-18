import { immerable } from "immer";
import _maxBy from "lodash/maxBy";
import moment, { Moment } from "moment";
import { CALENDAR_ORDER_TYPE } from "../../../constants";
import { ITimeScale, TUpdateOrderData } from "../../../types";
import CalendarOrder from "./CalendarOrder";

export const STACK_TIME_FORMAT = "YYYY.MM.DD.HH.mm";

export default class OrderStack {
  [immerable] = true;

  id: string;
  isStack: boolean;

  employeeResourceCode: string;
  costCenter: string;
  employeeName: string;

  startTime: Moment;
  start: number;
  width: number;

  private orders: CalendarOrder[];
  topOrderCode: string;

  constructor(startTime: Moment, start: number) {
    this[immerable] = true;

    this.isStack = true;
    this.id = startTime.format(STACK_TIME_FORMAT);

    this.startTime = startTime;
    this.start = start;
    this.width = 0;

    this.orders = [];
  }

  static fromOrders(orders: CalendarOrder[]) {
    const firstOrder = orders[0];
    const stack = new OrderStack(firstOrder.startTime, firstOrder.start);
    stack.setOrders(orders);
    stack.width = Math.max(...orders.map(o => o.width));
    return stack;
  }

  private setOrders(orders: CalendarOrder[]) {
    orders.forEach(o => {
      o.type = CALENDAR_ORDER_TYPE.STACK_ORDER;
      o.stackId = this.id;
      o.soEmployeeCode = this.employeeResourceCode;
      o.costCenter = this.costCenter;
      o.employeeName = this.employeeName;
      this.width = Math.max(this.width, o.width);
    });
    this.orders = orders;
  }

  setNewStart(timeScale: ITimeScale, newStart: number) {
    this.orders.forEach(o => {
      o.setNewStart(timeScale, newStart);
      o.recalculateEndTime(timeScale);
    });
    this.startTime = this.orders[0].startTime;
    this.start = this.orders[0].start;
  }

  getLength(): number {
    return this.orders.length;
  }

  getOrders(): CalendarOrder[] {
    return this.orders;
  }

  getOrder(code: string): CalendarOrder {
    return this.orders.find(o => o.code === code);
  }

  resizeOrder(
    timeScale: ITimeScale,
    code: string,
    newStart: number,
    newEnd: number
  ) {
    const order = this.orders.find(o => o.code === code);
    order.endTime = timeScale.getTime(newEnd);
    order.endDate = moment(order.endTime).startOf("day");
    order.width = newEnd - newStart;
    order.isSaving = true;

    this.width = Math.max(this.width, order.width);
  }

  resizeAllOrders(
    timeScale: ITimeScale,
    code: string,
    newStart: number,
    newEnd: number
  ) {
    const endTime = timeScale.getTime(newEnd);
    const endDate = moment(endTime).startOf("day");
    this.orders.forEach(o => {
      o.endTime = endTime;
      o.endDate = endDate;
      o.width = newEnd - newStart;
      o.calculateWidth(timeScale);
    });

    this.getTopOrder().isSaving = true;
  }

  getTopOrder(): CalendarOrder {
    // top order is last order of stack;
    return this.orders[this.orders.length - 1];
  }

  removeTopOrder() {
    return this.orders.pop();
  }

  getBottomOrders(): CalendarOrder[] {
    return this.orders.slice(0, -1);
  }

  recalculateStartAndWidth(timeScale: ITimeScale) {
    this.orders.forEach(o => {
      o.recalculateStartAndWidth(timeScale);
    });

    // all orders in stack have the same start position
    this.start = this.orders[0].start;
    const orderWithMaxWidth = _maxBy(this.orders, "width");
    this.width = orderWithMaxWidth.width;
  }

  addOrder(order: CalendarOrder) {
    order.type = CALENDAR_ORDER_TYPE.STACK_ORDER;
    order.stackId = this.id;
    order.soEmployeeCode = this.employeeResourceCode;
    order.costCenter = this.costCenter;
    order.employeeName = this.employeeName;

    order.useStartTimeOfStack(this);

    this.width = Math.max(this.width, order.width);

    this.orders.push(order);
  }

  setTopOrder(orderCode: string) {
    if (this.topOrderCode !== orderCode) {
      const order = this.orders.find(o => o.code === orderCode);
      this.orders = this.orders.filter(o => o.code !== orderCode);
      this.orders.push(order);
      this.topOrderCode = orderCode;
    }
  }

  prepareData(): TUpdateOrderData[] {
    return this.orders.map(o => o.prepareData());
  }
}

OrderStack[immerable] = true;
