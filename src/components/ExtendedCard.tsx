import React from "react";
import styled, { css } from "styled-components";

import DakotaCard from "dakota-portal/dist/components/Card";
import Colors from "dakota-portal/dist/components/Colors";

export const Card = styled(DakotaCard)`
  display: block;
  padding: 0;
  margin-top: 28px;

  #dakota-table {
    margin: 0;
  }

  #dakota-table .table-header {
    background-color: rgba(221, 226, 230, 0.4);
  }

  #dakota-table td:first-child,
  #dakota-table th:first-child {
    padding-left: 28px;
  }

  #dakota-table th:last-child {
    text-align: right;
    padding-right: 28px;
  }

  #dakota-table td:last-child {
    text-align: right;
    padding-right: 36px;
  }
`;

export const ExtendedCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
`;

export const Title = styled.h4<{ count: boolean }>`
  color: ${Colors.fiord};
  font-weight: 600;
  margin-right: ${({ count }) => (count ? "-5px" : "10px")};
  font-size: 14px;
`;

export const Toggle = styled.span`
  color: ${Colors.fiord};
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
`;

interface ExtendedCardBodyI {
  isOpened?: boolean;
  noPadding?: boolean;
}

export const ExtendedCardBody = styled.div`
  display: block;
  padding: 0;
  border-top: 1px solid ${Colors.pattensBlue};
  max-height: 0;
  overflow: hidden;
  opacity: 0;

  ${({ isOpened }: ExtendedCardBodyI) =>
    isOpened &&
    css`
      max-height: none;
      opacity: 1;
      padding: ${(props: ExtendedCardBodyI) =>
        props.noPadding ? "0" : "20px 28px"};
      transition: opacity 0.6s;
    `}
`;

interface IChildrenProps {
  isOpened: boolean;
  toggle: (isOpened: boolean) => void;
}

interface IToggleProps {
  hasToggle?: boolean;
  children: (childrenProps?: IChildrenProps) => React.ReactElement;
}

interface IToggleOffProps extends IToggleProps {
  children: any;
}

const ExtendedCard = ({
  hasToggle = false,
  children
}: IToggleProps | IToggleOffProps) => {
  const [isOpened, toggle] = React.useState(false);
  return hasToggle ? (
    <Card>{children({ isOpened, toggle })}</Card>
  ) : (
    <Card>{children}</Card>
  );
};

export default ExtendedCard;
