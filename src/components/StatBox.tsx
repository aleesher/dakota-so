import React from "react";
import ProgressBar from "react-customizable-progressbar";

import Colors from "dakota-portal/dist/components/Colors";

import { StatCard, Stat } from "../pages/home/styles";

interface IProps {
  title: string;
  progress: number;
  color: string;
}

const StatBox: React.FC<IProps> = ({
  color = Colors.cinnabar,
  progress = 10,
  title = "open"
}) => {
  const steps = 1000;
  return (
    <StatCard color={color}>
      <h4>{title}</h4>

      <ProgressBar
        radius={50}
        progress={progress > steps ? steps : progress}
        strokeWidth={10}
        strokeColor={color}
        strokeLinecap="butt"
        trackStrokeWidth={10}
        trackStrokeLinecap="butt"
        cut={180}
        rotate={-180}
        steps={steps}
      >
        <Stat color={color}>{progress}</Stat>
      </ProgressBar>
    </StatCard>
  );
};

export default StatBox;
