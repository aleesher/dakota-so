import React from "react";
import { ITimeScale } from "../../../types";
import { TimeScalePoint, TimeScaleWrapper } from "./styles";

interface IProps {
  timeScale: ITimeScale;
}

const CalendarTimeScale: React.FC<IProps> = ({ timeScale }) => (
  <TimeScaleWrapper>
    {timeScale.getValues().map(v => (
      <TimeScalePoint key={v.label} position={v.x}>
        <div>{v.label}</div>
      </TimeScalePoint>
    ))}
  </TimeScaleWrapper>
);

export default CalendarTimeScale;
