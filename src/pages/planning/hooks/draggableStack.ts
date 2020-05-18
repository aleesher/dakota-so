import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { DRAG_ITEM_TYPE } from "../constants";
import OrderStack from "../provider/data/collections/OrderStack";
import { usePageDispatch } from "../provider/page";
import { TDragStackItem } from "../types";

export function useDraggableStack(stack: OrderStack) {
  const { setIsOrderDragging, cancelDragging } = usePageDispatch();

  const [{}, dragRef, preview] = useDrag({
    item: {
      type: DRAG_ITEM_TYPE.STACK,
      stack
    } as TDragStackItem,
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

  return dragRef;
}
