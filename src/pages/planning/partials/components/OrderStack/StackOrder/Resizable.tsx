import React from "react";
import { useIsDragging } from "../../../../hooks";
import { useDataDispatch } from "../../../../provider/data";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { useSettingsState } from "../../../../provider/settings";
import { DraggableOrder } from "../../DayOrder/DraggableOrder";
import ResizableComponent from "../../ResizableComponent";
import { ResizableOrderWrapper } from "../../DayOrder/styles";

interface IProps {
  workOrder: CalendarOrder;
  top: number;
}

const ResizableStackOrder: React.FC<IProps> = ({ workOrder, top }) => {
  const { collapseOrders } = useSettingsState();
  const { onResizeStackOrder } = useDataDispatch();
  const isDragging = useIsDragging(workOrder.code);

  const handleResize = (newStart: number, newEnd: number) => {
    onResizeStackOrder(
      collapseOrders,
      workOrder.soEmployeeCode,
      workOrder.stackId,
      workOrder.code,
      workOrder.start + newStart,
      workOrder.start + newEnd
    );
  };

  return (
    <ResizableComponent
      start={0}
      end={workOrder.width}
      onResize={handleResize}
      direction="right"
      style={{
        top,
        opacity: isDragging ? 0 : 1
      }}
    >
      <ResizableOrderWrapper>
        <DraggableOrder workOrder={workOrder} />
      </ResizableOrderWrapper>
    </ResizableComponent>
  );
};

export default ResizableStackOrder;
