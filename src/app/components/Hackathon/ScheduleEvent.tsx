import React from "react";
import Meal from "./images/icons/Meal";
import Team from "./images/icons/Team";
import Snacks from "./images/icons/Snacks";
import Workshop from "./images/icons/Workshop";
import Breakfast from "./images/icons/Breakfast";
import CeremonyClose from "./images/icons/CeremonyClose";
import CeremonyOpen from "./images/icons/CeremonyOpen";
import Judging from "./images/icons/Judging";
import Podium from "./images/icons/Podium";
import Code from "./images/icons/Code";
import Presentation from "./images/icons/Presentation";
import ProjectSubmission from "./images/icons/ProjectSubmission";
import Registration from "./images/icons/Registration";

const icons: { [key: string]: React.JSX.Element } = {
  meal: <Meal classname="w-7 h-7" />,
  team: <Team classname="w-7 h-7" />,
  snacks: <Snacks classname="w-7 h-7" />,
  code: <Code classname="w-7 h-7" />,
  workshop: <Workshop classname="w-7 h-7" />,
  breakfast: <Breakfast classname="w-7 h-7" />,
  ceremonyClose: <CeremonyClose classname="w-7 h-7" />,
  ceremonyOpen: <CeremonyOpen classname="w-7 h-7" />,
  judging: <Judging classname="w-7 h-7 fill-dark-450" />,
  podium: <Podium classname="w-7 h-7" />,
  presentation: <Presentation classname="w-7 h-7" />,
  projectSubmission: <ProjectSubmission classname="w-7 h-7" />,
  registration: <Registration classname="w-7 h-7 fill-dark-450" />,
};

const ScheduleEvent = ({ key, event, isCurrentEvent }) => {
  return (
    <li key={key} className="flex flex-row divide-x text-black py-2 sm:py-3">
      <div className="flex flex-col lg:flex-row items-start w-[70px] lg:w-32 justify-center lg:justify-between font-semibold px-3 lg:px-4 py-1 sm:py-3 relative flex-shrink-0 ">
        <span className="">
          {`${event.date.getHours().toString().padStart(2, "0")}:${event.date
            .getMinutes()
            .toString()
            .padStart(2, "0")}`}
        </span>
        <span
          className={
            event.duration ? "opacity-50 select-none" : "opacity-0 select-none"
          }
        >
          {`${event.duration}hr`}
        </span>
        {isCurrentEvent(event) ? (
          <>
            <div className="bg-green-500 w-3 h-3 rounded-full absolute -left-[18px] top-[18px] animate-ping" />
            <div className="bg-green-400 w-3 h-3 rounded-full absolute -left-[18px] top-[18px]" />
          </>
        ) : null}
      </div>
      <div className="flex flex-row items-start sm:items-center lg:items-start gap-4 w-full px-4 py-1 sm:py-3 flex-1">
        <span className="hidden sm:flex -mt-1">{icons[event.icon]}</span>
        <h3 className="font-bold text-sm sm:text-base ">{event.name}</h3>
      </div>
    </li>
  );
};

export default ScheduleEvent;
