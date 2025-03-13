import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type BookingCalendarProps = {
 onDateChange: (date: [Date, Date]) => void;
 unavailableDates: string[];
};

export const BookingCalendar = ({ onDateChange, unavailableDates }: BookingCalendarProps) => {
 const isDateDisabled = (date: Date) => unavailableDates.includes(date.toISOString().split("T")[0]);

 return (
  <div className="flex justify-center mb-6">
   <Calendar
    onChange={(value) => onDateChange(value as [Date, Date])}
    selectRange={true}
    minDate={new Date()}
    className="shadow-md p-4 rounded-lg"
    tileDisabled={({ date }) => isDateDisabled(date)}
    tileClassName={({ date }) => (isDateDisabled(date) ? "text-gray-500 bg-gray-300 cursor-not-allowed" : "")}
   />
  </div>
 );
};
