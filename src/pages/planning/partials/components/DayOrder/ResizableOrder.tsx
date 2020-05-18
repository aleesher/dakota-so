import React from "react";
import { ORDER_HEIGHT } from "../../../constants";
import { useIsDragging } from "../../../hooks";
import { useDataDispatch } from "../../../provider/data";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import ResizableComponent from "../ResizableComponent";
import { DraggableOrder } from "./DraggableOrder";
import { ResizableOrderWrapper } from "./styles";

interface IProps {
  workOrder: CalendarOrder;
}

const ResizableOrder: React.FC<IProps> = ({ workOrder }) => {
  const { onResizeOrder } = useDataDispatch();
  const isDragging = useIsDragging(workOrder.code);

  const handleResize = (newStart: number, newEnd: number) => {
    onResizeOrder(workOrder.soEmployeeCode, workOrder.code, newStart, newEnd);
  };

  return (
    <ResizableComponent
      start={workOrder.start}
      end={workOrder.start + workOrder.width}
      onResize={handleResize}
      style={{
        position: "absolute",
        top: 8,
        height: ORDER_HEIGHT,
        opacity: isDragging ? 0 : 1
      }}
    >
      <ResizableOrderWrapper>
        <DraggableOrder workOrder={workOrder} />
      </ResizableOrderWrapper>
    </ResizableComponent>
  );
};

export default ResizableOrder;
