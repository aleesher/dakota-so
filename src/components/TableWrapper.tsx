import styled from "styled-components";
import { Link } from "react-router-dom";
import { ModalBox } from "dakota-portal/dist/components/ModalWrapper";

import {
  Button,
  Card,
  Colors,
  SlideModal
} from "dakota-portal/dist/components";

export const TableHeaderWrapper = styled.div`
  margin: 24px;
  display: flex;
  position: relative;

  .page-header h1 {
    font-size: 22px;
  }

  && .control {
    margin-right: 20px;
    min-width: 150px;
    height: 40px;
  }

  && .buttonLink {
    text-decoration: none;
  }
`;

export const TableWrapper = styled.div`
  margin-right: -45px;
  margin-left: -45px;
  margin-bottom: 20px;
`;

export const TableControl = styled.div`
  display: flex;
`;

export const ModalBoxs = styled(ModalBox)`
  /* width: 80% !important; */
  border-radius: 5px;
`;

export const TableHeaderButton = styled(Button)`
  && {
    margin: 15px 20px 14px 0px;
    text-transform: unset;
    font-weight: 600;
    white-space: nowrap;
  }
`;

export const TableHeaderLink = styled(Link)`
  text-decoration: none;
`;
