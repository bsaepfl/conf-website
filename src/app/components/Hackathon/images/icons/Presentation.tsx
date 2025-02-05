import React from "react";

const Presentation = ({ classname }) => {
  return (
    <svg
      className={classname}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 3.75H7M7 3.75H24.5M7 3.75V14.75C7 16.1501 7 16.8502 7.27249 17.385C7.51216 17.8554 7.89461 18.2379 8.36503 18.4775C8.8998 18.75 9.59987 18.75 11 18.75H15.75M27 3.75H24.5M24.5 3.75V14.75C24.5 16.1501 24.5 16.8502 24.2275 17.385C23.9879 17.8554 23.6054 18.2379 23.135 18.4775C22.6003 18.75 21.9001 18.75 20.5 18.75H15.75M15.75 22.5L9.5 26.25M15.75 22.5L22 26.25M15.75 22.5V26.25M15.75 22.5V18.75M10.75 12.5L14.5 8.75L17 12.5L20.75 8.75"
        stroke="#4CA3FF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Presentation;
