import Colors from "dakota-portal/dist/components/Colors";
import styled from "styled-components";
import { SelectedOrderWrapper, SimpleOrderWrapper } from "../DayOrder/styles";

export const DroppableOrderStackWrapper = styled.div`
  position: absolute;
  height: 100%;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  height: 100%;
`;

export const DraggableOrderStackWrapper = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  height: 100%;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
`;

export const StackPreviewWrapper = styled.div`
  position: relative;

  > div {
    border-color: ${Colors.dodgerBlue};
  }
`;

export const SelectedStackOrderWrapper = styled(SelectedOrderWrapper)`
  top: ${({ top }) => top || 8}px;
`;

export const SimpleStackOrderWrapper = styled(SimpleOrderWrapper)`
  top: ${({ top }) => top || 8}px;
`;

export const BottomStackOrderWrapper = styled(SimpleOrderWrapper)`
  top: ${({ top }) => top}px;
  box-shadow: 0 0 38px 0 rgba(175, 175, 175, 0.35);
  transition-duration: 1s;

  :hover {
    transition-duration: 1s;
    transform: translate(0, -50px);
  }
`;
