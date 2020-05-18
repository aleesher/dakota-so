import React from "react";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import { usePageState } from "../../../provider/page";
import { useSettingsState } from "../../../provider/settings";
import OrderFieldValue from "../OrderFieldValue";
import {
  OrderTooltipField,
  OrderTooltipRow,
  OrderTooltipValue
} from "./styles";

interface IProps {
  workOrder: CalendarOrder;
}

const OrderTooltipContent: React.FC<IProps> = ({ workOrder }) => {
  const { fieldLabels, fieldTypes } = usePageState();
  const { uiPreferences } = useSettingsState();

  return (
    <>
      {uiPreferences.popupFields.map(field => (
        <OrderTooltipRow key={field}>
          <OrderTooltipField>{fieldLabels[field]}:</OrderTooltipField>
          <OrderTooltipValue>
            <OrderFieldValue
              type={fieldTypes[field]}
              value={workOrder[field]}
            />
          </OrderTooltipValue>
        </OrderTooltipRow>
      ))}
    </>
  );
};

export default OrderTooltipContent;
