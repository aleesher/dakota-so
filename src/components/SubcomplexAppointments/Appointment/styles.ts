import styled, { css } from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

import { StatusType } from "./Appointment";

export const Container = styled.div<{ status: StatusType }>`
  position: relative;
  z-index: 10;
  margin-bottom: 20px;
  padding: 8px 10px;
  height: 44px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;

  ${({ status }) => {
    switch (status) {
      case "No_Appointment":
      case "Not_Planned":
        return css`
          background-color: #ccd4d8;
        `;
      case "Scheduled":
        return css`
          background-color: ${Colors.primary};
          color: white;
        `;
      case "Done":
        return css`
          background-color: #88ac1e;
          color: white;
        `;
    }
  }}
`;

export const Interval = styled.span`
  font-size: 11px;
`;

export const Type = styled.p`
  font-weight: bold;
  font-size: 14px;
`;
