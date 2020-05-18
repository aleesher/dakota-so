import React, { useMemo } from "react";
import OrderStack from "../../../../provider/data/collections/OrderStack";
import { usePageState } from "../../../../provider/page";
import SelectedCollapsedStack from "./Selected";
import SimpleCollapsedStack from "./Simple";

interface IProps {
  stack: OrderStack;
}

const CollapsedOrderStack: React.FC<IProps> = ({ stack }) => {
  const { selectedStackId } = usePageState();

  const isSelected = useMemo(() => stack.id === selectedStackId, [
    stack.id,
    selectedStackId
  ]);

  return isSelected ? (
    <SelectedCollapsedStack stack={stack} />
  ) : (
    <SimpleCollapsedStack stack={stack} />
  );
};

export default CollapsedOrderStack;
