import styled from "styled-components";

import MaterialSearchIcon from "@material-ui/icons/Search";

import Colors from "dakota-portal/dist/components/Colors";

export const Icon = styled(MaterialSearchIcon)`
  opacity: 30%;
  top: 2px;
  left: 0;
  position: absolute;
`;

export const Input = styled.input`
  padding-left: 34px;
  border: 0;
  font-size: 20px;
  opacity: 30%;
`;

export const Container = styled.div<{ bgColor?: string; color?: string }>`
  position: relative;
  color: ${props => props.color || Colors.arsenic} ${Input} {
    background-color: ${props => props.bgColor || Colors.heather};
  }
`;
