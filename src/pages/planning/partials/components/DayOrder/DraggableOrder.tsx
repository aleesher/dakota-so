import React from "react";
import { useDraggableOrder } from "../../../hooks";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { DraggableOrderWrapper } from "./styles";
import DayOrderContent from "./DayOrderContent";

interface IProps {
  workOrder: CalendarOrder;
}

export const DraggableOrder: React.FC<IProps> = ({ workOrder }) => {
  const [dragRef] = useDraggableOrder(workOrder);

  return (
    <DraggableOrderWrapper ref={dragRef}>
      <DayOrderContent workOrder={workOrder} />
    </DraggableOrderWrapper>
  );
};
