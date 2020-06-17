import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 64 64"
}) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke-width="2" stroke={fill} fill="none" fill-rule="evenodd">
        <path d="M61.9 58c0 1.1-.9 2-2 2h-56c-1.1 0-2-.9-2-2l30-49.4 30 49.4h0z" />
        <path d="M41.9 60h-20l10-21.8 10 21.8zM31.9 8.5l-5-7.9M31.9 8.5l5-7.9M1 60.6v-8.4M63 60.6v-8.4M20.9 28.3l5 3 6-3 6 3 5-3.5M22.9 23.4l3 1.9 6-2.9 6 2.9 3-1.9M31.9.6v8.9" />
      </g>

    </svg>
  );

export default SVG;
