import styled from "styled-components";
import Close from "@material-ui/icons/Close";
import Search from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";

import { Colors, Input, Button } from "dakota-portal/dist/components";
import { ModalBox as DakotaModalBox } from "dakota-portal/dist/components/ModalWrapper";

export const ModalBox = styled(DakotaModalBox)`
  border-radius: 10px 10px 0 0;
  background-color: tranparent;
  overflow: hidden;
  && {
    ${({ width }) => (width ? `width: ${width};` : ``)}
  }
`;

export const ModalHeader = styled.div`
  background-color: ${Colors.arsenic};
  color: ${Colors.white};
  padding: 38px 45px;
  font-size: 22px;
  position: relative;
`;

export const ModalCloseIcon = styled(Close)`
  position: absolute;
  top: 37px;
  right: 45px;
  color: ${Colors.white};
  font-size: 24px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 30px 45px;
  position: relative;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  padding: 12px 31px 12px 30px;
  border-radius: 4px;
  border: 2px solid ${Colors.lightGray};
  margin: 0 45px 32px;
`;

export const SearchIcon = styled(Search).attrs(() => ({ fontSize: "large" }))`
  position: absolute;
  right: 15px;
  top: 11px;
  color: ${Colors.lightGray};
`;

export const SearchInput = styled(Input)`
  width: 100%;
`;

export const TableRow = styled(Grid).attrs(() => ({ xs: 12 }))`
  padding: ${({ paddingVertical = 45 }) => paddingVertical}px 45px;
  border-bottom: 1px solid ${Colors.lightGray};

  &:last-child {
    border-bottom: 0;
  }
`;

export const TableText = styled.div`
  color: ${Colors.arsenic};
  font-size: 18px;
`;

export const TablePrimaryText = styled(TableText)`
  font-weight: 600;
  font-size: 20px;
`;

export const TableButton = styled(Button)``;
