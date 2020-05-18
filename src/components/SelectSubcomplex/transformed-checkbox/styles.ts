import styled from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

export const Container = styled.div`
  padding: 14px;
`;

export const Button = styled.button`
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: 2px solid ${Colors.primary};
  border-radius: 2px;
  background-color: white;
  outline: none;
  cursor: pointer;
`;

export const Dots = styled.span`
  position: absolute;
  top: -2px;
  left: -1px;
  line-height: 0;
  font-family: initial;
  font-size: 34px;
  letter-spacing: -3px;
  color: ${Colors.primary};
`;
