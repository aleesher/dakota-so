import React from "react";

interface IProps {
  color: string;
}

const PinIcon: React.FC<IProps> = ({ color }) => (
  <svg width="22px" height="28px" viewBox="0 0 22 28">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Work-Orders-planning-msg"
        transform="translate(-1877.000000, -117.000000)"
        fill={color}
        fillRule="nonzero"
      >
        <g id="Group-5" transform="translate(1602.000000, 92.000000)">
          <path
            d="M278.418,46.139 L275.429,50.759 L275.747,52.269 L277.252,51.947 L280.239,47.329 C279.921,47.159 279.605,46.977 279.3,46.775 C278.995,46.573 278.695,46.359 278.417,46.139 L278.418,46.139 Z M291.071,44.527 C291.091,44.486 291.104,44.44 291.122,44.397 C291.199393,44.2324304 291.266195,44.0630856 291.322,43.89 C291.331,43.859 291.334,43.828 291.345,43.799 C291.4,43.606 291.445,43.416 291.484,43.219 L291.484,43.189 C291.710998,41.3575449 291.242442,39.5075869 290.171,38.005 L291.747,35.571 C293.563,35.803 295.134,35.346 295.889,34.177 C297.202,32.159 295.608,28.792 292.334,26.659 C289.06,24.526 285.343,24.437 284.034,26.459 C283.276,27.629 283.497,29.252 284.45,30.823 L282.871,33.254 C281.067546,32.8830679 279.190538,33.206259 277.615,34.159 C277.606072,34.160786 277.597785,34.1649294 277.591,34.171 C277.427444,34.2821709 277.270201,34.4023567 277.12,34.531 C277.096,34.551 277.068,34.569 277.047,34.59 C276.910581,34.7103403 276.781986,34.8392693 276.662,34.976 C276.634,35.01 276.594,35.04 276.567,35.076 C276.41568,35.247366 276.277931,35.4302518 276.155,35.623 C274.19,38.659 275.871,43.239 279.894,45.859 C283.917,48.479 288.783,48.151 290.745,45.122 C290.869487,44.930141 290.980102,44.7296302 291.076,44.522 L291.071,44.527 Z M289.917,30.386 C288.658,29.567 288.043,28.275 288.547,27.494 C289.051,26.713 290.48,26.753 291.737,27.572 C292.994,28.391 293.609,29.686 293.107,30.464 C292.605,31.242 291.178,31.205 289.917,30.386 Z"
            id="pin"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default PinIcon;
