import React from "react";
import { useIsDragging } from "../../../../hooks";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { DraggableOrder } from "../../DayOrder/DraggableOrder";
import { SelectedStackOrderWrapper } from "../styles";

interface IProps {
  workOrder: CalendarOrder;
  top: number;
}

const SelectedStackOrder: React.FC<IProps> = ({ workOrder, top }) => {
  const isDragging = useIsDragging(workOrder.code);

  return (
    <SelectedStackOrderWrapper
      start={0}
      top={top}
      width={workOrder.width}
      style={{
        opacity: isDragging ? 0 : 1
      }}
    >
      <DraggableOrder workOrder={workOrder} />
    </SelectedStackOrderWrapper>
  );
};

export default SelectedStackOrder;
