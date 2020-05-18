import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";
import {
  CALENDAR_HEADER_HEIGHT,
  CALENDAR_LINE_HEIGHT,
  DIVIDER_HEIGHT,
  LIST_WIDTH,
  ORDER_HEIGHT
} from "./constants";

export const PlanningPageContentStyled = styled.div`
  position: relative;

  * {
    font-family: "Roboto", sans-serif;
  }
`;

export const SelectableSectionWrapper = styled.div`
  width: ${({ isLeft }) =>
    isLeft ? LIST_WIDTH + "px" : `calc(100% - ${LIST_WIDTH}px)`};
  height: fit-content;
  min-height: 100%;
  background-color: ${({ isLeft }) => (isLeft ? "white" : "none")};
  box-shadow: ${({ isSelected }) =>
    isSelected ? `inset 0 0 4px 1px ${Colors.dodgerBlue}` : "none"};
`;

export const Divider = styled.div`
  width: 100%;
  height: ${DIVIDER_HEIGHT}px;
  background-color: ${Colors.gullGrey2};
`;

export const SectionWrapper = styled.section`
  box-sizing: border-box;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: ${CALENDAR_HEADER_HEIGHT}px;
  background-color: ${Colors.aliceBlue5};
`;

export const SectionBody = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - ${CALENDAR_HEADER_HEIGHT}px);
  box-sizing: border-box;

  overflow-y: auto;
`;

/* list */

export const ListBody = styled.div`
  height: fit-content;
  box-sizing: border-box;
  border-right: 1px solid ${Colors.gullGrey2};
  box-shadow: 15px 0px 30px 0px rgba(0, 0, 0, 0.1);
`;

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${({ height }) => height || CALENDAR_LINE_HEIGHT}px;
  width: auto;
  box-sizing: border-box;

  &:not(:last-child) {
    border-bottom: 1px solid ${Colors.pattensBlue};
  }
  ${p => p.isLocked && `background-color: ${Colors.athensGray};`}
`;

export const ListItemActionsMenuButton = styled.div`
  margin-top: -5px;
  margin-right: 27px;
  cursor: pointer;
`;

/* calendar */

export const CalendarWrapper = styled.div`
  position: relative;
  height: fit-content;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const CalendarHeader = styled.div`
  flex: auto;
`;

export const TimeLineWrapper = styled.div`
  position: relative;
  align-items: center;
  height: ${({ height }) => height || CALENDAR_LINE_HEIGHT}px;
  box-sizing: border-box;
  &:not(:last-child) {
    border-bottom: 1px solid ${Colors.pattensBlue};
  }
  ${p => p.isLocked && `background-color: ${Colors.athensGray};`}
`;

export const WorkOrderGroupWrapper = styled.div`
  position: absolute;
  height: ${ORDER_HEIGHT}px;
  top: 8px;
  left: ${({ start }) => start}px;
  width: ${({ start, end }) => end - start}px;
  box-shadow: 0 16px 38px 0 rgba(175, 175, 175, 0.35);
  border: 2px solid white;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: white;
  margin-left: 5px;
  padding: 10px;
  box-sizing: border-box;
  width: ${({ start, end }) => end - start - 10}px;
`;
