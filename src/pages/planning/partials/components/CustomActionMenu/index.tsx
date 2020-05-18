import React from "react";
import Menu from "@material-ui/core/Menu";
import CustomItem, { IMenuItem } from "./CustomItem";

interface IProps {
  anchorEl: HTMLElement;
  open: boolean;
  onClose: (e: any) => void;
  items: IMenuItem[];
}

const CustomActionMenu: React.FC<IProps> = ({
  anchorEl,
  open,
  onClose,
  items
}) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <div onMouseLeave={onClose} style={{ outline: "none" }}>
        {items.map(item => (
          <CustomItem key={item.label} item={item} onClose={onClose} />
        ))}
      </div>
    </Menu>
  );
};

export default CustomActionMenu;
