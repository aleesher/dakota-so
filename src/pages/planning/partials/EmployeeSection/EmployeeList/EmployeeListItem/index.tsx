import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import CalendarEmployee from "../../../../provider/data/collections/CalendarEmployee";
import { ListItemActionsMenuButton, ListItemWrapper } from "../../../../styles";
import AvatarIcon from "../../../icons/AvatarIcon";
import ThreeDotsIcon from "../../../icons/ThreeDotsIcon";
import { EmployeeAvatar, EmployeeAvatarWrapper, EmployeeInfo } from "./styles";

const MENU_ITEMS = ["Verbergen", "Toevoegen"];

interface IProps {
  employee: CalendarEmployee;
}

const EmployeeListItem: React.FC<IProps> = ({ employee }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <ListItemWrapper height={employee.lineHeight}>
        <EmployeeAvatarWrapper>
          {employee.photo ? (
            <EmployeeAvatar src={employee.photo} />
          ) : (
            <AvatarIcon />
          )}
        </EmployeeAvatarWrapper>
        <EmployeeInfo>
          <div>{employee.code}</div>
          <div>{employee.firstName}</div>
          <div>{employee.costCenterCode || "Unknown"}</div>
        </EmployeeInfo>
        <ListItemActionsMenuButton onClick={handleClick}>
          <ThreeDotsIcon />
        </ListItemActionsMenuButton>
      </ListItemWrapper>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {MENU_ITEMS.map(item => (
          <MenuItem key={item} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default EmployeeListItem;
