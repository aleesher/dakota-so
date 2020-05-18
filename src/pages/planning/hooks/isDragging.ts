import { useMemo } from "react";
import { usePageState } from "../provider/page";

export function useIsDragging(orderCode: string) {
  const { selectedOrders, totalSelected, isOrderDragging } = usePageState();

  const isDragging = useMemo(() => {
    return isOrderDragging && !!selectedOrders[orderCode];
  }, [selectedOrders, totalSelected, isOrderDragging]);

  return isDragging;
}
