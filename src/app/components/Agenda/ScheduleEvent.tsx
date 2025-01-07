import React from 'react';
import {
    Coffee, Users, Pizza, Code as CodeIcon, Laptop,
    Sunrise, Award, Trophy, PartyPopper, Presentation as PresentationIcon,
    Upload, ClipboardList
} from 'lucide-react';
import { ScheduleEventType } from '@/types/ScheduleTypes';

const icons: { [key: string]: React.ReactNode } = {
    meal: <Pizza className="w-7 h-7" />,
    team: <Users className="w-7 h-7" />,
    snacks: <Coffee className="w-7 h-7" />,
    code: <CodeIcon className="w-7 h-7" />,
    workshop: <Laptop className="w-7 h-7" />,
    breakfast: <Sunrise className="w-7 h-7" />,
    ceremonyClose: <Award className="w-7 h-7" />,
    ceremonyOpen: <PartyPopper className="w-7 h-7" />,
    judging: <Trophy className="w-7 h-7" />,
    presentation: <PresentationIcon className="w-7 h-7" />,
    projectSubmission: <Upload className="w-7 h-7" />,
    registration: <ClipboardList className="w-7 h-7" />
};

interface ScheduleEventProps {
    event: ScheduleEventType;
    isCurrentEvent: (event: ScheduleEventType) => boolean;
}

const ScheduleEvent: React.FC<ScheduleEventProps> = ({ event, isCurrentEvent }) => {
    return (
        <li className="flex flex-row divide-x text-black py-2 sm:py-3">
            <div className="flex flex-col lg:flex-row items-start w-[70px] lg:w-32 justify-center lg:justify-between font-semibold px-3 lg:px-4 py-1 sm:py-3 relative flex-shrink-0">
                <span>
                    {`${event.date.getHours().toString().padStart(2, "0")}:${event.date
                        .getMinutes()
                        .toString()
                        .padStart(2, "0")}`}
                </span>
                <span className={event.duration ? "opacity-50 select-none" : "opacity-0 select-none"}>
                    {`${event.duration}hr`}
                </span>
                {isCurrentEvent(event) && (
                    <>
                        <div className="bg-green-500 w-3 h-3 rounded-full absolute -left-[18px] top-[18px] animate-ping" />
                        <div className="bg-green-400 w-3 h-3 rounded-full absolute -left-[18px] top-[18px]" />
                    </>
                )}
            </div>
            <div className="flex flex-row items-start sm:items-center lg:items-start gap-4 w-full px-4 py-1 sm:py-3 flex-1">
                <span className="hidden sm:flex -mt-1">{icons[event.icon]}</span>
                <h3 className="font-bold text-sm sm:text-base">{event.name}</h3>
            </div>
        </li>
    );
};

export default ScheduleEvent;