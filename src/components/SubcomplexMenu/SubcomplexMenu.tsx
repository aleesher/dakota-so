import React from "react";

import MaterialMenu from "@material-ui/core/Menu";
import MaterialMenuItem from "@material-ui/core/MenuItem";

import { Container } from "./styles";

export interface IPosition {
  top: string;
  right: string;
}

interface IAction {
  label: string;
  onClick: () => void;
}

interface IProps {
  title?: string;
  position?: IPosition;
  actions: IAction[];
}

const Menu = ({
  position = { top: "auto", right: "10px" },
  title = "",
  actions
}: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container
        position={position}
        title={title ? title : undefined}
        onClick={handleClick}
      >
        ...
      </Container>
      <MaterialMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {actions.map(({ label, onClick }) => (
          <MaterialMenuItem
            key={label}
            onClick={() => {
              handleClose();
              onClick();
            }}
          >
            {label}
          </MaterialMenuItem>
        ))}
      </MaterialMenu>
    </>
  );
};

export default Menu;
