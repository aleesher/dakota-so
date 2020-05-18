import { immerable } from "immer";
import CalendarOrder from "./CalendarOrder";

export default class OrderCollection {
  [immerable] = true;

  private orders: CalendarOrder[];

  constructor(orders: CalendarOrder[]) {
    this[immerable] = true;
    this.orders = orders;
  }

  getLength(): number {
    return this.orders.length;
  }

  all(): CalendarOrder[] {
    return this.orders;
  }

  get(code: string): CalendarOrder {
    return this.orders.find(o => o.code === code);
  }

  filtered(cb: (o: CalendarOrder) => boolean): CalendarOrder[] {
    return this.orders.filter(cb);
  }

  reverse() {
    this.orders.reverse();
  }

  add(order: CalendarOrder) {
    this.orders.push(order);
  }

  remove(code: string) {
    this.orders = this.orders.filter(o => o.code !== code);
  }

  lockOrder(ids: string[], isLocked: boolean) {
    this.orders = this.orders.map(o =>
      ids.includes(o.id) ? { ...o, isLocked } : o
    ) as CalendarOrder[];
  }
}

OrderCollection[immerable] = true;
