import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const OrderItemInfo = styled.div`
  margin-left: 27px;

  div {
    height: 21px;
    line-height: 21px;
    color: ${Colors.gullGrey2};
    font-size: 16px;
    font-weight: bold;
  }

  div:nth-child(2) {
    color: ${Colors.arsenic2};
  }
`;

export const OrderItemType = styled.div`
  margin-right: 97px;
  margin-left: auto;
  height: 34px;
  width: 105px;
  border-radius: 2px;
  background-color: ${Colors.aliceBlue3};

  color: ${Colors.dodgerBlue};
  font-size: 14px;
  line-height: 34px;
  text-align: center;
  font-style: italic;
  font-weight: 500;
  text-transform: capitalize;

  ${p =>
    p.isLocked &&
    `
    background-color: ${Colors.lightGray};
    color: ${Colors.gullGrey};
  `}
`;
