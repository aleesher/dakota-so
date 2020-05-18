import Colors from "dakota-portal/dist/components/Colors";
import React, { useMemo } from "react";
import { useDragLayer, XYCoord } from "react-dnd";
import { DRAG_ITEM_TYPE } from "./constants";
import {
  canDropToStack,
  canDropToUnassignedOrder,
  canDropToEmployee
} from "./helpers";
import MultipleOrdersPreview from "./partials/components/OrderPreview/MultipleOrdersPreview";
import OrderPreview from "./partials/components/OrderPreview/OrderPreview";
import StackPreview from "./partials/components/OrderStack/StackPreview";
import { HOVER_TYPE, HoverObject } from "./provider/dnd";
import { useSettingsState } from "./provider/settings";

const layerStyles: React.CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
};

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none"
    };
  }

  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform
  };
}

function renderItem(itemType, item, color) {
  switch (itemType) {
    case DRAG_ITEM_TYPE.ORDER:
      return item.totalSelected === 1 ? (
        <OrderPreview order={item.order} color={color} />
      ) : (
        <MultipleOrdersPreview item={item} color={color} />
      );

    case DRAG_ITEM_TYPE.STACK:
      return <StackPreview stack={item.stack} color={color} />;

    default:
      return null;
  }
}

const CustomDragLayer: React.FC = () => {
  const {
    itemType,
    isDragging,
    item,
    initialOffset,
    currentOffset,
    delta
  } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    delta: monitor.getDifferenceFromInitialOffset(),
    isDragging: monitor.isDragging()
  }));
  const { employeeTimeScale, employeeViewDate } = useSettingsState();

  const color = useMemo(() => {
    if (!isDragging) {
      return false;
    }

    let canDrop: boolean;

    switch (HoverObject.type) {
      case HOVER_TYPE.UNASSIGNED_ORDER: {
        canDrop = canDropToUnassignedOrder(item, HoverObject.code);
        break;
      }
      case HOVER_TYPE.EMPLOYEE: {
        canDrop = canDropToEmployee(
          employeeTimeScale,
          employeeViewDate,
          delta,
          item.type === DRAG_ITEM_TYPE.STACK ? item.stack : item.order
        );
        break;
      }
      case HOVER_TYPE.EMPLOYEE_ORDER:
      case HOVER_TYPE.STACK: {
        canDrop = canDropToStack(
          employeeTimeScale,
          employeeViewDate,
          HoverObject.end
        );
      }
    }

    return !canDrop
      ? Colors.cinnabar
      : HoverObject.type === HOVER_TYPE.EMPLOYEE_ORDER ||
        HoverObject.type === HOVER_TYPE.STACK
      ? Colors.mediumSeaGreen
      : Colors.dodgerBlue;
  }, [isDragging, itemType, item, employeeTimeScale, employeeViewDate, delta]);

  if (!isDragging) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {renderItem(itemType, item, color)}
      </div>
    </div>
  );
};

export default CustomDragLayer;
