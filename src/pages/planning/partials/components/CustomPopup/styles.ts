import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const ClosePopupButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 25px;
  right: 39px;
  width: 21px;
  height: 21px;
`;

export const PopupTitle = styled.h6`
  box-sizing: border-box;
  padding-bottom: 18px;
  border-bottom: ${({ withBorder }) =>
    withBorder ? "1px solid " + Colors.lightGray : "none"};
  margin: 50px 0 42px;
  font-size: 29px;
  font-weight: bold;
  text-align: center;
`;
