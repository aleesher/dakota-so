import React from "react";
import styled from "styled-components";

import RemoveCircle from "@material-ui/icons/RemoveCircle";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Warning from "@material-ui/icons/Warning";
import Info from "@material-ui/icons/Info";

import Colors from "dakota-portal/dist/components/Colors";

export interface IIconProps {
  width?: string;
  height?: string;
  color?: string;
}

export const TableIcon = (
  Icon: React.ReactNode,
  color: string,
  size?: number
) => styled(Icon)`
  && {
    font-size: ${size || 22}px;
    color: ${color};
  }
`;

export const IconRemoveCircle = TableIcon(RemoveCircle, Colors.cinnabar);
export const IconCheckCircle = TableIcon(CheckCircle, Colors.limerick);
export const IconWarning = TableIcon(Warning, Colors.cinnabar);
export const IconInfo = TableIcon(Info, Colors.fiord);

export { default as DoneIcon } from "./Done";
export { default as DropIcon } from "./Drop";
export { default as HelmetIcon } from "./Helmet";
export { default as ShieldIcon } from "./Shield";
