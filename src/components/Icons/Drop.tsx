import React from "react";

import Colors from "dakota-portal/dist/components/Colors";

import { IIconProps } from ".";

export default ({
  width = "14px",
  height = "12px",
  color = Colors.cinnabar
}: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 14 12" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Agenda" transform="translate(-1148.000000, -575.000000)">
        <g id="Group-9-Copy-13" transform="translate(1149.000000, 576.000000)">
          <path
            d="M2.3671299,6.49444048 C2.3671299,4.56366667 5.99997526,0.0233095238 5.99997526,0.0233095238 C5.99997526,0.0233095238 9.63288247,4.56366667 9.63288247,6.49444048 C9.63288247,8.42521429 8.00638763,9.99033333 5.99997526,9.99033333 C3.99362474,9.99033333 2.3671299,8.42521429 2.3671299,6.49444048 Z"
            id="Stroke-1"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M9.64948454,5.01059524 L12,5.01059524"
            id="Stroke-3"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M0,5.01059524 L2.35051546,5.01059524"
            id="Stroke-5"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M4.58230515,5.34790476 C4.58230515,5.3307619 4.58323299,5.31379762 4.58360412,5.29677381 C4.30704742,5.60927381 4.13923299,6.01367857 4.13923299,6.45635714 C4.13923299,7.44522619 4.97236701,8.24695238 5.99997526,8.24695238 C6.57108866,8.24695238 7.08145979,7.99885714 7.42277938,7.60915476 C7.27754227,7.63564286 7.1279134,7.65010714 6.97469691,7.65010714 C5.65339794,7.65010714 4.58230515,6.61933333 4.58230515,5.34790476"
            id="Fill-7"
            fill={color}
          />
        </g>
      </g>
    </g>
  </svg>
);
