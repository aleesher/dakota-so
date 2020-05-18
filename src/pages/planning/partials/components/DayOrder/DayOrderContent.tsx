import React, { memo } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { usePageState } from "../../../provider/page";
import { OrderTooltip } from "../OrderTooltip";
import OrderWithActionMenu from "./OrderWithActionMenu";
import { LoaderWrapper } from "./styles";

interface IProps {
  workOrder: CalendarOrder;
}

const DayOrderContent: React.FC<IProps> = ({ workOrder }) => {
  const { isOrderDragging } = usePageState();

  if (workOrder.isSaving) {
    return (
      <LoaderWrapper>
        <CircularProgress />
      </LoaderWrapper>
    );
  }

  if (workOrder.error) {
    return <div>{workOrder.error}</div>;
  }

  return !isOrderDragging ? (
    <OrderTooltip workOrder={workOrder}>
      {/* should be wrapped by div */}
      <div>
        <OrderWithActionMenu workOrder={workOrder} />
      </div>
    </OrderTooltip>
  ) : (
    <OrderWithActionMenu workOrder={workOrder} />
  );
};

export default memo(DayOrderContent);
