import classNames from "classnames";
import React from "react";
import { ToggleButtonProps } from "../Types/Types";

const ToggleButton = ({
  onClick_,
  index,
  item,
  daySelected,
}: ToggleButtonProps) => {
  return (
    <button
      id={`NavigationItem${index}`}
      type="button"
      onClick={onClick_}
      key={`day${index}`}
      className={classNames(
        "px-4 py-2 rounded-md text-base sm:text-lg font-semibold duration-100 text-dark-100 flex flex-col relative shrink-0",
        daySelected.date === item.date
          ? "bg-white lg:bg-dark-800  border-white lg:border-dark-800"
          : "opacity-70   border-dark-100 border-opacity-10  lg:border-transparent lg:bg-transparent"
      )}
    >
      <span className="text-xs font-normal ">{item.description}</span>
      <span className=" leading-5">{item.label}</span>
    </button>
  );
};

export default ToggleButton;
