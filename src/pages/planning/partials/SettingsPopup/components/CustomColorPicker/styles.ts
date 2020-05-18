import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const CurrentColor = styled.div<{ color: string }>`
  width: 137px;
  height: 49px;
  background-color: ${({ disabled, color }) =>
    disabled ? Colors.gullGrey : color};
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;
