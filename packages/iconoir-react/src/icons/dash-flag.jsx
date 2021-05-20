import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const DashFlag = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15L5.95039 4.54568C5.97849 4.23663 6.23761 4 6.54793 4H20.343C20.6958 4 20.9725 4.30295 20.9405 4.65432L20.0496 14.4543C20.0215 14.7634 19.7624 15 19.4521 15H5ZM5 15L4.4 21"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 7.5L16 11.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

DashFlag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DashFlag.displayName = 'DashFlag';

export default DashFlag;
