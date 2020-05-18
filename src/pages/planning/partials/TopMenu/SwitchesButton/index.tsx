import React, { useState } from "react";
import MenuIcon from "../../icons/MenuIcon";
import { SwitchesButtonWrapper } from "../styles";
import SwitchesMenu from "./SwitchesMenu";

const SwitchesButton: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <SwitchesButtonWrapper onClick={() => setShowMenu(true)}>
        <MenuIcon />
      </SwitchesButtonWrapper>

      {showMenu && <SwitchesMenu onClickOutside={() => setShowMenu(false)} />}
    </>
  );
};

export default SwitchesButton;
