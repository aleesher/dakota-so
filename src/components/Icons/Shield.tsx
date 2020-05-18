import React from "react";

import Colors from "dakota-portal/dist/components/Colors";

import { IIconProps } from ".";

export default ({
  width = "12px",
  height = "13px",
  color = Colors.dodgerBlue
}: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 12 13" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Agenda"
        transform="translate(-1149.000000, -700.000000)"
        stroke={color}
        strokeWidth="1.2"
      >
        <g id="Group-5-Copy-2" transform="translate(1150.000000, 701.000000)">
          <path
            d="M10,3.28906358 C10,6.83576879 7.34567901,10.9827052 5,10.9827052 C2.65432099,10.9827052 0,6.83576879 0,3.28906358 C0,2.14455491 5,0.0462890173 5,0.0462890173 C5,0.0462890173 10,1.95380347 10,3.28906358 Z"
            id="Stroke-1"
          />
          <polyline
            id="Stroke-3"
            strokeLinecap="round"
            points="2.78075926 5.57006936 4.48304321 7.32352023 7.71304321 3.99649711"
          />
        </g>
      </g>
    </g>
  </svg>
);
