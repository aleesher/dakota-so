import React from "react";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { DraggableOrder } from "../../DayOrder/DraggableOrder";
import { SimpleStackOrderWrapper } from "../styles";

interface IProps {
  workOrder: CalendarOrder;
  top: number;
}

const SimpleStackOrder: React.FC<IProps> = ({ workOrder, top }) => {
  return (
    <SimpleStackOrderWrapper start={0} width={workOrder.width} top={top}>
      <DraggableOrder workOrder={workOrder} />
    </SimpleStackOrderWrapper>
  );
};

export default SimpleStackOrder;
