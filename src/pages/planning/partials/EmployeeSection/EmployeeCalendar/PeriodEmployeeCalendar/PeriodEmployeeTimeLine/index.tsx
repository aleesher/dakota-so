import moment from "moment";
import React, { useMemo } from "react";
import _groupBy from "lodash/groupBy";
import { ORDER_GROUP } from "../../../../../constants";
import { useSettingsState } from "../../../../../provider";
import CalendarOrder from "../../../../../provider/data/collections/CalendarOrder";
import { TWorkOrderGroup } from "../../../../../types";
import { TimeLineWrapper } from "../../../../../styles";
import EmployeeOrderGroup from "./EmployeeOrderGroup";

interface IProps {
  orders: CalendarOrder[];
}

const PeriodEmployeeTimeLine: React.FC<IProps> = ({ orders }) => {
  const { startDate, endDate, timeUnit } = useSettingsState();

  const viewOrders = useMemo(() => {
    const from = moment(startDate).startOf(timeUnit);
    const to = moment(endDate).endOf(timeUnit);
    return orders.filter(
      o => o.endDate.isAfter(from) && o.startDate.isBefore(to)
    );
  }, [orders, startDate, endDate, timeUnit]);

  const groups = useMemo<TWorkOrderGroup[]>(() => {
    const workOrders = viewOrders.map(wo => ({
      ...wo,
      groupKey: wo.startDate.format(ORDER_GROUP[timeUnit].format)
    }));

    const grouped = _groupBy(workOrders, "groupKey");

    return Object.keys(grouped)
      .sort()
      .map(key => {
        const date = moment(key, ORDER_GROUP[timeUnit].format);
        return {
          key,
          total: grouped[key].length,
          orders: grouped[key],
          startDate: moment(date).startOf(ORDER_GROUP[timeUnit].startOf),
          endDate: moment(date).endOf(ORDER_GROUP[timeUnit].startOf)
        };
      });
  }, [viewOrders]);

  return (
    <TimeLineWrapper>
      {groups.map(g => (
        <EmployeeOrderGroup key={g.key} orderGroup={g} />
      ))}
    </TimeLineWrapper>
  );
};

export default PeriodEmployeeTimeLine;
