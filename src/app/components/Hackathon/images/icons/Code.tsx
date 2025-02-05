import React from "react";

const Code = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <path
        d="M10.1429 8L3 14.4615L10.1429 22M20.8571 8L28 14.4615L20.8571 22"
        stroke="#4CA3FF"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Code;
