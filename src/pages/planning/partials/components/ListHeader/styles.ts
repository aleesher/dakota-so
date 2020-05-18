import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";
import { CALENDAR_HEADER_HEIGHT, LIST_WIDTH } from "../../../constants";

export const ListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  padding: 0 27px;
  width: ${LIST_WIDTH}px;
  height: ${CALENDAR_HEADER_HEIGHT}px;
  border-right: 1px solid ${Colors.gullGrey2};
  box-shadow: 15px 0px 30px 0px rgba(0, 0, 0, 0.1);
`;

export const ListTitle = styled.div`
  width: 120px;
  color: ${Colors.fiord};
  font-size: 20px;
  font-weight: bold;
`;

export const SortListButton = styled.div`
  width: 23px;
  height: 24px;
  margin-left: 27px;
  cursor: pointer;
`;

export const AddListItemButton = styled.div`
  width: 19px;
  height: 19px;
  margin-left: auto;
  cursor: pointer;
`;
