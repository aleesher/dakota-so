import React from "react";

import Colors from "dakota-portal/dist/components/Colors";

import { IIconProps } from ".";

export default ({
  width = "14px",
  height = "10px",
  color = Colors.limerick
}: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 14 10" version="1.1">
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
    >
      <g
        id="Agenda"
        transform="translate(-983.000000, -486.000000)"
        stroke={color}
        strokeWidth="2.4"
      >
        <polyline
          id="Stroke-1-Copy"
          points="985 490.837802 988.45131 494 995 488"
        />
      </g>
    </g>
  </svg>
);
