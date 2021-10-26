import React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function FullLogoIcon({
  width = 180,
  height = 40,
  fill = 'white',
  ...props
}: Props & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="6 0 118 35"
      fill={fill}
      {...props}
    >
      <g clipPath="url(#prefix__clip0)" fill="#fff" fillOpacity={0.8}>
        <path d="M3.814 4.4v15.72H.992V1.858C.992.394 2.544-.44 3.628.44l13.404 10.879c.414.334.656.86.656 1.417v7.381h-2.822V13.37L3.814 4.4zM50.947 3.42c-1.156 0-2.094.953-2.094 2.129v13.458h2.718V7.346l3.665 6.08a2.288 2.288 0 001.957 1.113c.795 0 1.537-.42 1.954-1.11l3.685-6.086v11.659h2.717V5.449c0-1.12-.893-2.03-1.996-2.03a1.99 1.99 0 00-1.72 1.004l-4.589 7.947-4.487-7.887a2.078 2.078 0 00-1.81-1.063z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M77.795 3.42c-.926 0-1.759.557-2.098 1.408L70 19.007h2.713l1.77-4.081h6.45l1.77 4.08h2.88L79.896 4.829a2.262 2.262 0 00-2.1-1.408zm-.088 3.192l2.247 5.78h-4.505l2.258-5.78z"
        />
        <path d="M92.71 10.562l6.518-6.775c.227-.235.534-.367.857-.367 1.077 0 1.615 1.348.852 2.134l-5.172 5.325 7.627 8.128h-3.469L92.71 11.46v7.547h-2.674V4.803c0-.764.599-1.383 1.337-1.383.739 0 1.337.619 1.337 1.383v5.759zM107.844 16.511c0 1.378 1.138 2.496 2.54 2.496h7.295c.716 0 1.295-.57 1.295-1.273 0-.704-.579-1.273-1.295-1.273h-7.011V12.25h6.396c.716 0 1.295-.57 1.295-1.273 0-.704-.579-1.273-1.295-1.273h-6.396V5.966h7.011c.716 0 1.295-.569 1.295-1.272 0-.704-.579-1.273-1.295-1.273h-7.295c-1.402 0-2.54 1.118-2.54 2.495v10.596z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M136.604 7.883c0 .497-.063.974-.187 1.426a4.585 4.585 0 01-.571 1.295 3.972 3.972 0 01-1.063 1.119 5.14 5.14 0 01-1.588.768l4.701 6.516h-3.594l-4.361-6.044H127.3v6.044h-2.761V5.917a2.496 2.496 0 012.494-2.497h4.137c.329 0 .628.01.898.032.276.015.611.058.997.133.394.065.741.157 1.04.274.307.118.621.29.943.517.329.227.598.494.81.801.22.3.399.684.536 1.151.142.46.21.979.21 1.555zm-9.302-1.93v4.466h2.544c.439 0 .825-.014 1.162-.045.336-.03.683-.087 1.04-.174.359-.095.651-.222.878-.385.234-.16.423-.384.568-.669.152-.284.23-.621.23-1.008 0-1.455-1.123-2.184-3.365-2.184h-3.057z"
        />
        <path d="M34.713 20.12V4.398L22.924 13.37v6.75h-3.01v-7.381c0-.558.258-1.084.7-1.418L34.91.44c1.156-.882 2.812-.048 2.812 1.416V20.12h-3.01z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="translate(.992 .08)"
            d="M0 0h136.904v20.04H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoFullLogoIcon = React.memo(FullLogoIcon);
export default MemoFullLogoIcon;
