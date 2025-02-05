import { SetDate } from "../Types/Types";

export const generateDate: SetDate = (date, hours, minutes) => {
  const time = new Date(date);
  time.setHours(hours);
  time.setMinutes(minutes);
  return time;
};
