import React, { memo } from "react";
import { ORDER_STYLES } from "../../../constants";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import OrderData from "../DayOrder/OrderData";

interface IProps {
  order: CalendarOrder;
  color: string;
  top?: number;
}

const OrderPreview: React.FC<IProps> = ({ order, color, top = 0 }) => (
  <div
    style={{
      ...ORDER_STYLES,
      width: order.width,
      top,
      borderColor: color
    }}
  >
    <OrderData workOrder={order} />
  </div>
);

export default memo(OrderPreview);
