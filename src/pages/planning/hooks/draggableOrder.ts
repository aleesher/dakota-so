import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { DRAG_ITEM_TYPE } from "../constants";
import CalendarOrder from "../provider/data/collections/CalendarOrder";
import { usePageDispatch, usePageState } from "../provider/page";
import { TDragOrderItem } from "../types";

export function useDraggableOrder(workOrder: CalendarOrder) {
  const { setIsOrderDragging, cancelDragging } = usePageDispatch();
  const { totalSelected, selectedOrders } = usePageState();

  const [{ isDragging }, dragRef, preview] = useDrag({
    item: {
      type: DRAG_ITEM_TYPE.ORDER,
      order: workOrder,
      totalSelected
    } as TDragOrderItem,
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
    canDrag: () => !workOrder.isSaving && !!selectedOrders[workOrder.code],
    begin: () => {
      setIsOrderDragging(true);
    },
    end: (dropResult, mon) => {
      // if user dropped order where is is not allowed
      if (mon.didDrop() === false) {
        cancelDragging();
      }
    }
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return [dragRef, isDragging];
}
