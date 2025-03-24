import { DayPicker, DateRange } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";
import "react-day-picker/style.css";

type CalendarProps = {
 selectedRange: DateRange | undefined;
 setSelectedRange: (range: DateRange | undefined) => void;
};

export const Calendar = ({ selectedRange, setSelectedRange }: CalendarProps) => {
 return (
  <DayPicker
   mode="range"
   min={1}
   max={6}
   disabled={{ before: new Date() }}
   excludeDisabled
   selected={selectedRange}
   onSelect={(range: DateRange | undefined) => setSelectedRange(range)}
   classNames={{
    ...classNames,
    root: `${classNames.root} max-w-full w-auto mx-auto`,
    selected: "bg-amber-500 text-black",
    range_start: "bg-amber-500 text-black rounded-l-full",
    range_end: "bg-amber-500 text-black rounded-r-full",
    caption: `${classNames.caption} text-amber-500`,
    weekdays: `${classNames.weekdays} text-amber-500`,
    weekday: `${classNames.weekday} text-amber-500`,
    chevron: `${classNames.chevron} fill-amber-500`,
    today: `bg-orange-600 text-black rounded-full`,
    disabled: `${classNames.disabled} text-gray-400`,
   }}
   showOutsideDays
   weekStartsOn={1}
   timeZone="Europe/Oslo"
  />
 );
};
