import React, { useMemo } from "react";
import { SECTION } from "../../../../constants";
import { usePageState, useSettingsState } from "../../../../provider";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import CommonOrder from "../../../components/DayOrder/CommonOrder";

interface IProps {
  orders: CalendarOrder[];
}

const EmployeeOrders: React.FC<IProps> = ({ orders }) => {
  const { employeeViewDate, timeUnit, uiPreferences } = useSettingsState();
  const { activeSection, searchText } = usePageState();

  const viewOrders = useMemo(() => {
    return orders.filter(
      o =>
        o.startTime.format("YYYYMMDD") === employeeViewDate.format("YYYYMMDD")
    );
  }, [orders, employeeViewDate]);

  const visibleOrders = useMemo(() => {
    if (
      activeSection === SECTION.EMPLOYEE_CALENDAR &&
      searchText !== "" &&
      timeUnit === "day"
    ) {
      return viewOrders.filter(o => {
        return uiPreferences.orderFields.some(f =>
          o[f].toLowerCase().includes(searchText)
        );
      });
    }

    return viewOrders;
  }, [viewOrders, searchText, activeSection]);

  return (
    <>
      {visibleOrders.map(wo => (
        <CommonOrder key={wo.code} workOrder={wo} />
      ))}
    </>
  );
};

export default EmployeeOrders;
