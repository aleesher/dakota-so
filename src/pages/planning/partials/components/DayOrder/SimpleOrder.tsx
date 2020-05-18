import React from "react";
import { CALENDAR_ORDER_TYPE } from "../../../constants";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { DraggableOrder } from "./DraggableOrder";
import { DroppableOrder } from "./DroppableOrder";
import { SimpleOrderWrapper } from "./styles";

interface IProps {
  workOrder: CalendarOrder;
}

const SimpleOrder: React.FC<IProps> = ({ workOrder }) => {
  return (
    <SimpleOrderWrapper start={workOrder.start} width={workOrder.width}>
      {workOrder.type === CALENDAR_ORDER_TYPE.EMPLOYEE_ORDER ? (
        <DroppableOrder workOrder={workOrder}>
          <DraggableOrder workOrder={workOrder} />
        </DroppableOrder>
      ) : (
        <DraggableOrder workOrder={workOrder} />
      )}
    </SimpleOrderWrapper>
  );
};

export default SimpleOrder;
