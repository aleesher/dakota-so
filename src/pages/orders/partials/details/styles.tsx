import styled from "styled-components";

import DeleteIcon from "@material-ui/icons/Delete";
import Calendar from "@material-ui/icons/CalendarToday";
import AccessTime from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from "@material-ui/icons/Edit";

import { Card, Select, Input, Date } from "dakota-portal/dist/components";
import { Label } from "dakota-portal/dist/components/Input/styles";
import Colors from "dakota-portal/dist/components/Colors";
import { Link } from "react-router-dom";

export const FormCard = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 16px 38px 0 rgba(0, 0, 0, 0.08);
  padding: 30px;
`;

export const AddressCard = styled(Card)`
  padding: 0;
  display: block;

  && .iconText > div {
    padding: 0px !important;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 30px 10px 20px;
`;

export const PushRight = styled.div`
  margin-left: auto;
`;

export const CalendarIcon = styled(Calendar)`
  color: ${Colors.lightGray};
`;

export const AddressHeader = styled(Card)`
  box-shadow: none;
  border-radius: 0;
  margin-bottom: 1;
  position: relative;
`;

export const AddressTitle = styled.p`
  border: 0;
  box-shadow: none;
`;

export const AddresAction = styled.p`
  margin-left: auto;
  text-decoration: underline;
`;

export const AddressContent = styled.div`
  padding: 20px;
`;

export const FormLabel = styled(Label)`
  margin-top: 20px;
  margin-right: 40px;
  min-width: ${props => (props.size ? "120px" : "170px")};
  font-size: 16px;
  font-weight: normal;
  color: ${Colors.lynch};
`;

export const ProblemCard = styled.div`
  box-sizing: border-box;
  height: 137px;
  width: 900px;
  border: 2px solid ${Colors.pattensBlue};
  border-radius: 5px;
  background-color: ${Colors.snow};
  margin-left: 20px;
  font-weight: normal;
  position: relative;
`;

export const ProblemParent = styled.div`
  /* background-color: green; */
  position: relative;
  border-bottom: 1px solid ${Colors.pattensBlue};
`;

export const ProblemWrapper = styled.div`
  display: flex;
  padding: 20px;
  margin: 20px;
  flex-direction: column;
  box-sizing: border-box;

  > div {
    width: calc(100% - 40px);
    box-sizing: border-box;
    margin-top: 20px;
  }
`;

export const ProblemHead = styled.div`
  border-bottom: 1px solid ${Colors.pattensBlue};
  padding: 10px;
`;

export const ProblemContent = styled.div`
  display: block;
  border-top: 1px;
  padding: 20px;
`;

export const ProblemIcon = styled(DeleteIcon)`
  margin-left: 7px;
  margin-top: 7px;
`;

export const ProblemEditIcon = styled(EditIcon)`
  margin-left: 7px;
  margin-top: 7px;
`;

export const ProblemDelete = styled.div`
  height: 38px;
  width: 38px;
  background-color: white;
  box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  align-content: "center";
  position: absolute;
  right: -15px;
  top: calc(50% - 44px);
`;

export const ProblemEdit = styled(ProblemDelete)`
  top: 50%;
`;

export const ProblemTitle = styled.div`
  font-size: 16px;
  margin-left: 10px;
  color: ${Colors.lynch};
  margin-top: 10px;
  min-width: 145px;
  margin-bottom: 10px;
`;

export const ProblemTextarea = styled(Input)`
  opacity: 0.6;
  color: #4c5760;
  font-size: 14px;

  .input-wrapper {
    box-sizing: border-box;

    > div {
      min-height: 137px;
    }
  }
`;

export const ProblemText = styled.p`
  opacity: 0.6;
  color: ${Colors.fiord};
  font-size: 14px;
`;

export const FormSmallLabel = styled(Label)`
  color: ${Colors.arsenic};
  font-size: 16px;
  justify-content: "center";
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 20px;
`;

export const FormSmallWrapper = styled(Label)`
  color: ${Colors.arsenic};
  font-size: 16px;
  display: flex;
`;

export const FormGroup = styled.div`
  display: flex;
`;

export const FormInput = styled(Input)`
  width: 330px;
`;

export const FormInputIcon = styled(Input)`
  width: 330px;

  && .IconEuro {
    height: 54px;
    background-color: ${Colors.aliceBlueGrayish};
    align-items: center;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 5px;
  }
`;

export const FormTexts = styled.p`
  height: 50px;
  width: 330px;
  font-weight: normal;
  margin-top: 20px;
  color: ${props =>
    props.color === "blue" ? Colors.dodgerBlueLight : Colors.fiord};
  text-decoration: ${props => (props.color === "blue" ? "underline" : "none")};
`;

export const FormSelect = styled(Select)`
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

export const FormSmallInput = styled(Input)`
  width: 70px;
`;

export const FormText = styled.p`
  margin-top: 17px;
  color: ${props =>
    props.color === "primary" ? Colors.dodgerBlue : Colors.lynch};
  font-weight: ${props => (props.color === "primary" ? "700" : "300")};
`;

export const FormLink = styled(FormText)`
  color: ${Colors.dodgerBlue};
  text-decoration: underline;
  cursor: pointer;
`;

export const FormWrapper = styled.div`
  && {
    display: flex;
    margin-bottom: 15px;
    margin-top: 10px;
  }
`;

export const ListWrapper = styled.div`
  && {
    display: flex;
    margin-bottom: -10px;
  }
`;

export const ActionCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .fEqfBR {
    margin-left: auto;
  }
  .LxCAy {
    margin-top: 20px;
  }

  .workorder {
    margin-top: 16px;
  }
`;

export const FormDate = styled(Date)`
  width: 330px;
`;

export const FormTime = styled.div`
  position: relative;
  width: 400px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const FormSpan = styled.span``;

export const StyledInput = styled(Input)`
  && {
    width: 329px;
    box-sizing: border-box;
    position: relative;
  }

  ${({ disabled }) => (disabled ? `` : ``)};
`;

export const TimeIcon = styled(AccessTime)`
  position: absolute;
  top: calc(50% - 10.5px);
  right: 40px;
  color: ${Colors.lightGray};
`;

export const FormWrapperSelect = styled.div`
  && {
    display: flex;
    margin-bottom: 5px;
  }
`;

export const ContentCard = styled.div`
  height: auto;
  border-radius: 4px;
  background-color: ${Colors.aliceBlueGrayish};
  padding: 13px 20px 0px 20px;
  margin-left: 40px;
  margin-top: 20px;
`;

export const ServiceWrapper = styled.div`
  padding: 20px;
  font-weight: normal;
  max-width: 500px;
  background-color: ${Colors.aliceBlueGrayish};
  border-radius: 4px;
`;

export const ServiceUnorderedList = styled.ul`
  /* display: flex; */
  font-weight: normal;
`;

export const ServiceList = styled.li`
  width: 300px;
  /* margin-right: 20px; */
  font-size: 16px;
  /* margin-top: 15px; */
  /* margin-bottom: 15px; */
  font-weight: normal;
`;

export const ServiceSpan = styled(Link)`
  margin-left: 100px;
  color: ${Colors.dodgerBlue};
  font-size: 16px;
  text-decoration: underline;
  text-align: center;
  font-weight: normal;
`;

export const ServiceAnchor = styled.div`
  display: flex;
  font-weight: normal;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const DocumentWrapper = styled.div`
  && .alignIcon {
    position: relative;
    margin-top: 5px;
  }
`;
export const DocumentHead = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Flex = styled.div`
  display: flex;
`;
export const DocumentButton = styled.div`
  margin-left: auto;
`;
export const Search = styled.input`
  padding-left: 50px;
  border: 0;
  color: ${Colors.arsenic};
  font-size: 20px;
  opacity: 30%;
`;
export const DocumentSearch = styled.div`
  display: flex;
`;

export const SearchIcons = styled(SearchIcon)`
  position: absolute;
  top: 2px;
  left: 0;
  margin-left: 20px;
  opacity: 30%;
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

export const MenuCard = styled.div`
  margin-left: 20px;

  && .replyIcon {
    color: ${Colors.dodgerBlue};
  }
`;

export const Billing = styled.div`
  padding-top: 6px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const BillingContentWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const BillingTable = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const BillingHead = styled.div`
  margin-left: auto;
  margin-bottom: 20px;

  && .faded {
    background-color: ${Colors.lynch};
  }
`;

export const SearchResultWrapper = styled.div`
  margin-top: 30px;
`;
