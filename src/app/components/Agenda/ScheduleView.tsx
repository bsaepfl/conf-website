import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { CurrentEvent, DayProps, ScheduleEventType } from '@/types/ScheduleTypes';
import ScheduleEvent from './ScheduleEvent';

const navigationEvent: DayProps[] = [
    {
        label: "Fri, 7 Mar",
        date: "2025-03-07",
        description: "Day 1"
    },
    {
        label: "Sat, 8 Mar",
        date: "2025-03-08",
        description: "Day 2"
    },
    {
        label: "Sun, 9 Mar",
        date: "2025-03-09",
        description: "Day 3"
    }
];

const schedule: ScheduleEventType[] = [
    // Day 1 (March 7, 2025)
    {
        date: new Date("2025-03-07T08:00:00"),
        name: "Registration & Welcome Coffee",
        icon: "registration",
        duration: 1,
        value: "2025-03-07"
    },
    {
        date: new Date("2025-03-07T09:00:00"),
        name: "Opening Keynote: Future of Technology",
        icon: "presentation",
        duration: 1,
        value: "2025-03-07"
    },
    {
        date: new Date("2025-03-07T10:00:00"),
        name: "Coffee Break & Networking",
        icon: "snacks",
        duration: 0.5,
        value: "2025-03-07"
    },
    {
        date: new Date("2025-03-07T10:30:00"),
        name: "Panel Discussion: AI in Industry",
        icon: "team",
        duration: 1.5,
        value: "2025-03-07"
    },
    {
        date: new Date("2025-03-07T12:00:00"),
        name: "Lunch Break",
        icon: "meal",
        duration: 1.5,
        value: "2025-03-07"
    },
    {
        date: new Date("2025-03-07T13:30:00"),
        name: "Technical Workshop: Cloud Architecture",
        icon: "workshop",
        duration: 2,
        value: "2025-03-07"
    },
    {
        date: new Date("2025-03-07T15:30:00"),
        name: "Afternoon Break",
        icon: "snacks",
        duration: 0.5,
        value: "2025-03-07"
    },
    {
        date: new Date("2025-03-07T16:00:00"),
        name: "Expert Talk: Cybersecurity Trends",
        icon: "presentation",
        duration: 1,
        value: "2025-03-07"
    },
    {
        date: new Date("2025-03-07T17:00:00"),
        name: "Lightning Talks Session",
        icon: "presentation",
        duration: 1,
        value: "2025-03-07"
    },
    {
        date: new Date("2025-03-07T19:00:00"),
        name: "Welcome Reception",
        icon: "team",
        duration: 2,
        value: "2025-03-07"
    },

    // Day 2 (March 8, 2025)
    {
        date: new Date("2025-03-08T08:30:00"),
        name: "Morning Coffee & Registration",
        icon: "breakfast",
        duration: 0.5,
        value: "2025-03-08"
    },
    {
        date: new Date("2025-03-08T09:00:00"),
        name: "Keynote: Digital Transformation",
        icon: "presentation",
        duration: 1,
        value: "2025-03-08"
    },
    {
        date: new Date("2025-03-08T10:00:00"),
        name: "Coffee Break",
        icon: "snacks",
        duration: 0.5,
        value: "2025-03-08"
    },
    {
        date: new Date("2025-03-08T10:30:00"),
        name: "Workshop: DevOps Best Practices",
        icon: "workshop",
        duration: 1.5,
        value: "2025-03-08"
    },
    {
        date: new Date("2025-03-08T12:00:00"),
        name: "Lunch & Poster Sessions",
        icon: "meal",
        duration: 1.5,
        value: "2025-03-08"
    },
    {
        date: new Date("2025-03-08T13:30:00"),
        name: "Panel: Future of Web Development",
        icon: "team",
        duration: 1.5,
        value: "2025-03-08"
    },
    {
        date: new Date("2025-03-08T15:00:00"),
        name: "Afternoon Break",
        icon: "snacks",
        duration: 0.5,
        value: "2025-03-08"
    },
    {
        date: new Date("2025-03-08T15:30:00"),
        name: "Technical Deep Dive: Microservices",
        icon: "code",
        duration: 1.5,
        value: "2025-03-08"
    },
    {
        date: new Date("2025-03-08T17:00:00"),
        name: "Evening Networking Event",
        icon: "team",
        duration: 2,
        value: "2025-03-08"
    },

    // Day 3 (March 9, 2025)
    {
        date: new Date("2025-03-09T09:00:00"),
        name: "Morning Coffee",
        icon: "breakfast",
        duration: 0.5,
        value: "2025-03-09"
    },
    {
        date: new Date("2025-03-09T09:30:00"),
        name: "Workshop: Machine Learning in Production",
        icon: "workshop",
        duration: 2,
        value: "2025-03-09"
    },
    {
        date: new Date("2025-03-09T11:30:00"),
        name: "Coffee Break",
        icon: "snacks",
        duration: 0.5,
        value: "2025-03-09"
    },
    {
        date: new Date("2025-03-09T12:00:00"),
        name: "Panel: Ethics in Technology",
        icon: "team",
        duration: 1,
        value: "2025-03-09"
    },
    {
        date: new Date("2025-03-09T13:00:00"),
        name: "Lunch Break",
        icon: "meal",
        duration: 1,
        value: "2025-03-09"
    },
    {
        date: new Date("2025-03-09T14:00:00"),
        name: "Closing Keynote",
        icon: "presentation",
        duration: 1,
        value: "2025-03-09"
    },
    {
        date: new Date("2025-03-09T15:00:00"),
        name: "Closing Ceremony & Awards",
        icon: "ceremonyClose",
        duration: 1,
        value: "2025-03-09"
    }
];

const ScheduleView: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState(navigationEvent[0]);
    const [currentTime, setCurrentTime] = useState<CurrentEvent>({
        date: "",
        hour: 0,
        minutes: 0
    });

    const isCurrentEvent = (event: ScheduleEventType) => {
        if (event.value === currentTime.date) {
            const eventStart = event.date.getHours() * 60 + event.date.getMinutes();
            const eventEnd = eventStart + (event.duration || 0) * 60;
            const currentTimeInMinutes = currentTime.hour * 60 + currentTime.minutes;
            return eventStart <= currentTimeInMinutes && currentTimeInMinutes <= eventEnd;
        }
        return false;
    };

    useEffect(() => {
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        setCurrentTime({
            date,
            hour: now.getHours(),
            minutes: now.getMinutes()
        });
    }, []);

    const currentDaySchedule = schedule.filter(
        (event) => event.value === selectedDay.date
    );

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Conference Schedule</h2>

            <Tab.Group onChange={(index) => setSelectedDay(navigationEvent[index])}>
                <Tab.List className="flex space-x-2 bg-white rounded-xl p-2">
                    {navigationEvent.map((day) => (
                        <Tab
                            key={day.date}
                            className={({ selected }) =>
                                `px-4 py-2 rounded-lg transition-colors ${selected ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                                }`
                            }
                        >
                            {day.label}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-4">
                    {navigationEvent.map((day) => (
                        <Tab.Panel key={day.date}>
                            {currentDaySchedule.length > 0 ? (
                                <ul className="bg-white rounded-xl divide-y">
                                    {currentDaySchedule.map((event, index) => (
                                        <ScheduleEvent
                                            key={`${day.date}-${index}`}
                                            event={event}
                                            isCurrentEvent={isCurrentEvent}
                                        />
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 text-center py-8">
                                    No events scheduled for this day
                                </p>
                            )}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default ScheduleView;