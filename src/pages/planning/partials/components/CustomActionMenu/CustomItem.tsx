import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export interface IMenuItem {
  label: string;
  onClick?: () => void;
  items?: IMenuItem[];
}

interface IProps {
  item: IMenuItem;
  onClose: (e: any) => void;
}

const CustomItem: React.FC<IProps> = ({ item, onClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = e => {
    e.stopPropagation();
    setAnchorEl(null);
    onClose(e);
  };

  return (
    <MenuItem onClick={handleClick}>
      {item.label}

      {!!item.items && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <div
            onMouseLeave={() => setAnchorEl(null)}
            style={{ outline: "none" }}
          >
            {item.items.map(item => (
              <MenuItem key={item.label} onClick={handleClose}>
                {item.label}
              </MenuItem>
            ))}
          </div>
        </Menu>
      )}
    </MenuItem>
  );
};

export default CustomItem;
