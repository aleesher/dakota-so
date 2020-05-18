import React, { useMemo } from "react";
import { useDraggableStack } from "../../../../hooks/draggableStack";
import OrderStack from "../../../../provider/data/collections/OrderStack";
import { usePageState } from "../../../../provider/page";
import StackPreview from "../StackPreview";
import { DraggableOrderStackWrapper } from "../styles";

interface IProps {
  stack: OrderStack;
}

const SelectedCollapsedStack: React.FC<IProps> = ({ stack }) => {
  const dragRef = useDraggableStack(stack);
  const { selectedStackId, isOrderDragging } = usePageState();

  const isDragging = useMemo(() => {
    return isOrderDragging && selectedStackId === stack.id;
  }, [selectedStackId, isOrderDragging]);

  return (
    <DraggableOrderStackWrapper
      ref={dragRef}
      left={stack.start}
      width={stack.width}
      isDragging={isDragging}
    >
      <StackPreview stack={stack} />
    </DraggableOrderStackWrapper>
  );
};

export default SelectedCollapsedStack;
