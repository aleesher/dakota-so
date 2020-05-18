import * as React from "react";

import { CustomStyle } from "../../components/GeneralButton/style";

interface IProps {
  title: string;
  url: string;
  className?: string;
}

const GeneralButton = (props: IProps) => (
  <CustomStyle className={props.className}>{props.title}</CustomStyle>
);

export default GeneralButton;
