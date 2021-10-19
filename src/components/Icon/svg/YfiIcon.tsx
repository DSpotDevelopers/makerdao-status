import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function YfiIcon({
  width = 50,
  height = 50,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1000 1000" width={width} height={height} {...props}>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            d="M500 0c276.1 0 500 223.9 500 500s-223.9 500-500 500S0 776.1 0 500 223.9 0 500 0z"
            fill="#006ae3"
            fillRule="evenodd"
          />
          <path
            data-name="SVGID"
            fill="#fff"
            d="M479.4 710.8v-416h45.3v416h-45.3z"
          />
          <path
            data-name="SVGID"
            d="M710 433.4l-139.9 37.1-31.2-145.2 41.6-9.4 16.4 68.8s37.8-62-12.6-126.2c-29.7-33-43.8-34.4-77.1-39.6-29.3-4.2-97.4 5.7-117.7 85.2-8.6 51.2 1.1 89.1 67.1 138.7l-3.7 55.2s-73.7-51.9-92.7-88.3c-14.7-28.8-39.9-85.7 5.6-164.9 24.5-39.6 72.8-77.6 157.9-73.6 42.8 1.8 147.3 54.1 131.1 176.3-2.8 22.9-14.7 53.4-14.7 53.4l57.4-12.8 12.5 45.3zM630.1 758.9c-25.6 38.9-74.9 75.6-159.8 69.4-42.8-2.9-145.8-58-126.4-179.7 3.4-22.8 16.1-52.9 16.1-52.9l-57.7 11.2-11.3-45.5L431.9 528l27.4 146-41.9 8.3-14.6-69.3s-39.4 60.9 9.2 126.5c28.8 33.8 42.8 35.5 76.1 41.6 29.1 5 97.5-3.2 119.9-82.1 9.9-50.9 1.2-89.1-63.4-140.5l5.2-55.1s72.3 53.8 90.3 90.7c13.8 29.3 37.5 86.9-10 164.8z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}

const MemoYfiIcon = React.memo(YfiIcon);
export default MemoYfiIcon;