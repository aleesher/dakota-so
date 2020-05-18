import React from "react";
import { useIsDragging } from "../../../hooks";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { DraggableOrder } from "./DraggableOrder";
import { SelectedOrderWrapper } from "./styles";

interface IProps {
  workOrder: CalendarOrder;
}

const SelectedOrder: React.FC<IProps> = ({ workOrder }) => {
  const isDragging = useIsDragging(workOrder.code);

  return (
    <SelectedOrderWrapper
      start={workOrder.start}
      width={workOrder.width}
      style={{
        opacity: isDragging ? 0 : 1
      }}
    >
      <DraggableOrder workOrder={workOrder} />
    </SelectedOrderWrapper>
  );
};

export default SelectedOrder;
