import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const TimeScaleWrapper = styled.div`
  position: relative;
  height: 50px;
  border-bottom: 1px solid ${Colors.pattensBlue};
  box-sizing: border-box;
`;

export const TimeScalePoint = styled.div`
  position: absolute;
  left: ${({ position }) => position}px;
  bottom: 10px;
  color: ${Colors.arsenic2};
  font-size: 14px;

  &:not(:first-child) {
    div {
      margin-left: -15px;
    }
  }

  &:after {
    border-right: solid 1px ${Colors.linkWater};
    position: absolute;
    content: "";
    bottom: -10px;
    left: 0;
    width: 2px;
    height: 7px;
  }
`;
