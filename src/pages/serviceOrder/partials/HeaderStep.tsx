import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

import { Colors } from "dakota-portal/dist/components";

import {
  HeaderDot,
  HeaderStep,
  HeaderLine,
  HeaderStepWrapper
} from "../styles";

interface IProps {
  step: 1 | 2;
  history: any;
}

export default ({ step, history }: IProps) => {
  const lineColor = step === 1 ? Colors.pattensBlue : Colors.dodgerBlue;
  const redirectBack = () => {
    if (step === 2) {
      history.goBack();
    }
  };
  return (
    <HeaderStepWrapper step={2}>
      <HeaderLine color={lineColor} />
      <Tooltip title="Algemene Informatie" placement="bottom">
        <HeaderStep onClick={redirectBack}>1</HeaderStep>
      </Tooltip>
      {step === 1 ? (
        <HeaderDot />
      ) : (
        <Tooltip title="Werkorders" placement="bottom">
          <HeaderStep align="right">2</HeaderStep>
        </Tooltip>
      )}
    </HeaderStepWrapper>
  );
};
