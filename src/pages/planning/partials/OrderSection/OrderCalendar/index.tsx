import React from "react";
import withAbilityToSelect from "../../../hocs";
import { useSettingsState } from "../../../provider";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { CalendarWrapper } from "../../../styles";
import DayWorkOrderCalendar from "./DayWorkOrderCalendar";
import WorkOrderCalendar from "./WorkOrderCalendar";

interface IProps {
  orders: CalendarOrder[];
}

const OrderCalendar: React.FC<IProps> = ({ orders }) => {
  const { timeUnit } = useSettingsState();
  return (
    <CalendarWrapper>
      {timeUnit === "day" ? (
        <DayWorkOrderCalendar orders={orders} />
      ) : (
        <WorkOrderCalendar orders={orders} />
      )}
    </CalendarWrapper>
  );
};

export default withAbilityToSelect(OrderCalendar);
