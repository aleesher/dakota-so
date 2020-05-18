import React from "react";

import Colors from "dakota-portal/dist/components/Colors";

import { IIconProps } from ".";

export default ({
  width = "13px",
  height = "9px",
  color = Colors.goldenPoppy
}: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 13 9" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Agenda"
        transform="translate(-1149.000000, -547.000000)"
        stroke={color}
        strokeWidth="1.2"
      >
        <g id="Group-9-Copy-8" transform="translate(1150.000000, 548.000000)">
          <path
            d="M10.3476258,7 L0.652423596,7 C0.292080899,7 2.47191011e-05,6.71718803 2.47191011e-05,6.36838462 L2.47191011e-05,5.59742735 C2.47191011e-05,5.24862393 0.292080899,4.96581197 0.652423596,4.96581197 L10.3476258,4.96581197 C10.7079067,4.96581197 11.0000247,5.24862393 11.0000247,5.59742735 L11.0000247,6.36838462 C11.0000247,6.71718803 10.7079067,7 10.3476258,7 Z"
            id="Stroke-1"
            strokeLinecap="round"
          />
          <path
            d="M0.43258427,4.90598291 C0.43258427,2.19650427 2.70136517,0 5.5,0 C8.29863483,0 10.5674157,2.19650427 10.5674157,4.90598291"
            id="Stroke-3"
            strokeLinecap="square"
          />
          <path
            d="M3.26348315,0 L3.26348315,2.45299145"
            id="Stroke-5"
            strokeLinecap="round"
          />
          <path
            d="M7.7747191,0 L7.7747191,2.45299145"
            id="Stroke-7"
            strokeLinecap="round"
          />
        </g>
      </g>
    </g>
  </svg>
);
