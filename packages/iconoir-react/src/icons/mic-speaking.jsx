import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const MicSpeaking = forwardRef(
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
          <rect
            x="9"
            y="2"
            width="6"
            height="12"
            rx="3"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M5 10V11C5 14.866 8.13401 18 12 18V18M19 10V11C19 14.866 15.866 18 12 18V18M12 18V22M12 22H9M12 22H15M5 3V5M1 2V6M19 3V5M23 2V6"
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

MicSpeaking.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicSpeaking.displayName = 'MicSpeaking';

export default MicSpeaking;
