import React from "react";
import styled from "styled-components";

import Plus from "@material-ui/icons/Add";

import Colors from "dakota-portal/dist/components/Colors";

interface IProps {
  onClick: () => void;
}

const AddTerm = ({ onClick }: IProps) => (
  <Button onClick={onClick}>
    <Content>
      <IconWrapper>
        <Plus fontSize="inherit" />
      </IconWrapper>
      <Text>Termijn toevoegen</Text>
    </Content>
  </Button>
);

export const Button = styled.button`
  height: 100%;
  width: 100%;
  border: 2px dashed ${Colors.pattensBlue};
  background-color: transparent;
  cursor: pointer;
`;

export const Content = styled.p`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.span`
  font-size: 36px;
  color: ${Colors.heather};
`;

export const Text = styled.span`
  font-size: 14px;
  text-decoration: underline;
`;

export default AddTerm;
