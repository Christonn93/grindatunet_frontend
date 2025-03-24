import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { CalendarDays } from "lucide-react";
import "react-day-picker/style.css";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "../booking/Calendar";
import { useBookingStore } from "@/hooks/store/useBookingStore";

export const PopoverCalendarRange = () => {
 const { range, setRange } = useBookingStore();

 const from = range?.from;
 const to = range?.to;

 const formattedRange = from ? `${format(from, "PPP", { locale: nb })} – ${format(to ?? from, "PPP", { locale: nb })}` : "Velg en dato";

 return (
  <Popover>
   <PopoverTrigger className="w-full">
    <Button variant="outline" className="w-full justify-start text-left font-normal bg-white">
     <CalendarDays /> {formattedRange}
    </Button>
   </PopoverTrigger>
   <PopoverContent className="w-auto p-6 mx-7 bg-white rounded shadow-lg">
    <Calendar selectedRange={range} setSelectedRange={setRange} />
   </PopoverContent>
  </Popover>
 );
};
