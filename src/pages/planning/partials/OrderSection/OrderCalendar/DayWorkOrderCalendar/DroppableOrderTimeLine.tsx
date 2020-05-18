import React from "react";
import { useDrop } from "react-dnd";
import { CALENDAR_ORDER_TYPE, DRAG_ITEM_TYPE } from "../../../../constants";
import {
  calculateNewStart,
  canDropToUnassignedOrder
} from "../../../../helpers";
import { useDataDispatch, usePageDispatch } from "../../../../provider";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { HOVER_TYPE, HoverObject } from "../../../../provider/dnd";
import { TimeLineWrapper } from "../../../../styles";
import { TDragOrderItem } from "../../../../types";

interface IProps {
  order: CalendarOrder;
}

const DroppableOrderTimeLine: React.FC<IProps> = ({ order, children }) => {
  const { onDropToOrderCalendar } = useDataDispatch();
  const { setIsOrderDragging } = usePageDispatch();

  const [{}, dropRef] = useDrop({
    accept: DRAG_ITEM_TYPE.ORDER,
    drop: (item: TDragOrderItem, mon) => {
      const newStart = calculateNewStart(item.order.start, mon);
      onDropToOrderCalendar(item.order.code, newStart);
      setIsOrderDragging(false);
    },
    // collect: mon => ({
    //   isOver: mon.canDrop() && !!mon.isOver()
    // }),
    canDrop: item => {
      return canDropToUnassignedOrder(item, order.code);
    },
    hover: () => {
      if (
        HoverObject.type !== HOVER_TYPE.UNASSIGNED_ORDER ||
        HoverObject.code !== order.code
      ) {
        HoverObject.type = HOVER_TYPE.UNASSIGNED_ORDER;
        HoverObject.code = order.code;
      }
    }
  });

  return (
    <TimeLineWrapper ref={dropRef} isLocked={order.isLocked}>
      {children}
    </TimeLineWrapper>
  );
};

export default DroppableOrderTimeLine;
