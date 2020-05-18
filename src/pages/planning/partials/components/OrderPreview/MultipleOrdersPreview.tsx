import React, { memo } from "react";
import _range from "lodash/range";
import { ORDER_PREVIEW_OFFSET, ORDER_STYLES } from "../../../constants";
import { TDragOrderItem } from "../../../types";
import OrderPreview from "./OrderPreview";

interface IProps {
  item: TDragOrderItem;
  color: string;
}

const MultipleOrdersPreview: React.FC<IProps> = ({
  item: { order, totalSelected },
  color
}) => (
  <div style={{ position: "relative" }}>
    {_range(0, totalSelected).map(i => (
      <div
        key={i}
        style={{
          ...ORDER_STYLES,
          width: order.width,
          borderColor: color,
          top: ORDER_PREVIEW_OFFSET * i,
          left: ORDER_PREVIEW_OFFSET * i
        }}
      />
    ))}
    <OrderPreview order={order} color={color} />
  </div>
);

export default memo(MultipleOrdersPreview);
