import * as React from 'react';

function SvgOffRounded(
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
        d="M1 15V9a6 6 0 016-6h10a6 6 0 016 6v6a6 6 0 01-6 6H7a6 6 0 01-6-6z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M7 9a3 3 0 110 6 3 3 0 010-6z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M12 15V9h3M17 15V9h3M12 12h2.572M17 12h2.572"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgOffRounded);
export default ForwardRef;
