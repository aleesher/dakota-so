import styled from "styled-components";
import Colors from "dakota-portal/dist/components/Colors";

export const CheckboxLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  color: ${Colors.raven};

  svg {
    margin-right: 50px;
    cursor: pointer;
    user-selection: none;
  }
`;
