import React from "react";

const PlayIcon = ({ size = "24" }: { size?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 148 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_140_87)">
        <circle cx="68" cy="47" r="40" fill="white" />
      </g>
      <path
        d="M81.5 44.4019C83.5 45.5566 83.5 48.4434 81.5 49.5981L63.5 59.9904C61.5 61.1451 59 59.7017 59 57.3923L59 36.6077C59 34.2983 61.5 32.8549 63.5 34.0096L81.5 44.4019Z"
        fill="#1E1E1E"
      />
      <defs>
        <filter
          id="filter0_d_140_87"
          x="0"
          y="0"
          width="148"
          height="148"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="6" dy="27" />
          <feGaussianBlur stdDeviation="17" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_140_87"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_140_87"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PlayIcon;
