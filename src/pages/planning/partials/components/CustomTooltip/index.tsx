import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import Colors from "dakota-portal/dist/components/Colors";

const commonArrowStyles = {
  content: "''",
  position: "absolute",
  left: "50%",
  marginLeft: -12,
  borderWidth: 12,
  borderStyle: "solid"
};

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    padding: 20,
    maxWidth: 440,
    backgroundColor: Colors.fiord,
    color: "white",
    fontSize: 20
  },
  popper: {
    opacity: 1
  },
  tooltipPlacementTop: {
    "&:after": {
      ...(commonArrowStyles as any),
      top: "calc(100% - 15px)",
      borderColor: `${Colors.fiord} transparent transparent transparent`
    }
  },
  tooltipPlacementBottom: {
    "&:before": {
      ...(commonArrowStyles as any),
      top: -10,
      borderColor: `transparent transparent ${Colors.fiord} transparent`
    }
  }
}))(Tooltip);

interface IProps {
  title: React.ReactNode;
}

const CustomTooltip: React.FC<IProps> = ({ title, children }) => (
  <HtmlTooltip
    interactive
    title={title}
    TransitionComponent={Fade}
    enterDelay={1000}
    leaveDelay={100}
  >
    {children as any}
  </HtmlTooltip>
);

export default CustomTooltip;
