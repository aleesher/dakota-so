import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";
import {
  CALENDAR_DATE_WIDTH,
  SCROLL_BUTTONS_WIDTH,
  SCROLL_WIDTH
} from "../../../constants";

export const CalendarScrollbarWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarViewDateWrapper = styled.div`
  margin-right: auto;
  padding-left: 22px
  box-sizing: border-box;
  width: ${CALENDAR_DATE_WIDTH}px;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const CalendarScroll = styled.div`
  width: ${({ width }) => width || SCROLL_WIDTH}px;
  height: 7px;
  background-color: ${Colors.gullGrey2}4d;
  border-radius: 3.5px;
`;

export const CurrentDay = styled.div`
  width: ${({ width }) => width || 800}px;
  margin-left: ${({ marginLeft }) => marginLeft || 0}px;
  height: 7px;
  background-color: ${Colors.gullGrey2};
  border-radius: 3.5px;
`;

export const CalendarScrollButtons = styled.div`
  box-sizing: border-box;
  width: ${SCROLL_BUTTONS_WIDTH}px;
  padding-left: 31px;
  padding-right: 21px;
  display: flex;
  justify-content: space-between;

  div {
    cursor: pointer;
  }
`;
