import styled from "styled-components";
import { Link } from "react-router-dom";

import Colors from "dakota-portal/dist/components/Colors";

export const Footer = styled.div`
  background-color: ${Colors.fiord};
  height: 80px;
  width: 100%;
  text-align: right;
  color: ${Colors.white};
  font-size: 14px;
  padding: 30px;
  box-sizing: border-box;
`;

export const FooterLink = styled(Link)`
  display: inline-block;
  color: ${Colors.white};
  margin: 0 5px;
`;

export const P = styled.p`
  line-height: 20px;
  margin-bottom: 15px;
  font-size: 14px;
`;

export const B = styled.p`
  line-height: 20px;
  font-size: 15px;
  font-weight: 500;
`;

export const UL = styled.ul`
  list-style: disc;
  padding-left: 40px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 20px;
`;
