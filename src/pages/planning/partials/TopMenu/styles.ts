import styled from "styled-components";
import { TOP_MENU_HEIGHT } from "../../constants";
import Colors from "dakota-portal/dist/components/Colors";

/* header */

export const PlanningHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${TOP_MENU_HEIGHT}px;
  box-sizing: border-box;
`;

export const SwitchesButtonWrapper = styled.div`
  position: relative;
  margin-left: 22px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const SwitchesMenuWrapper = styled.div`
  position: absolute;
  top: 55px;
  left: 22px;
  z-index: 1;
  width: 265px;
  height: 170px;
  background-color: white;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 2px 14px 2px rgba(205, 205, 205, 0.37);
`;

export const SwitchWrapper = styled.div`
  padding: 25px;
  width: 100%;
  height: 50%;
  box-sizing: border-box;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${Colors.fiord};
    font-size: 17px;
  }
`;

export const SearchButton = styled.div`
  margin-left: 20px;
  margin-left: 44px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const SearchInputStyled = styled.input`
  margin-left: 20px;
  margin-right: auto;
  padding: 0 15px;
  box-sizing: border-box;
  height: 50px;
  width: 272px;
  border: 2px solid ${Colors.pattensBlue};
  border-radius: 4px;
  font-size: 16px;
  color: ${Colors.fiord};
`;

export const TodayButtonWrapper = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 6px;
  }

  span {
    font-size: 15px;
    color: ${Colors.dodgerBlue};
  }
`;

export const DatePeriodLabel = styled.div`
  margin-right: 16px;
  font-size: 16px;
  color: ${Colors.raven};
`;

export const ShowMessagesButtonWrapper = styled.div`
  position: relative;
  margin-right: 28px;
  padding-top: 15px;
  box-sizing: border-box;
  text-align: center;
  width: 53px;
  height: 53px;
  border-radius: 27px;
  background-color: ${Colors.arsenic};
  cursor: pointer;
`;

export const AmountOfNewMessages = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 14px;
  background-color: ${Colors.coral};
  font-size: 14px;
  color: white;
  font-weight: bold;
`;

export const SettingsButton = styled.button`
  margin-right: 75px;
  width: 32px;
  height: 33px;
  cursor: pointer;
`;

export const TimeUnitWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20px;
  height: 50px;
  align-items: center;

  & > span {
    color: ${Colors.raven};
    font-size: 16px;
    margin-right: 14px;
  }
`;
