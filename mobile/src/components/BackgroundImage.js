import * as React from "react"
const BackgroundImage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={375}
    height={830}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="#176B87"
        d="M-294.418-100.886c-.358-13.064 11.707-22.956 24.449-20.043L224.426-7.924c16.209 3.705 21.082 24.422 8.223 34.964L-247.887 420.99c-12.858 10.541-32.218 1.701-32.672-14.921l-13.859-506.956Z"
      />
    </g>
    <path
      fill="#053B50"
      d="M-118.771 235.368c-2.99-15.13 11.548-27.808 26.13-22.788l844.802 290.843c14.544 5.008 18.227 23.875 6.634 33.985L87.19 1123.08c-11.593 10.11-29.784 3.9-32.765-11.2l-173.196-876.512Z"
    />
    <path
      fill="#176B87"
      d="M369.85-35.729c11.5-9.613 29.097-3.629 32.351 11.002l60.618 272.538c3.388 15.23-11.191 28.301-25.962 23.278l-274.826-93.466c-14.771-5.023-18.358-24.272-6.388-34.279L369.85-35.729Z"
    />
    <path
      fill="#053B50"
      d="M387.85 30.271c11.5-9.613 29.097-3.629 32.351 11.002l60.618 272.538c3.388 15.23-11.191 28.301-25.962 23.278l-274.826-93.466c-14.771-5.023-18.358-24.272-6.388-34.279L387.85 30.271Z"
    />
    <defs>
      <filter
        id="a"
        width={574.408}
        height={587}
        x={-311.426}
        y={-138.441}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={3} dy={3} />
        <feGaussianBlur stdDeviation={10} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_521_862" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_521_862"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default BackgroundImage
