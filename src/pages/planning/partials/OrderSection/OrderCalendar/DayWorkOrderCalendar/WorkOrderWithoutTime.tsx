import React, { useMemo } from "react";
import { useStartAndEndTimes } from "../../../../hooks";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { useSettingsState } from "../../../../provider/settings";
import CommonOrder from "../../../components/DayOrder/CommonOrder";

interface IProps {
  workOrder: CalendarOrder;
}

const WorkOrderWithoutTime: React.FC<IProps> = ({ workOrder }) => {
  const { orderTimeScale } = useSettingsState();
  const [startTime, endTime] = useStartAndEndTimes();

  const order = useMemo(() => {
    const start = orderTimeScale.getX(startTime);

    return {
      ...workOrder,
      startTime,
      endTime,
      start
    } as CalendarOrder;
  }, [workOrder, startTime, endTime]);

  return <CommonOrder workOrder={order} />;
};

export default WorkOrderWithoutTime;
