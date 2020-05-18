import styled, { css } from "styled-components";
import { Button, Select } from "dakota-portal/dist/components";
import Colors from "dakota-portal/dist/components/Colors";

export const SettingsTabsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 53px;
  padding-left: 40px;
  border-bottom: 1px solid ${Colors.aliceBlue2};
`;

export const SettingsTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 207px;
  height: 53px;
  background-color: ${({ isActive }) =>
    isActive ? Colors.dodgerBlue : Colors.aliceBlue2};
  color: ${({ isActive }) => (isActive ? "white" : Colors.dimGray)};
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
`;

export const SettingsContentWrapper = styled.div`
  position: relative;
  margin: 65px 180px 80px 0;
  padding-left: 40px;
  padding-bottom: 65px;
`;

export const SaveSettingsButton = styled(Button)`
  && {
    position: absolute;
    right: 180px;
    bottom: 80px;
    height: 56px;
    width: 171px;
    font-size: 18px;
    text-transform: capitalize;
    background-color: ${Colors.royalBlue};
    border-radius: 7px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Label = styled.div`
  width: ${({ width }) => (!!width ? width + "px" : "auto")}
  margin-right: 40px;
  font-size: 17px;
  color: ${Colors.raven};
  
  ${({ width }) =>
    !!width &&
    css`
      width: ${width}px;
    `}}
`;

export const StyledSelect = styled(Select)`
  flex: 1;
  background-color: white;

  .default__control {
    padding: 0 36px 0 16px;
    height: 60px;
    width: 430px;
    border-width: 2px !important;
    border-radius: 5px !important;
  }
`;

export const CurrentColorWrapper = styled.div`
  margin-left: 18px;
`;

export const AddColorButton = styled(SaveSettingsButton)`
  && {
    position: absolute;
    right: 0;
    top: 0;
    background-color: white;
    border: 1px solid ${Colors.royalBlue};
    box-sizing: border-box;
    color: ${Colors.royalBlue};
    box-shadow: none;

    :hover {
      background-color: white;
      color: ${Colors.royalBlue};
    }
  }
`;
