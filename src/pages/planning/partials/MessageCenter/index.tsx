import React, { useCallback } from "react";
import Colors from "dakota-portal/dist/components/Colors";
import { MESSAGES } from "../../mock";
import { useSettingsDispatch, useSettingsState } from "../../provider/settings";
import PinIcon from "../icons/PinIcon";
import {
  Message,
  MessageCenterTitle,
  MessageCenterWrapper,
  MessageType,
  PinButton,
  MessageText,
  HideMessageButton
} from "./styles";

const MessageCenter: React.FC = () => {
  const { uiPreferences, messageCenter } = useSettingsState();
  const { pinMessages } = useSettingsDispatch();
  const getColor = useCallback(
    (type: string) => {
      return type === "Warning"
        ? uiPreferences.messageCenter.warningColor
        : uiPreferences.messageCenter.deadlineExpiredColor;
    },
    [
      uiPreferences.messageCenter.warningColor,
      uiPreferences.messageCenter.deadlineExpiredColor
    ]
  );

  return (
    <MessageCenterWrapper>
      <MessageCenterTitle>Messages</MessageCenterTitle>

      <PinButton onClick={pinMessages}>
        <PinIcon
          color={messageCenter.isPinned ? Colors.columbiaBlue : "white"}
        />
      </PinButton>

      {MESSAGES.map(message => (
        <Message key={message.id}>
          <MessageType color={getColor(message.type)} />
          <MessageText>{message.text}</MessageText>

          <HideMessageButton>markeren als gelezen</HideMessageButton>
        </Message>
      ))}
    </MessageCenterWrapper>
  );
};

export default MessageCenter;
