import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function UpArrowIcon({
  width = 18,
  height = 18,
  fill = 'white',
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={width} height={height} viewBox="0 0 8 7" fill="none" {...props}>
      <path
        d="M3.558.747a.52.52 0 01.884 0L7.64 5.525c.27.403.01.975-.442.975H.802C.349 6.5.09 5.928.36 5.525L3.558.747z"
        fill={fill}
      />
    </svg>
  );
}

const MemoUpArrowIcon = React.memo(UpArrowIcon);
export default MemoUpArrowIcon;
