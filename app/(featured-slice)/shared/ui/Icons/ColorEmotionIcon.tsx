const ColoredVeryBadIcon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1777_6506)">
        <rect x="8" y="8" width="40" height="40" rx="20" fill="#D9E8FF" />
        <rect
          x="9"
          y="9"
          width="38"
          height="38"
          rx="19"
          stroke="#9FC6FF"
          stroke-width="2"
        />
      </g>
      <path
        d="M19.5 31.5547C19.5 30.1328 21.7174 28 24.5 28C27.2826 28 29.5 30.1328 29.5 31.5547"
        stroke="#003079"
        stroke-linecap="round"
      />
      <rect x="17" y="19" width="5" height="5" rx="2.5" fill="#003079" />
      <g filter="url(#filter1_f_1777_6506)">
        <rect x="17.5" y="21" width="1" height="1" rx="0.5" fill="white" />
      </g>
      <rect x="28" y="19" width="5" height="5" rx="2.5" fill="#003079" />
      <g filter="url(#filter2_f_1777_6506)">
        <rect x="28.5" y="21" width="1" height="1" rx="0.5" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_1777_6506"
          x="0"
          y="0"
          width="56"
          height="56"
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
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.402439 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1777_6506"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1777_6506"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_f_1777_6506"
          x="16.5"
          y="20"
          width="3"
          height="3"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.5"
            result="effect1_foregroundBlur_1777_6506"
          />
        </filter>
        <filter
          id="filter2_f_1777_6506"
          x="27.5"
          y="20"
          width="3"
          height="3"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="0.5"
            result="effect1_foregroundBlur_1777_6506"
          />
        </filter>
      </defs>
    </svg>
  );
};

export { ColoredVeryBadIcon };
