import * as React from 'react';

function SvgCloudDesync(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <g clipPath="url(#cloud-desync_svg__clip0)">
        <path
          d="M20 17.607c1.494-.585 3-1.918 3-4.607 0-4-3.333-5-5-5 0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5 0 2.689 1.506 4.022 3 4.607M16.42 19.487l-1.768 1.768a4 4 0 01-5.656 0l-.354-.353"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.067 21.962l.353-2.475-2.475.354 2.122 2.121z"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.05 16.482a.75.75 0 001.06 1.06l-1.06-1.06zm7.778-.353a.75.75 0 101.06-1.061l-1.06 1.06zm-6.01-1.415l-1.769 1.768 1.061 1.06 1.768-1.767-1.06-1.06zm5.656 1.061l.354.354 1.06-1.061-.353-.354-1.061 1.061zm-4.596 0a3.25 3.25 0 014.596 0l1.06-1.06a4.75 4.75 0 00-6.717 0l1.06 1.06z"
          fill="#000"
        />
        <path
          d="M7.58 17.013l-.743-.107a.75.75 0 00.849.849l-.106-.742zm.353-2.475l.53-.53a.75.75 0 00-1.272.424l.742.106zm2.122 2.121l.106.742a.75.75 0 00.424-1.272l-.53.53zm-1.733.46l.354-2.475-1.485-.212-.354 2.475 1.485.212zm-.636.636l2.475-.354-.212-1.484-2.475.353.212 1.485zm-.283-2.687l2.121 2.121 1.06-1.06-2.12-2.122-1.061 1.061z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="cloud-desync_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgCloudDesync);
export default ForwardRef;
