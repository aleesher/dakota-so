import React from "react";
import Colors from "dakota-portal/dist/components/Colors";

interface IProps {
  checked: boolean;
  disabled?: boolean;
}

const CheckboxIcon: React.FC<IProps> = ({ checked, disabled = false }) => (
  <svg width="30px" height="31px" viewBox="0 0 30 31">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Deadline" transform="translate(-476.000000, -538.000000)">
        <g transform="translate(436.000000, 104.000000)" id="Group_2840">
          <g transform="translate(40.000000, 434.500000)">
            <g id="Rectangle_661-2">
              <rect
                id="Rectangle"
                stroke={disabled ? Colors.gullGrey : Colors.dodgerBlue}
                strokeWidth="2"
                x="1"
                y="1"
                width="28"
                height="28"
                rx="3"
              />
            </g>
            <polygon
              id="checkmark-2"
              fill={
                disabled
                  ? Colors.gullGrey
                  : checked
                  ? Colors.dodgerBlue
                  : "transparent"
              }
              fillRule="nonzero"
              points="20.409 9.354 13.033 16.73 9.592 13.288 7.133 15.746 13.033 21.646 22.867 11.812"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default CheckboxIcon;
