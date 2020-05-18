import _capitalize from "lodash/capitalize";
import React, { memo } from "react";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { usePageState } from "../../../provider/page";
import { useSettingsState } from "../../../provider/settings";
import OrderFieldValue from "../OrderFieldValue";
import DeadlineIcon from "./DeadlineIcon";
import {
  DayOrderStatus,
  FirstOrderInfoLine,
  OrderDataWrapper,
  OrderType,
  SecondOrderInfoLine
} from "./styles";

interface IProps {
  workOrder: CalendarOrder;
}

const OrderData: React.FC<IProps> = ({ workOrder }) => {
  const { fieldTypes } = usePageState();
  const { uiPreferences } = useSettingsState();
  const { statusColors } = usePageState();

  if (uiPreferences.orderFields.length === 0) {
    return null;
  }

  return (
    <OrderDataWrapper>
      {workOrder.soPriority === "HIGH" && (
        <DeadlineIcon workOrder={workOrder} />
      )}

      <DayOrderStatus color={statusColors[workOrder.soStatus]}>
        {workOrder.soStatus}
      </DayOrderStatus>

      <FirstOrderInfoLine>
        <OrderFieldValue
          type={fieldTypes[uiPreferences.orderFields[0]]}
          value={workOrder[uiPreferences.orderFields[0]]}
        />
      </FirstOrderInfoLine>

      <SecondOrderInfoLine>
        <OrderFieldValue
          type={fieldTypes[uiPreferences.orderFields[1]]}
          value={workOrder[uiPreferences.orderFields[1]]}
        />
      </SecondOrderInfoLine>

      <OrderType>{_capitalize(workOrder.soOrderType)}</OrderType>
    </OrderDataWrapper>
  );
};

export default memo(OrderData);
