import React from "react";

function Icon({ width = '512', height = '512', viewBox = '0 0 512 512' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox={viewBox}
    >
      <g data-name="24-sign">
        <path
          d="M504.485 247.515l-32-32A12 12 0 00464 212H300v-88h116a12 12 0 008.485-3.515l32-32a12 12 0 000-16.97l-32-32A12 12 0 00416 36H300V16a12 12 0 00-12-12h-64a12 12 0 00-12 12v116H64a12 12 0 00-8.485 3.515l-32 32a12 12 0 000 16.97l32 32A12 12 0 0064 220h148v276a12 12 0 0024 0V28h40v468a12 12 0 0024 0V300h164a12 12 0 008.485-3.515l32-32a12 12 0 000-16.97zM68.971 196l-20-20 20-20H212v40zM411.029 60l20 20-20 20H300V60zm48 216H300v-40h159.029l20 20z"
          data-name="filled color"
        ></path>
      </g>

    </svg>
  );
}

export default Icon;
