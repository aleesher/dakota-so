import styled, { css } from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";
import { ORDER_HEIGHT } from "../../../constants";

export const DayWithActionMenuWrapper = styled.div`
  :hover {
    .order-action-menu-button {
      display: block;
    }
  }
`;

export const OrderDataWrapper = styled.div`
  position: relative;
  padding: 10px;
  overflow: hidden;
  user-select: none;

  & > svg {
    position: absolute;
    top: 2px;
    right: 2px;
    fill: ${Colors.cinnabar};
  }
`;

export const DayOrderStatus = styled.div`
  position: relative;
  margin-bottom: 7px;
  height: 19px;
  line-height: 19px;
  padding-left: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.color};

  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${props => props.color};
  }
`;

export const FirstOrderInfoLine = styled.div`
  margin-bottom: 6px;
  color: ${Colors.arsenic2};
  font-size: 14px;
  font-weight: bold;
`;

export const SecondOrderInfoLine = styled.div`
  color: ${Colors.gullGrey2};
  font-size: 14px;
  font-weight: bold;
`;

export const OrderType = styled.div`
  position: absolute;
  left: 120px;
  top: 35px;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  text-transform: capitalize;
  color: ${Colors.dimGray};
`;

export const OrderActionMenuButton = styled.div`
  position: absolute;
  right: 40px;
  top: ${ORDER_HEIGHT / 2 - 14}px;
  display: none;
  padding-top: 4px;
  height: 24px;
  width: 36px;
  text-align: center;
  background-color: white;
  z-index: 1;
  cursor: pointer;
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DraggableOrderWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const DroppableOrderWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ResizableOrderWrapper = styled.div`
  border-radius: 5px;
  border: 2px solid ${Colors.dodgerBlue};
  height: ${ORDER_HEIGHT}px;
  box-sizing: border-box;
  background-color: white;
`;

const BASE_ORDER = styled.div`
  position: absolute;
  top: 8px;
  left: ${({ start }) => start}px;
  width: ${({ width }) => width}px;
  height: ${ORDER_HEIGHT}px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: white;
`;

export const SelectedOrderWrapper = styled(BASE_ORDER)`
  border: 2px solid ${Colors.dodgerBlue};
`;

export const SimpleOrderWrapper = styled(BASE_ORDER)`
  border: 2px solid white;
  box-shadow: 0 16px 38px 0 rgba(175, 175, 175, 0.35);
`;

export const DisabledOrderWrapper = styled(BASE_ORDER)`
  background-color: ${Colors.athensGray};
  border: 2px solid ${Colors.gullGrey};
`;
