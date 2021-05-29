import * as React from 'react';

function SvgTrainOutline(
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
      <path
        d="M9.609 7h4.782A2.609 2.609 0 0117 9.609a.391.391 0 01-.391.391H7.39A.391.391 0 017 9.609 2.609 2.609 0 019.609 7z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19h3l-1.724 3.447a1 1 0 01-.894.553h-.764a1 1 0 01-.894-1.447L7 19zM17 19h-3l1.724 3.447a1 1 0 00.894.553h.764a1 1 0 00.894-1.447L17 19z"
        fill="currentColor"
      />
      <path
        d="M9 3h6a6 6 0 016 6v4a6 6 0 01-6 6H9a6 6 0 01-6-6V9a6 6 0 016-6zM16 15.01l.01-.011M8 15.01l.01-.011"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgTrainOutline);
export default ForwardRef;
