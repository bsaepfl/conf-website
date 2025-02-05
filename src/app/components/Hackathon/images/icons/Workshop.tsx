import React from "react";

const Workshop = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname}
    >
      <g clip-path="url(#clip0_980_14)">
        <path
          d="M23.2727 9.09091C23.2727 9.09091 17.3636 17.3636 8.5 17.3636M8.5 17.3636C6.13636 17.3636 2 18.5455 2 23.2727V28H15V23.2727C15 20.3182 18.5455 22.0909 23.2727 13.8182L21.5 12.0455M8.5 17.3636C10.7845 17.3636 12.6364 15.5117 12.6364 13.2273C12.6364 10.9428 10.7845 9.09091 8.5 9.09091C6.21555 9.09091 4.36364 10.9428 4.36364 13.2273C4.36364 15.5117 6.21555 17.3636 8.5 17.3636ZM4.36364 6.72727V3.18182H28V19.7273H24.4545M13.8182 2H18.5455V4.36364H13.8182V2Z"
          stroke="#4CA3FF"
          stroke-width="3"
        />
      </g>
      <defs>
        <clipPath id="clip0_980_14">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Workshop;
