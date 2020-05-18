import styled, { css } from "styled-components";

import { IPosition } from "./SubcomplexMenu";

export const Container = styled.button<IPosition>`
  position: absolute;
  ${props => css`
    top: ${props.position.top};
    right: ${props.position.right};
  `}
  bottom: auto;
  line-height: 0;
  letter-spacing: 1px;
  font-size: 18px;
  font-family: initial;
  font-weight: bold;
  color: inherit;
  cursor: pointer;
`;
