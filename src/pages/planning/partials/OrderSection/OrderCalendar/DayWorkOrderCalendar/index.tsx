import React, { useMemo } from "react";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { useSettingsState } from "../../../../provider/settings";
import { OrderCurrentTime } from "../../../components/CurrentTime";
import DayWorkOrder from "./DayWorkOrder";
import DroppableOrderTimeLine from "./DroppableOrderTimeLine";

interface IProps {
  orders: CalendarOrder[];
}

const DayWorkOrderCalendar: React.FC<IProps> = ({ orders }) => {
  const { orderViewDate } = useSettingsState();

  const viewOrders = useMemo(() => {
    return orders.filter(
      o =>
        !o.isWithTime ||
        o.startTime.format("YYYYMMDD") === orderViewDate.format("YYYYMMDD")
    );
  }, [orderViewDate, orders]);

  return (
    <>
      <OrderCurrentTime />

      {viewOrders.map(order => (
        <DroppableOrderTimeLine key={order.code} order={order}>
          <DayWorkOrder key={order.code} workOrder={order} />
        </DroppableOrderTimeLine>
      ))}
    </>
  );
};

export default DayWorkOrderCalendar;
