import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const OrderTooltipRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const OrderTooltipField = styled.div`
  font-weight: bold;
  width: 220px;
  margin-right: 10px;
  color: ${({ color }) => color || "white"};
`;

export const OrderTooltipValue = styled.div`
  color: ${Colors.ghost};
`;
