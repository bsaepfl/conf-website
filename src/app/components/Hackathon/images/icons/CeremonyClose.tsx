import React from "react";

const CeremonyClose = ({ classname }) => {
  return (
    <svg
      className={classname}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 26V5.10002C6 5.10002 7.125 4 10.5 4C13.875 4 16.125 6.2 19.5 6.2C22.875 6.2 24 5.1 24 5.1V18.3C24 18.3 22.875 19.4 19.5 19.4C16.125 19.4 13.875 17.2 10.5 17.2C7.125 17.2 6 18.3 6 18.3"
        stroke="#4CA3FF"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.7333 4L7 5V17L12 16.5L18.7333 19L23 18.5V5.5L18.7333 6.5L10.7333 4Z"
        fill="#4CA3FF"
        stroke="#4CA3FF"
      />
      <path
        d="M6.5 27V5.5"
        stroke="#4CA3FF"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CeremonyClose;
