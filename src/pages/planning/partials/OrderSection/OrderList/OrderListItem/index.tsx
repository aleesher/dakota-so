import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CalendarOrder from "../../../../provider/data/collections/CalendarOrder";
import { usePageState } from "../../../../provider/page";
import {
  useSettingsDispatch,
  useSettingsState
} from "../../../../provider/settings";
import { ListItemActionsMenuButton, ListItemWrapper } from "../../../../styles";
import OrderFieldValue from "../../../components/OrderFieldValue";
import ThreeDotsIcon from "../../../icons/ThreeDotsIcon";
import { OrderItemInfo, OrderItemType } from "./styles";

const MENU_ITEMS = ["Bewerken Werkorder", "Bewerken Serviceorder"];

interface IProps {
  workOrder: CalendarOrder;
}

const OrderListItem: React.FC<IProps> = ({ workOrder }) => {
  const { fieldTypes } = usePageState();
  const { uiPreferences, timeUnit } = useSettingsState();
  const { setOrderViewDate } = useSettingsDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const { isLocked } = workOrder;

  const handleClickMenu = event => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  const handleClickOrder = () => {
    if (isLocked) {
      return;
    }

    if (timeUnit === "day" && workOrder.startDate) {
      setOrderViewDate(workOrder.startDate);
    }
  };

  return (
    <>
      <ListItemWrapper onClick={handleClickOrder} isLocked={isLocked}>
        <OrderItemInfo>
          {uiPreferences.orderFields.map((f, i) => (
            <div key={f + i}>
              <OrderFieldValue type={fieldTypes[f]} value={workOrder[f]} />
            </div>
          ))}
        </OrderItemInfo>

        <OrderItemType isLocked={isLocked}>
          {(workOrder.soOrderType || "").toLowerCase()}
        </OrderItemType>
        {!isLocked && (
          <ListItemActionsMenuButton onClick={handleClickMenu}>
            <ThreeDotsIcon />
          </ListItemActionsMenuButton>
        )}
      </ListItemWrapper>
      {!isLocked && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {MENU_ITEMS.map(item => (
            <MenuItem key={item} onClick={handleCloseMenu}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default OrderListItem;
