import React from "react";
import styled, { css } from "styled-components";
import Link from "react-router-dom/Link";

import Grid from "@material-ui/core/Grid";
import MuiEditIcon from "@material-ui/icons/Edit";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import {
  Button,
  Card,
  Colors,
  SlideModal
} from "dakota-portal/dist/components";
import DakotaInput from "dakota-portal/dist/components/Input";

import { ExtendedCardHeader } from "../../../components/ExtendedCard";
import { CalculatorIcon } from "./details/CalculatorSvg";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const GeneralStatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Right = styled.div`
  float: right;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const ItemTitle = styled.div`
  color: ${Colors.gullGrey};
  padding-top: ${({ paddingTop = 10 }) => paddingTop}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
`;

export const PromotedModalWrapper = styled.div`
  padding: 5px 15px;
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

export const PromotedFieldModalSubmitButton = styled(Button)`
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

export const CheckBoxContainer = styled(Grid)`
  && {
    border: ${Colors.pattensBlue} solid 1px;
    padding: 10px;
    border-radius: 3px;
    margin: 15px;

    label span {
      padding: 4px;
    }
  }
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

export const GeneralStatusItem = styled.div<{ last: boolean }>`
  width: 100%;
  ${({ last }) =>
    last &&
    css`
      margin-left: 20px;
    `}
`;

export const CustomModal = styled(SlideModal)`
  && {
    margin: 0;
  }
`;

export const DialpadIcon = styled(CalculatorIcon)`
  color: ${Colors.fiord};
  margin-left: 8px;
  && {
    font-size: 14px;
  }
`;

export const Wrapper = styled(({ content, ...props }) => <Grid {...props} />)`
  && {
    width: 100%;
    margin-top: 10px;
    font-size: ${({ content }) => (content ? "14px" : "16px")};
  }
`;

export const ItemLink = styled(Link)`
  color: ${Colors.dodgerBlue};
  font-size: 14px;
`;

export const EditIcon = styled(({ ...props }) => <MuiEditIcon {...props} />)`
  && {
    font-size: 18px;
    border-radius: 10%;
    padding: 5px;
    margin: 12px 0px 12px 6px;
  }
`;

export const ItemData = styled.div<{
  ok?: boolean;
  warn?: boolean;
  danger?: boolean;
  good?: boolean;
}>`
  color: ${({ ok, warn, danger, good }) =>
    ok
      ? Colors.dodgerBlue
      : danger
      ? Colors.cinnabar
      : warn
      ? Colors.lightningYellow
      : good
      ? Colors.oliveDrab
      : Colors.fiord};
`;

export const RoofRight = styled(Grid)`
  padding: 12px;
`;

export const ItemTopic = styled(ItemData)<{
  label?: boolean;
  ok?: boolean;
  warn?: boolean;
  danger?: boolean;
  good?: boolean;
  spaced?: boolean;
  tb?: boolean;
}>`
  font-size: 15px;
  display: flex;
  align-items: center;

  background-color: ${({ ok, warn, danger, good }) =>
    ok
      ? Colors.pattensBlueLighter
      : danger
      ? Colors.sunsetOrange + "3b"
      : warn
      ? Colors.goldenPoppy + "3b"
      : good
      ? Colors.deYork + "3b"
      : Colors.white};

  margin-top: ${({ spaced }) => (spaced ? "10px" : "0px")};

  ${({ ok, tb }) =>
    (ok || tb) &&
    `
    text-align: center;
    display: inline-block;
   `}
   
  ${({ label }) =>
    label &&
    `
    color: ${Colors.gullGrey};
  `}
   
  ${({ spaced }) =>
    spaced &&
    `
      padding: 5px;
      min-width: 180px;
    `};

  ${({ tb }) =>
    tb &&
    `
      min-width: 40px;
      font-size: 12px;
      padding: 5px;
  `}

  ${({ ok, warn, danger, good }) =>
    (ok || warn || danger || good) &&
    `
      line-height: 1;
      border-radius: 2px;
      padding: 5px 8px;
  `}
`;

export const RightItem = styled.div`
  display: flex;
  align-items: center;

  sup {
    font-size: 10px;
  }
`;

export const RightPadding = styled.div`
  padding-left: 40px;
`;

export const LevelCard = styled(Card)`
  display: inline-block;
  padding: 0;
  min-width: ${({ full }) => (full ? "1040px" : "500px")};
  width: 100%;
  margin-right: ${props => (props.isLast ? 0 : "16px")};
  margin-bottom: 16px;
  && #dakota-table {
    margin: 0px 0 16px;
    tbody tr:first-child,
    thead tr:first-child {
      padding-left: 55px !important;
      text-align: left;
    }

    td:first-child {
      padding-left: 0px;
    }
    th:first-child {
      padding-left: 40px;
    }

    thead {
      background-color: ${Colors.aliceBlueGrayish};
      box-shadow: none;
      border-bottom: none;
      tr {
        border-bottom: none;
        th {
          border-bottom: none;
          padding: 14px 10px;
        }
      }
    }
  }
`;

export const LevelHeader = styled(ExtendedCardHeader)`
  padding: 12px 10px 7px 40px;
  min-height: 56px;
`;

export const InputWrapper = styled.div<{ isRadio?: boolean; wrap?: boolean }>`
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
  ${({ wrap }) =>
    wrap &&
    css`
      border: 2px solid ${Colors.pattensBlue};
      border-radius: 5px;
      padding: 10px;
    `}
`;

export const SubmitButton = styled(Button)`
  && {
    display: flex;
    font-size: 18px;
    text-transform: none;
    margin: 32px 0 32px auto;
    font-size: 14px;
  }
`;

export const LevelData = styled.div<{ edit?: boolean; tb?: boolean }>`
  display: flex;
  align-items: flex-start;
  padding: ${({ tb }) => (tb ? "0px" : "16px 40px")};
  font-size: 14px;
  min-height: ${({ edit }) => (edit ? "400px" : "300px")};
  border-top: ${({ tb }) => (tb ? "none" : `1px solid ${Colors.pattensBlue}`)};
`;

export const CollapseLink = styled.p`
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;

interface ViewSwitchButtonI {
  active?: boolean;
}

export const ViewSwitchButton = styled.button`
  cursor: pointer;
  height: 29px;
  width: 62px;
  border-radius: 20px;
  background-color: ${({ active }: ViewSwitchButtonI) =>
    active ? Colors.white : "transparent"};
  border: none;
  outline: none;
  font-size: 10px;
  font-weight: 700;
  color: ${({ active }: ViewSwitchButtonI) =>
    active ? Colors.fiord : "rgba(76, 87, 96, 0.5)"};
`;

export const ViewSwitchContainer = styled.div`
  margin-right: 100px;
  border-radius: 18px;
  background-color: ${Colors.aliceBlue}96;
`;

export const Tab = styled.div`
  margin-right: 100px;
`;

export const TitleCount = styled.span`
  font-size: 12px;
  line-height: 20px;
  min-width: 20px;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 18px;
  margin-left: 4px;
  color: ${Colors.white};
  background-color: ${Colors.cinnabar};
`;

export const AdviceText = styled.div`
  font-size: 14px;
  font-weight: ${({ heavy }: { heavy: boolean }) => (heavy ? "600" : "400")};
  color: ${({ heavy }) => (heavy ? Colors.black : Colors.fiord)};
  margin-bottom: 10px;
`;

export const AccordionPanelDetails = styled(MuiExpansionPanelDetails)`
  && {
    display: block !important;
    padding: 8px 53px 30px !important;
    position: relative;
  }
  &:last-child {
    margin-top: -10px !important;
  }

  &:first-child {
    margin-top: 25px !important;
  }
`;
