import React, { useMemo } from "react";
import { ORDER_STATUS_KEYS } from "../../../../../../../constants";
import { useSettingsState } from "../../../../../provider/settings";
import { WorkOrderGroupWrapper } from "../../../../../styles";
import { TWorkOrderGroup } from "../../../../../types";
import { OrderGroupTooltip } from "../../../../components/OrderTooltip";

interface IProps {
  orderGroup: TWorkOrderGroup;
}

const EmployeeOrderGroup: React.FC<IProps> = ({ orderGroup }) => {
  const { employeeTimeScale } = useSettingsState();

  const byStatus = useMemo(() => {
    return ORDER_STATUS_KEYS.map(status => {
      const orders = orderGroup.orders.filter(o => o.soStatus === status);
      return {
        status,
        amount: orders.length
      };
    });
  }, [orderGroup]);

  return (
    <OrderGroupTooltip data={byStatus}>
      <WorkOrderGroupWrapper
        start={employeeTimeScale.getX(orderGroup.startDate)}
        end={employeeTimeScale.getX(orderGroup.endDate)}
      >
        <div>Total: {orderGroup.total}</div>
      </WorkOrderGroupWrapper>
    </OrderGroupTooltip>
  );
};

export default EmployeeOrderGroup;
