import React, { useEffect, useState } from "react";
import { CurrentEvent, DayProps, ScheduleEventType } from "./Types/Types";
import ToggleButton from "./Style/ToggleButton";
import { navigationEvent, navigationPreEvent, schedule } from "./Assets/Assets";
import ScheduleEvent from "./ScheduleEvent";
import classNames from "classnames";

const ScheduleView = () => {
  const [daySelected, setDaySelected] = useState<DayProps>({
    label: "Mon, 23 Sep",
    date: "2024-09-23",
    description: "Pre-Event",
  });
  const [daySelected2, setDaySelected2] = useState<DayProps>({
    label: "Sat, 12 Oct",
    date: "2024-10-12",
    description: "1st Day",
  });

  const [currentTime, setCurrentTime] = useState<CurrentEvent>({
    date: "",
    hour: 0,
    minutes: 0,
  });

  const currentSchedulePre = schedule.filter(
    (event) => event.value === daySelected.date
  );

  const currentScheduleEvent = schedule.filter(
    (event) => event.value === daySelected2.date
  );
  // assumption that each events finishes the same day it start
  const isCurrentEvent = (event: ScheduleEventType) => {
    if (event.value === currentTime.date) {
      // all the math is done in minutes
      const eventStart = event.date.getHours() * 60 + event.date.getMinutes();
      const eventEnd = eventStart + event.duration * 60;
      const currentTimeInMinutes = currentTime.hour * 60 + currentTime.minutes;

      if (
        eventStart <= currentTimeInMinutes &&
        currentTimeInMinutes <= eventEnd
      ) {
        return true;
      }
    }
    return false;
  };

  const scrollIntoView = (index: number) => {
    const par = document.getElementById("NavigationItemsParent");
    const child = document.getElementById(`NavigationItem${index}`);

    if (par && child) {
      const scrollX = (child.offsetWidth + 8) * index;
      par.scrollLeft = scrollX;
    }
  };

  useEffect(() => {
    const now = new Date();

    const today = now.getDate();

    const date =
      now.getFullYear().toString().padStart(2, "0") +
      "-" +
      (now.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      now.getDate().toString().padStart(2, "0");

    for (let index = 0; index < navigationPreEvent.length; index++) {
      const day = navigationPreEvent[index];
      const date_ = new Date(day.date);
      if (today <= date_.getUTCDate()) {
        setDaySelected(day);
        scrollIntoView(index);
        break; // Exit the loop
      }
    }

    setCurrentTime({
      date,
      hour: now.getHours(),
      minutes: now.getMinutes(),
    });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 bg-dark-800 relative">
      <div className="w-full max-w-[1100px] flex flex-col py-20 px-4 sm:px-10 gap-6 text-sm sm:text-base ">
        <h2 className="w-full font-bold text-3xl sm:text-4xl text-dark-100 indent-2 pb-10">
          Schedule
        </h2>

        {/* BEFORE HACKATHON */}
        <p className="font-semibold text-lg sm:text-xl uppercase">
          Before the Hackathon
        </p>
        <div className="w-full overflow-hidden relative">
          <div
            id="NavigationItemsParent"
            className="flex flex-row items-center gap-2 lg:bg-white rounded-xl py-2 px-2 w-full max-w-fit overflow-x-auto"
          >
            {navigationPreEvent.map((item, index) => (
              <ToggleButton
                onClick_={() => {
                  setDaySelected(item);
                  scrollIntoView(index);
                }}
                index={index}
                item={item}
                daySelected={daySelected}
              />
            ))}
          </div>
          <ShadowScroll left={true} />
          <ShadowScroll left={false} />
        </div>
        {currentSchedulePre.length ? (
          <ul className="bg-white rounded-xl divide-y px-3">
            {currentSchedulePre.map((event, index) => (
              <ScheduleEvent
                key={`currentSchedule${index}`}
                event={event}
                isCurrentEvent={isCurrentEvent}
              />
            ))}
          </ul>
        ) : (
          <p className="font-semibold text-xl text-black opacity-60 pl-6">
            Coming Soon
          </p>
        )}

        {/* HACKATHON */}
        <p className="font-semibold text-lg sm:text-xl uppercase pt-8">
          Hackathon
        </p>
        <div className="w-full overflow-hidden relative">
          <div className="flex flex-row items-center gap-2 lg:bg-white rounded-xl py-2 px-2 w-full max-w-fit overflow-x-auto">
            {navigationEvent.map((item, index) => (
              <ToggleButton
                onClick_={() => {
                  setDaySelected2(item);
                }}
                index={index}
                item={item}
                daySelected={daySelected2}
              />
            ))}
          </div>
          <ShadowScroll left={true} />
          <ShadowScroll left={false} />
        </div>
        {currentScheduleEvent.length ? (
          <ul className="bg-white rounded-xl divide-y px-3">
            {currentScheduleEvent.map((event, index) => (
              <ScheduleEvent
                key={`currentSchedule${index}`}
                event={event}
                isCurrentEvent={isCurrentEvent}
              />
            ))}
          </ul>
        ) : (
          <p className="font-semibold text-xl text-black opacity-60 pl-6">
            Coming Soon
          </p>
        )}
      </div>
    </div>
  );
};

export default ScheduleView;

const ShadowScroll = ({ left }: { left: boolean }) => {
  return (
    <div
      className={classNames(
        "absolute top-0 h-full w-2 from-dark-800 lg:from-transparent to-transparent pointer-events-none",
        left ? "bg-gradient-to-r left-0" : "bg-gradient-to-l right-0"
      )}
    />
  );
};
