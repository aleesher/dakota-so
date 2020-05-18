import React from "react";
import { useDrop } from "react-dnd";
import { DRAG_ITEM_TYPE } from "../../../constants";
import { canDropToStack } from "../../../helpers";
import { useDataDispatch } from "../../../provider/data";
import OrderStack from "../../../provider/data/collections/OrderStack";
import { HOVER_TYPE, HoverObject } from "../../../provider/dnd";
import { usePageDispatch } from "../../../provider/page";
import { useSettingsState } from "../../../provider/settings";
import { TDragItem } from "../../../types";
import { DroppableOrderStackWrapper } from "./styles";

interface IProps {
  stack: OrderStack;
}

const DroppableOrderStack2: React.FC<IProps> = ({ stack, children }) => {
  const { employeeTimeScale, employeeViewDate } = useSettingsState();
  const { onDropToStack, onDropStackToStack } = useDataDispatch();
  const { setIsOrderDragging } = usePageDispatch();

  const [{}, dropRef] = useDrop({
    accept: [DRAG_ITEM_TYPE.ORDER, DRAG_ITEM_TYPE.STACK],
    drop: (item: TDragItem) => {
      if (item.type === DRAG_ITEM_TYPE.STACK) {
        onDropStackToStack(
          item.stack.id,
          item.stack.employeeResourceCode,
          stack.id,
          stack.employeeResourceCode
        );
      } else {
        if (item.totalSelected === 1 && item.order.stackId === stack.id) {
          // do nothing - order was dropped to the same stack
        } else {
          onDropToStack(stack.employeeResourceCode, stack.id);
        }
      }
      setIsOrderDragging(false);
    },
    // collect: mon => ({
    //   isOver: mon.canDrop() && !!mon.isOver()
    // }),
    canDrop: (item: TDragItem, mon) => {
      return canDropToStack(
        employeeTimeScale,
        employeeViewDate,
        stack.start + stack.width
      );
    },
    hover: () => {
      if (
        HoverObject.type !== HOVER_TYPE.STACK ||
        HoverObject.code !== stack.id
      ) {
        HoverObject.type = HOVER_TYPE.STACK;
        HoverObject.code = stack.id;
        HoverObject.end = stack.start + stack.width;
      }
    }
  });

  return (
    <DroppableOrderStackWrapper
      ref={dropRef}
      left={stack.start}
      width={stack.width}
    >
      {children}
    </DroppableOrderStackWrapper>
  );
};

export default DroppableOrderStack2;
