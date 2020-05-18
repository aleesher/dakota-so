import React from "react";
import { CALENDAR_ORDER_TYPE } from "../../../constants";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { DisabledOrderWrapper } from "./styles";
import OrderData from "./OrderData";

interface IProps {
  workOrder: CalendarOrder;
}

const SimpleOrder: React.FC<IProps> = ({ workOrder }) => {
  return (
    <DisabledOrderWrapper start={workOrder.start} width={workOrder.width}>
      <OrderData workOrder={workOrder} />
    </DisabledOrderWrapper>
  );
};

export default SimpleOrder;
