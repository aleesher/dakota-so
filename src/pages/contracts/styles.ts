import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";
import MuiCloseIcon from "@material-ui/icons/Close";

import Input from "dakota-portal/dist/components/Input";
import {
  Label,
  InputWrapper
} from "dakota-portal/dist/components/Input/styles";
import { Select, Button, Date } from "dakota-portal/dist/components";
import Colors from "dakota-portal/dist/components/Colors";

import { Title } from "../home/styles";

export const InputWrapperIndex = styled(Input)`
  width: 100%;
  background-color: ${Colors.white};
`;

export const DateInput = styled(Date)`
  & {
    width: 100%;
    margin-bottom: 24px;
    border: 2px solid ${Colors.lightGray};
    border-radius: 5px;
    padding: 2px;
    box-sizing: border-box;
    & {
      width: 683px;
    }
  }
`;

export const AccordionContainer = styled.div`
  position: relative;
  padding: 25px;
  background-color: ${Colors.blackSqueeze};
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

export const AppointmensSelect = styled(Select)`
  margin-right: 16px;
  width: 76px;

  > div {
    padding-left: 6px;
    border-width: 2px !important;
    border-radius: 4px !important;
  }
`;

export const AppointmensButton = styled(Button).attrs({
  themeColor: Colors.eclipse,
  color: "primary"
})`
  padding: 12px 26px !important;
  margin-right: auto !important;
  font-weight: bold !important;
  color: white !important;

  &:first-of-type {
    margin-right: 8px !important;
  }

  span {
    white-space: nowrap;
  }
`;

export const AppointmensFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const AppointmensFilterLabel = styled.span`
  margin-right: 14px;
`;

export const AddressContent = styled.div`
  padding: 20px;
`;

export const StyledSelect = styled(Select)`
  && {
    margin-bottom: 20px;
  }
  .index__value-container {
    height: 50px;
  }
  .index__control {
    height: 60px;
    border: 2px solid ${Colors.pattensBlue};
    border-radius: 5px;
    box-shadow: none;
  }

  .index__control:hover {
    border: 2px solid ${Colors.fiord};
  }

  .index__control--is-focused {
    border: 2px solid ${Colors.fiord};
  }
`;

export const SubmitButton = styled(Button)`
  && {
    display: flex;
    font-size: 18px;
    text-transform: none;
    background-color: ${({ color }) => (color ? color : Colors.fiord)};
    margin: 32px 0 32px auto;
  }

  &&:hover {
    background-color: ${({ color }) => (color ? color : Colors.fiord)};
  }
`;

export const ErrorMessage = styled.p`
  color: ${Colors.cinnabar};
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const FormInput = styled(Input)`
  width: 330px;
  background-color: white;
`;

export const FormLabel = styled(Label)`
  margin-top: 20px;
  margin-right: auto;
  min-width: ${props => (props.size ? "120px" : "170px")};
  font-size: 16px;
  font-weight: normal;
  color: ${Colors.lynch};
`;

export const FormValue = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  box-sizing: border-box;
`;

export const FormCurrencyWrapper = styled(FormValue)`
  border: 2px solid ${Colors.pattensBlue};
`;

export const FormCurrency = styled.div`
  display: inline-block;
  margin-left: 1px;
  width: 30px;
  height: 100%;
  line-height: 50px;
  text-align: center;
  background-color: ${Colors.aliceBlueGrayish};

  + div {
    margin-bottom: 0 !important;
  }
`;

export const FormCurrencyInput = styled(FormInput)`
  width: calc(330px - 30px);

  .input-wrapper {
    border: none;
  }

  + div {
    margin-bottom: 0 !important;
  }
`;

export const FormSelects = styled(Select)`
  && {
    width: calc(100% - ${({ width = 50 }) => width}px);
    max-width: 330px;
    font-weight: normal;
    color: ${Colors.fiord};
    font-size: 16px;
    margin-top: 5px;
  }

  .type-select__control {
    height: ${({ height = 56 }) => height}px;
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

export const FormSelect = styled(Select)`
  flex: 1;
  margin-bottom: -5px;
  background-color: white;

  > div {
    padding: 8px 12px;
    width: 330px;
    border-width: 2px !important;
    border-radius: 5px !important;
  }
`;

export const FormDate = styled(Date)`
  width: 330px;
`;

export const SubTitle = styled.h3`
  margin-top: 15px;
  margin-bottom: 18px;
  padding-bottom: 14px;
  font-weight: bold;
  border-bottom: 1px solid ${Colors.athensGray};
`;

export const DocumentWrapper = styled.div``;

export const DocumentHead = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CloseIcon = styled(MuiCloseIcon)`
  font-size: 16px;
  cursor: pointer;
`;

export const IndexFormWrapper = styled.div`
  && {
    margin-bottom: 15px;
    flex: 1;
  }
  ${InputWrapper} {
    flex: 1;
    margin-bottom: 20px;
  }
`;

export const FormWrapper = styled(IndexFormWrapper)`
  && {
    display: flex;
  }
`;

export const Search = styled.input`
  padding-left: 24px;
  border: 0;
  color: ${Colors.arsenic};
  font-size: 20px;
  opacity: 30%;
`;

export const DocumentSearch = styled.div`
  position: relative;
`;

export const SearchIcons = styled(SearchIcon)`
  opacity: 30%;
  top: 2px;
  left: 0;
  position: absolute;
`;

export const DocumentButton = styled.div`
  margin-left: auto;
`;

export const DocumentBody = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 16px 38px 0 rgba(0, 0, 0, 0.08);
`;

export const DocumentFooter = styled.div`
  padding: 20px;
  && .footerText {
    display: flex;
    justify-content: center;
  }
  && .footText {
    margin-top: 4px;
  }
`;

export const ModalHeadTitle = styled(Title)`
  margin: 5px 5px 15px;
  font-size: 24px;
  color: #4c5760;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  padding: 5px 0;
  line-height: 1.2;
  border-bottom: solid 1px ${Colors.lightGray};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  z-index: 99999;
  background-color: ${Colors.white};
  opacity: 0.5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
