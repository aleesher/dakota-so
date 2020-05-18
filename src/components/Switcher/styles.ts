import styled, { css } from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

export const Container = styled.div`
  display: inline-flex;
  border-radius: 25px;
  background-color: #eff3f4;
`;

export const Option = styled.div<{ isActive: boolean }>`
  flex: 1;
  padding: 14px 36px;
  border-radius: 25px;
  font-weight: bold;
  white-space: nowrap;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: -14px;
  }

  ${props =>
    props.isActive &&
    css`
      box-shadow: 0 0 14px -2px #ccd4d8;
      background-color: white;
      color: ${Colors.primary};
      pointer-events: none;
    `}
`;
