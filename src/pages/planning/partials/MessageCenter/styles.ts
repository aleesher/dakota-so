import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";
import {
  DIVIDER_HEIGHT,
  MESSAGES_MENU_WIDTH,
  TOP_MENU_HEIGHT
} from "../../constants";

export const MessageCenterWrapper = styled.div`
  position: absolute;
  right: 0;
  width: ${MESSAGES_MENU_WIDTH}px;
  height: calc(100% - ${TOP_MENU_HEIGHT}px - ${DIVIDER_HEIGHT}px);
  padding: 25px;
  background-color: ${Colors.fiord};
  z-index: 3;
  box-sizing: border-box;
`;

export const MessageCenterTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 26px;
`;

export const PinButton = styled.div`
  && {
    position: absolute;
    top: 25px;
    right: 44px;
    width: 27px;
    height: 27px;
    cursor: pointer;
  }
`;

export const Message = styled.div`
  position: relative;
  padding: 0 47px 0 30px;
  margin-bottom: 14px;
`;

export const MessageType = styled.div`
  position: absolute;
  left: 0;
  top: calc(50% - 5px);
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`;

export const MessageText = styled.div`
  font-size: 14px;
  color: ${Colors.twilightBlue};
  padding-bottom: 14px;
  font-weight: bold;
`;

export const HideMessageButton = styled.div`
  margin-bottom: 31px;
  font-size: 14px;
  text-decoration: underline;
  color: ${Colors.twilightBlue};
  opacity: 0.5;
  cursor: pointer;
`;
