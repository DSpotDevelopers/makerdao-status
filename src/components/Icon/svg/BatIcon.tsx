import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function BatIcon({
  width = 50,
  height = 50,
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 2000 1719" width={width} height={height} {...props}>
      <path fill="#662d91" d="M2000 1716.64l-995.21-569.86L0 1719l2000-2.36z" />
      <path
        fill="#9e1f63"
        d="M1005.11 0l-.32 1146.78L2000 1716.64 1005.11 0z"
      />
      <path fill="#ff5000" d="M0 1719l1004.79-572.22L1005.11 0 0 1719z" />
      <path
        fill="#fff"
        stroke="#ff5000"
        strokeMiterlimit={10}
        strokeWidth={25}
        d="M1002.75 695.67L591.9 1381.92h823.54l-412.69-686.25z"
      />
    </svg>
  );
}

const MemoBatIcon = React.memo(BatIcon);
export default MemoBatIcon;
