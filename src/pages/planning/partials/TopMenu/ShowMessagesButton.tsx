import React from "react";
import { MESSAGES } from "../../mock";
import { useSettingsDispatch } from "../../provider/settings";
import MessageIcon from "../icons/MessageIcon";
import { AmountOfNewMessages, ShowMessagesButtonWrapper } from "./styles";

const ShowMessagesButton: React.FC = () => {
  const { showMessages } = useSettingsDispatch();

  return (
    <ShowMessagesButtonWrapper onClick={showMessages}>
      <AmountOfNewMessages>{MESSAGES.length}</AmountOfNewMessages>
      <MessageIcon />
    </ShowMessagesButtonWrapper>
  );
};

export default ShowMessagesButton;
