import React from "react";
import { useDrop } from "react-dnd";
import { DRAG_ITEM_TYPE } from "../../../constants";
import { canDropToStack } from "../../../helpers";
import { useDataDispatch } from "../../../provider/data";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { HOVER_TYPE, HoverObject } from "../../../provider/dnd";
import { usePageDispatch } from "../../../provider/page";
import { useSettingsState } from "../../../provider/settings";
import { TDragItem } from "../../../types";
import { DroppableOrderWrapper } from "./styles";

interface IProps {
  workOrder: CalendarOrder;
}

export const DroppableOrder: React.FC<IProps> = ({ workOrder, children }) => {
  const { employeeTimeScale, employeeViewDate } = useSettingsState();
  const { onDropToOrder, onDropStackToOrder } = useDataDispatch();
  const { setIsOrderDragging } = usePageDispatch();

  const [{}, dropRef] = useDrop({
    accept: [DRAG_ITEM_TYPE.ORDER, DRAG_ITEM_TYPE.STACK],
    drop: (item: TDragItem) => {
      if (item.type === DRAG_ITEM_TYPE.STACK) {
        const { stack } = item;
        onDropStackToOrder(
          stack.id,
          stack.employeeResourceCode,
          workOrder.code,
          workOrder.soEmployeeCode
        );
      } else {
        onDropToOrder(workOrder.code, workOrder.soEmployeeCode);
      }
      setIsOrderDragging(false);
    },
    // collect: mon => ({
    //   isOver: mon.canDrop() && !!mon.isOver()
    // }),
    canDrop: () => {
      return canDropToStack(
        employeeTimeScale,
        employeeViewDate,
        workOrder.start + workOrder.width
      );
    },
    hover: () => {
      if (
        HoverObject.type !== HOVER_TYPE.EMPLOYEE_ORDER ||
        HoverObject.code !== workOrder.code
      ) {
        HoverObject.type = HOVER_TYPE.EMPLOYEE_ORDER;
        HoverObject.code = workOrder.code;
        HoverObject.end = workOrder.start + workOrder.width;
      }
    }
  });

  return (
    <DroppableOrderWrapper ref={dropRef}>{children}</DroppableOrderWrapper>
  );
};
