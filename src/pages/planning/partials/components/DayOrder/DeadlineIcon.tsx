import React, { useMemo, memo } from "react";
import moment from "moment";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { usePageState } from "../../../provider/page";
import DeadlineMuiIcon from "@material-ui/icons/Schedule";

const DEADLINE_STATUSES = ["Open", "In_Process"];

interface IProps {
  workOrder: CalendarOrder;
}

const DeadlineIcon: React.FC<IProps> = ({ workOrder }) => {
  const { currentTime } = usePageState();

  const showDeadlineIcon = useMemo(() => {
    if (!workOrder.isWithTime) {
      return false;
    }

    if (!DEADLINE_STATUSES.includes(workOrder.soStatus)) {
      return false;
    }

    if (workOrder.endTime.format("YYYYMMDD") < moment().format("YYYYMMDD")) {
      return true;
    }

    const endHour = workOrder.endTime.hours();
    const endMinutes = workOrder.endTime.minutes();

    if (endHour < currentTime.hours) {
      return true;
    }

    if (endHour === currentTime.hours && endMinutes < currentTime.minutes) {
      return true;
    }

    return false;
  }, [workOrder, currentTime.minutes]);

  return showDeadlineIcon ? <DeadlineMuiIcon /> : null;
};

export default memo(DeadlineIcon);
