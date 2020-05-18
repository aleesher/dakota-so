import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const StyledCurrentTimeline = styled.div`
  position: absolute;
  left: ${({ x }) => x}px;
  width: 2px;
  height: 100%;
  background-color: ${Colors.dodgerBlue};
`;
