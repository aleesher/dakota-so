import styled from "styled-components";

export const DatePeriodPickerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding: 0 83px 0 15px;
  box-sizing: border-box;
  border: 2px solid #dde2e6;
  border-radius: 4px;

  div {
    cursor: pointer;
  }

  & > svg {
    position: absolute;
    top: 12px;
    right: 15px;
  }
`;

export const Dash = styled.div`
  padding: 0 5px;
`;
