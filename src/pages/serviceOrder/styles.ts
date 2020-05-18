import styled from "styled-components";
import Link from "react-router-dom/Link";

import Grid from "@material-ui/core/Grid";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import AccessTime from "@material-ui/icons/AccessTime";
import Calendar from "@material-ui/icons/CalendarToday";
import Settings from "@material-ui/icons/Settings";
import Search from "@material-ui/icons/Search";
import Location from "@material-ui/icons/LocationOn";

import { Card, Colors, Button, Date } from "dakota-portal/dist/components";

export const HeaderArrow = styled(ArrowBack)`
  color: ${Colors.pattensBlue};
  font-size: 24px;
`;

export const HeaderStepWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: center;
  right: ${({ step = 1 }) => (step === 1 ? "48px;" : "100px")};
`;

export const HeaderDot = styled.div`
  background-color: ${Colors.pattensBlue};
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
`;

export const HeaderStep = styled(HeaderDot)`
  width: 50px;
  height: 50px;
  background-color: ${Colors.dodgerBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 20px;
  color: ${Colors.white};
  top: -25px;
  ${({ align = "left" }) =>
    align === "left" ? `left: -25px` : `right: -25px`};
  cursor: pointer;
`;

export const HeaderLine = styled.div`
  height: 6px;
  background-color: ${({ color }) => color};
  flex: 1;
`;

export const FormCard = styled(Card)`
  padding: 0;
  display: block;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardTitle = styled(Grid).attrs(({ xs = 12 }) => ({
  xs,
  container: true
}))`
  color: ${Colors.arsenic};
  font-size: 24px;
  padding: 30px 42px;
  ${({ hasborder = "true" }) =>
    hasborder === "true"
      ? `border-bottom: 1px solid ${Colors.pattensBlue}`
      : ``};
  position: relative;
`;

export const CardContent = styled(Grid).attrs(({ xs = 12 }) => ({
  container: true,
  item: true,
  direction: "row",
  xs,
  alignItems: "flex-start",
  justify: "space-between"
}))`
  padding: 4px 42px 24px;
`;

export const CardForm = styled(Grid)`
  margin: 10px 0;
`;

export const InformationBox = styled(Grid)`
  background-color: ${Colors.arsenic};
  color: ${Colors.white};
  border-radius: 6px;
  overflow: hidden;
  margin-top: 20px;
`;

export const InformationBoxBody = styled.div`
  padding: 20px 30px;
`;

export const InformationBoxTitle = styled(InformationBoxBody)`
  color: ${Colors.white};
  border-bottom: 1px solid ${Colors.fiord};
`;

export const InformatieRow = styled(Grid).attrs(() => ({
  xs: 12,
  container: true
}))`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RowItem = styled(Grid).attrs(() => ({
  xs: 9,
  item: true
}))`
  color: ${Colors.white};
`;

export const RowLink = styled(Grid).attrs(() => ({
  xs: 3,
  item: true
}))`
  color: ${Colors.aero};
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
`;

export const SearchButton = styled(Link)`
  && {
    border-radius: 6px;
    border: 2px solid ${Colors.lightGray};
    padding: 10px;
    font-size: 14px;
    color: ${Colors.lightGray};
    background-color: ${Colors.white};
    display: flex;
    align-items: center;
    text-decoration: none;
    position: absolute;
    right: ${({ right = "42px" }) => right};
    top: calc(50% - 22px);
  }
`;

export const SearchIcon = styled(Search).attrs(() => ({ fontSize: "small" }))`
  color: ${Colors.lightGray};
  margin-right: 8px;
`;

export const CommentWrapper = styled(Grid).attrs(() => ({
  container: true,
  xs: 12,
  direction: "column"
}))`
  position: relative;
  margin-top: 10px;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CommentText = styled.div`
  width: calc(100% - 20px);
  cursor: pointer;
  ${({ isTruncated = true }) =>
    isTruncated
      ? `white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;`
      : ``}
`;

export const CommentInfo = styled(CommentText)`
  color: ${Colors.gullGrey};
  font-style: italic;
  margin-bottom: 20px;
`;

export const CommentRemoveIcon = styled(Close).attrs(() => ({
  fontSize: "small"
}))`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: ${Colors.gullGrey};
`;

export const AddIcon = styled(Add)`
  position: absolute;
  top: 30px;
  right: 42px;
  cursor: pointer;
  color: ${Colors.black};
  transform: ${({ type = "closed" }) =>
    type === "opened" ? "rotate(45deg)" : "rotate(0deg)"};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: ${({ justify = "flex-end" }) => justify};
  ${({ marginTop = 0 }) => `margin-top: ${marginTop}px`};
`;

export const FilledButton = styled(Button)`
  && {
    text-transform: unset;
    text-decoration: none;
    padding: 10px 40px;
    font-size: 18px;
    border-radius: 7px;
    height: ${({ height = "auto" }) => height};
    margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  }
`;

export const TransparentButton = styled(FilledButton)`
  && {
    background-color: ${Colors.white};
    color: ${Colors.dodgerBlue};
    margin-right: 30px;
    border: 1px solid ${Colors.dodgerBlue};

    &:hover {
      background-color: ${Colors.white};
      color: ${Colors.dodgerBlue};
    }
  }
`;

export const TimeIcon = styled(AccessTime)`
  position: absolute;
  top: calc(50% - 10.5px);
  right: 68px;
  color: ${Colors.lightGray};
`;

export const CalendarIcon = styled(Calendar)`
  color: ${Colors.lightGray};
`;

export const SettingsIcon = styled(Settings).attrs(() => ({
  fontSize: "large"
}))`
  color: ${Colors.arsenic};
  margin: 0 42px 0 30px;
  cursor: pointer;
`;

export const ArrowIcon = styled(ArrowForward)`
  color: ${Colors.white};
  margin-left: 10px;
`;

export const DateInput = styled(Date)`
  width: 100%;
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  top: 0;
  left: 0;
`;

export const SearchResultWrapper = styled(Grid)`
  border-radius: 3px;
  border: 1px solid ${Colors.lightGray};
`;

export const ResultTopArea = styled.div`
  padding: 19px;
  border-bottom: 1px solid ${Colors.lightGray};
  display: flex;
  justify-content: space-between;
`;

export const ResultBottomArea = styled.div`
  overflow: auto;
  max-height: 300px;
`;

export const SearchResult = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  margin-top: 14px;
  cursor: pointer;
  &:hover {
    background-color: #eef1f3;
  }
`;

export const LocationIcon = styled(Location)`
  margin-right: 10px;
  color: ${Colors.gullGrey};
`;

export const ResultText = styled.div`
  color: ${Colors.gullGrey};
  font-size: 16px;
`;

export const SearchResultTitle = styled.div`
  color: ${Colors.arsenic};
  ${({ type = "major" }) =>
    type === "major" ? `font-weight: 600; font-size: 18px` : `font-size: 16px`};
`;

export const CombinedInputWrapper = styled.div`
  width: 66.66%;
  display: flex;
`;

export const CombinedInputInner = styled.div`
  width: ${({ width = 40 }) => width}%;
  display: flex;
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
  color: ${Colors.gullGrey};
`;
