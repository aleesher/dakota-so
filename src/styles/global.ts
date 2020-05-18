import styled, { createGlobalStyle, css } from "styled-components";

import Colors from "dakota-portal/dist/components/Colors";

import { SIZE } from "../constants";

const globalStyles = css`
  body {
    color: ${Colors.fiord};
    background-color: ${Colors.white};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
  .rbc-row-content {
    z-index: auto !important;
  }
  .rbc-overlay {
    max-height: 100% !important;
    overflow: auto !important;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${SIZE.laptop}px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${SIZE.laptop}px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const Title = styled.h3`
  margin: 40px;
  font-size: 28px;
  font-weight: 500;
  color: ${Colors.fiord};

  @media (max-width: ${SIZE.mobileLg}px) {
    font-size: 24px;
    margin: 20px;
  }
`;

export const Aligned = styled.div`
  display: flex;
  align-items: center;
`;

export const MediumSpan = styled.span`
  font-weight: 500;
`;

export const PageHeader = styled(Aligned)`
  width: ${({ width }) => width || "auto"};
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${Colors.fiord};
`;

export default createGlobalStyle`
  ${globalStyles}
`;
