import { immerable } from "immer";
import _flatten from "lodash/flatten";
import {
  CALENDAR_LINE_HEIGHT,
  CALENDAR_ORDER_TYPE,
  ORDER_HEIGHT,
  ORDER_PREVIEW_OFFSET
} from "../../../constants";
import { TEmployee } from "../../../types";
import CalendarOrder from "./CalendarOrder";
import OrderStack from "./OrderStack";

export default class CalendarEmployee implements TEmployee {
  [immerable] = true;

  // model fields
  id: string;
  photo: string;
  code: string;
  resource: string;
  firstName: string;
  lastName: string;
  costCenterCode: string;

  // frontend fields
  lineHeight: number;
  private orders: CalendarOrder[];
  private stacks: OrderStack[];

  constructor(employee: TEmployee) {
    this[immerable] = true;
    Object.assign(this, employee);
    this.stacks = [];
    this.orders = [];
  }

  recalculateLineHeight(collapse: boolean) {
    const maxStackLength =
      this.stacks.length > 0 // if employee has stacked orders
        ? Math.max(...this.stacks.map(s => s.getLength()))
        : 1;

    if (collapse) {
      this.lineHeight =
        8 + ORDER_HEIGHT + (maxStackLength - 1) * ORDER_PREVIEW_OFFSET + 8;
    } else {
      this.lineHeight = maxStackLength * CALENDAR_LINE_HEIGHT;
    }
  }

  setOrders(orders: CalendarOrder[]) {
    this.orders = [];
    orders.forEach(order => {
      this.addOrder(order);
    });
  }

  setStacks(stacks: OrderStack[]) {
    this.stacks = [];
    stacks.forEach(stack => {
      this.addStack(stack);
    });
  }

  /**
   * this method returns single orders only
   */
  getOrders(): CalendarOrder[] {
    return this.orders;
  }

  /**
   * this method returns order stacks only
   */
  getStacks(): OrderStack[] {
    return this.stacks;
  }

  /**
   * this method returns all orders (single and stack orders)
   */
  getAllOrders(): CalendarOrder[] {
    const stackOrders = _flatten(this.stacks.map(s => s.getOrders()));
    return [...this.orders, ...stackOrders];
  }

  // actions with orders

  getOrder(orderCode: string): CalendarOrder {
    return this.orders.find(o => o.code === orderCode);
  }

  addOrder(order: CalendarOrder) {
    order.type = CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER;
    order.soEmployeeCode = this.resource;
    order.costCenter = this.costCenterCode;
    order.employeeName = this.firstName;
    this.orders.push(order);
  }

  removeOrder(orderCode: string) {
    const order = this.orders.find(o => o.code === orderCode);
    this.orders = this.orders.filter(o => o.code !== orderCode);
    return order;
  }

  // actions with stacks

  addStack(stack: OrderStack) {
    stack.employeeResourceCode = this.resource;
    stack.costCenter = this.costCenterCode;
    stack.employeeName = this.firstName;
    this.stacks.push(stack);
    // if stack has orders
    stack.getOrders().forEach(o => {
      o.soEmployeeCode = this.resource;
      o.costCenter = this.costCenterCode;
      o.employeeName = this.firstName;
    });
  }

  getStack(stackId: string): OrderStack {
    return this.stacks.find(s => s.id === stackId);
  }

  closeStack(stack: OrderStack) {
    const order = stack.getOrders()[0];
    order.stackId = null;
    this.addOrder(order);
    this.stacks = this.stacks.filter(s => s.id !== stack.id);
  }

  removeStack(stackId: string): OrderStack {
    const stack = this.stacks.find(s => s.id === stackId);
    this.stacks = this.stacks.filter(s => s.id !== stackId);
    return stack;
  }
}

CalendarEmployee[immerable] = true;
