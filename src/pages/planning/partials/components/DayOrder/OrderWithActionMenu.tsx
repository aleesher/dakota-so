import React, { useState, memo } from "react";
import CalendarOrder from "../../../provider/data/collections/CalendarOrder";
import SelectableOrder from "./SelectableOrder";
import { DayWithActionMenuWrapper, OrderActionMenuButton } from "./styles";
import ThreeDotsIcon from "../../icons/ThreeDotsIcon";
import CustomActionMenu from "../CustomActionMenu";

const MENU_ITEMS = [
  {
    label: "Werkorder",
    items: [
      { label: "Bewerken Werkorder" },
      { label: "Bewerken Serviceorder" },
      { label: "Vastgepland" }
    ]
  },
  {
    label: "Afwezigheid",
    items: [{ label: "Nieuw" }, { label: "Bewerken" }]
  },
  {
    label: "Buitendienst",
    items: [{ label: "Verzenden" }]
  }
];

interface IProps {
  workOrder: CalendarOrder;
}

const OrderWithActionMenu: React.FC<IProps> = ({ workOrder }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickMenu = e => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = e => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <DayWithActionMenuWrapper>
      <SelectableOrder workOrder={workOrder} />

      <OrderActionMenuButton
        className="order-action-menu-button"
        onClick={handleClickMenu}
      >
        <ThreeDotsIcon />
      </OrderActionMenuButton>

      <CustomActionMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        items={MENU_ITEMS}
      />
    </DayWithActionMenuWrapper>
  );
};

export default memo(OrderWithActionMenu);
