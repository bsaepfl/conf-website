export interface ScheduleEventType {
    date: Date;
    name: string;
    icon: string;
    duration?: number;
    value: string;
}

export interface DayProps {
    label: string;
    date: string;
    description: string;
}

export interface CurrentEvent {
    date: string;
    hour: number;
    minutes: number;
}