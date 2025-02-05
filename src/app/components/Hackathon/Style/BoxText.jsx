import React from "react";
import classNames from "classnames";

const BoxText = ({ text, boxColor }) => {
  return (
    <div className="relative px-4 sm:px-10">
      <div
        className={classNames(
          "border-t-2 border-l-2 w-5 h-5 absolute left-0 top-0 rounded-tl-md hidden sm:flex",
          boxColor ? boxColor : "border-dark-200"
        )}
      />
      {text}
      <div
        className={classNames(
          "border-b-2 border-r-2 w-5 h-5 absolute right-0 bottom-0 rounded-br-md  hidden sm:flex",
          boxColor ? boxColor : "border-dark-200"
        )}
      />
    </div>
  );
};

export default BoxText;
