import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { DRAG_ITEM_TYPE } from "../../../../constants";
import { calculateNewStart, canDropToEmployee } from "../../../../helpers";
import {
  useDataDispatch,
  usePageDispatch,
  useSettingsState
} from "../../../../provider";
import CalendarEmployee from "../../../../provider/data/collections/CalendarEmployee";
import { HOVER_TYPE, HoverObject } from "../../../../provider/dnd";
import { TimeLineWrapper } from "../../../../styles";
import { TDragItem } from "../../../../types";

interface IProps {
  employee: CalendarEmployee;
}

const DroppableEmployeeTimeLine: React.FC<IProps> = ({
  employee,
  children
}) => {
  const { employeeTimeScale, employeeViewDate } = useSettingsState();
  const {
    onDropToTheSameEmployee,
    onDropToEmployee,
    onDropMultipleToEmployee,
    onDropStackToEmployee,
    onDropStackToTheSameEmployee
  } = useDataDispatch();
  const { setIsOrderDragging } = usePageDispatch();
  // const [canDrop, setCanDrop] = useState(false);

  const [{}, dropRef] = useDrop({
    accept: [DRAG_ITEM_TYPE.ORDER, DRAG_ITEM_TYPE.STACK],
    drop: (item: TDragItem, mon) => {
      // if order already was dropped to stack or to order
      if (mon.didDrop()) {
        return;
      }

      if (item.type === DRAG_ITEM_TYPE.STACK) {
        const { stack } = item;

        const newStart = calculateNewStart(stack.start, mon);

        // if it is the same employee
        if (stack.employeeResourceCode === employee.resource) {
          onDropStackToTheSameEmployee(stack.id, employee.resource, newStart);
        } else {
          onDropStackToEmployee(
            stack.id,
            stack.employeeResourceCode,
            employee.resource,
            newStart
          );
        }
      } else {
        const { order } = item;

        const newStart = calculateNewStart(order.start, mon);

        if (item.totalSelected > 1) {
          onDropMultipleToEmployee(employee.resource, newStart);
        } else {
          // if it is the same employee
          if (order.soEmployeeCode === employee.resource) {
            onDropToTheSameEmployee(order.code, employee.resource, newStart);
          } else {
            onDropToEmployee(order.code, employee.resource, newStart);
          }
        }
      }
      setIsOrderDragging(false);
    },
    // collect: mon => ({
    //   isOver: !!mon.isOver()
    // }),
    canDrop: (item: TDragItem, mon) => {
      const res = canDropToEmployee(
        employeeTimeScale,
        employeeViewDate,
        mon.getDifferenceFromInitialOffset(),
        item.type === DRAG_ITEM_TYPE.ORDER ? item.order : item.stack
      );
      // setCanDrop(res); // trick (for some reason collect.canDrop doesn't work)
      return res;
    },
    hover: () => {
      if (
        HoverObject.type !== HOVER_TYPE.EMPLOYEE ||
        HoverObject.code !== employee.code
      ) {
        HoverObject.type = HOVER_TYPE.EMPLOYEE;
        HoverObject.code = employee.code;
      }
    }
  });

  return (
    <TimeLineWrapper ref={dropRef} height={employee.lineHeight}>
      {children}
    </TimeLineWrapper>
  );
};

export default DroppableEmployeeTimeLine;
