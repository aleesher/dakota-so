import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const StyledAdornment = styled.div`
  position: absolute;
  left: ${({ length }) => 25 + length * 9}px;
  font-size: 18px;
  color: ${({ disabled }) => (disabled ? Colors.gullGrey : Colors.arsenic)};
`;
