import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import MuiCloseIcon from "@material-ui/icons/Close";
import Settings from "@material-ui/icons/Settings";
import Grid from "@material-ui/core/Grid";
import MaterialInputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { ModalBox } from "dakota-portal/dist/components/ModalWrapper";
import Colors from "dakota-portal/dist/components/Colors";
import { Card, Select, Button, Input } from "dakota-portal/dist/components";
import { Td } from "dakota-portal/dist/components/SortableTable/SortableTableStyles";
import DakotaInput from "dakota-portal/dist/components/Input";

import { CardItemTypes } from "../serviceOrder/models";

export const Title = styled.h1`
  color: ${Colors.eclipse};
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 10px;
  margin-left: 14px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  padding: 42px;
  width: 700px;
  flex-direction: column;
  overflow: scroll;
  max-height: calc(100vh - 100px);
`;

export const CheckBoxContainer = styled(Grid)`
  && label span {
    padding: 4px;
  }
`;

export const ItemTitle = styled.div`
  color: ${Colors.gullGrey};
  padding-top: ${({ paddingTop = 10 }) => paddingTop}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    margin-right: 8px;

    .control-label {
      color: ${Colors.black};
      font-size: 14px;
      font-weight: 600;
      opacity: 0.7;
    }

    .agreement-label {
      font-weight: 600;
    }

    .error {
      color: ${Colors.cinnabar};
    }

    &:hover {
      padding: 0;
    }
  }
`;

export const BaseRow = styled(Grid)`
  && {
    margin-top: 20px;
  }
`;
export const RowItem = styled(Grid)`
  && {
    background-color: #f1f4f6;
    padding: 0px;
    width: 400px;
    border-radius: 1px;
  }
`;

export const CPName = styled.div`
  && {
    font-weight: 600;
    padding: 6px 4px;
    font-size: 16px;
  }
`;

export const CPAction = styled.div`
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    text-decoration: none;
  }
`;

export const ARow = styled(Grid)`
  && {
    border-bottom: 1px solid ${Colors.lightGray};
    padding: 15px;
    line-height: 1.2;
  }
`;

export const StyledSelect = styled(Select)`
  && {
    width: calc(100% - ${({ width = 50 }) => width}px);
    max-width: 470px;
  }

  .type-select__control {
    height: ${({ height = 45 }) => height}px;
    border: 2px solid ${Colors.pattensBlue};
    border-radius: 5px;
    box-shadow: none;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 16px;
  }

  .type-select__control--is-focused,
  .type-select__control--menu-is-open {
    border: 2px solid ${Colors.fiord};
    &:hover {
      border-color: ${Colors.fiord};
    }
  }

  .type-select__indicator-separator {
    display: none;
  }
`;

export const ModalHeader = styled(ModalWrapper)`
  display: flex;
  padding: 5px 0;
  line-height: 1.2;
  border-bottom: solid 1px ${Colors.lightGray};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
`;

export const CloseIcon = styled(MuiCloseIcon)`
  font-size: 16px;
  cursor: pointer;
`;

export const ModelHeadTagline = styled.h3`
  margin: 5px;
`;

export const ModelHeadTitle = styled(Title)`
  margin: 5px 5px 15px;
  font-size: 24px;
  color: #4c5760;
`;

export const ModalBody = styled(Grid)`
  && {
    margin-top: 10px;
    overflow: scroll;
  }
`;

export const HomePage = styled.div`
  max-width: 1200px;
`;

export const TopWrapper = styled.div`
  padding: 0px 30px;
`;

export const BottomWrapper = styled(TopWrapper)`
  margin-top: 10px;
  padding: 1px 10px 0px 36px;
`;

export const InputWrapper = styled.div<{ isRadio?: boolean; wrap: boolean }>`
  display: ${props => (props.isRadio ? "flex" : "block")};
  flex: 1;
  margin-left: 0;
  margin: 10px;

  &:nth-child(2) {
    margin-left: 24px;
  }

  ${DakotaInput} {
    flex: 1;
  }
  ${({ wrap = false }) =>
    wrap &&
    css`
      border: 2px solid ${Colors.pattensBlue};
      border-radius: 5px;
      padding: 1px;
      width: 110px;
    `}
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled(Input)`
  && {
    width: ${({ type }) =>
      type === CardItemTypes.combinedInput ? `80px` : `calc(100% - 50px)`};
    box-sizing: border-box;
    position: relative;
  }

  ${({ disabled }) => (disabled ? `` : ``)};
`;

export const StyledTextarea = styled(StyledInput)`
  && {
    min-height: 151px;
    width: ${({ fullWidth }) => (fullWidth ? `100%` : `calc(100% - 50px)`)};
  }
`;

export const Serviceorder = styled(Card)`
  padding: 0;
  display: ${({ display = "flex" }) => display};
  && table thead tr {
    background-color: ${Colors.white};
    th {
      span {
        text-transform: unset;
      }
      font-weight: 400;
    }
  }
  table.fixed_table tr td:first-child {
    font-size: 14px;
  }
`;

export const SoItem = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;
export const TData = styled(Td)<{ color: string }>`
  color: ${({ color }) => (color ? color : Colors.fiord)};
  ${({ isThemed = false }) =>
    isThemed ? `background-color: ${Colors.aliceBlueGrayish};` : ``}
  font-weight: 600;

  & > a {
    color: inherit;
  }
`;

export const ClientServiceorder = styled(Serviceorder)`
  margin-top: -8px;
  padding-top: 0px;
  padding-bottom: 1px;
`;

export const StatCard = styled(Card)`
  border-top: solid 5px ${({ color }) => (color ? color : Colors.cinnabar)};
  border-radius: 5px;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 170px;
  max-height: 100px;
  overflow: hidden;
  text-align: center;
`;

export const Stat = styled.span`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  color: ${({ color }) => (color ? color : Colors.cinnabar)};
  top: -8px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-size: 22.5px;
`;

export const SaveButton = styled(Button)`
  && {
    display: flex;
    font-size: 18px;
    text-transform: none;
    margin: 12px 0 12px auto;
    margin-top: 16px;
    font-size: 14px;
    padding: 6px 24px;
  }
`;

const RenderIcon = Icon => styled(Icon)`
  color: ${props => (props.menu ? Colors.primary : Colors.gullGrey)};
  margin-right: ${props => (props.menu ? "10px" : 0)};
  cursor: pointer;
`;

export const SettingsIcon = RenderIcon(Settings);

export const CockpitLoaderWrapper = styled.div`
  height: 481px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UnstyledLink = styled(Link)`
  color: ${Colors.fiord};
  text-decoration: none;
  cursor: pointer;
`;

export const ModalBoxs = styled(ModalBox)`
  border-radius: 5px;
`;

export const InputLabel = styled(MaterialInputLabel)`
  position: static !important;
  margin-bottom: 18px;
  font-size: 14px !important;
`;
