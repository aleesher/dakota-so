import React from "react";
import styled from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

interface IProps {
  text: string;
  className?: string;
}

const ErrorMessage = ({ text, className }: IProps) => {
  return (
    <Container>
      <Text className={className}>{text}</Text>
    </Container>
  );
};

export const Container = styled.div`
  padding: 14px 22px;
  border: 1px solid ${Colors.cinnabar};
  border-radius: 6px;
  font-size: 14px;
  background-color: ${Colors.lightCinnabar};
`;

export const Text = styled.span`
  color: ${Colors.cinnabar};
`;

export default ErrorMessage;
