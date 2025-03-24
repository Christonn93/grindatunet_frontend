import { useUnavailableDates } from "@/hooks/query/useUnavailableDates";
import { useMemo } from "react";
import { FormikProps } from "formik";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

export const DateTimePicker = ({ formik }: { formik: FormikProps<BookingFormValues> }) => {
 const { data: unavailableDates } = useUnavailableDates();
 const disabledDates = useMemo(() => unavailableDates?.map((date: string | number | Date) => (typeof date === "string" ? new Date(date) : date)) || [], [unavailableDates]);

 const handleSelect = (range: DateRange | undefined) => {
  if (range?.from && range?.to) {
   formik.setFieldValue("startDate", range.from);
   formik.setFieldValue("endDate", range.to);
  }
 };

 return (
  <DayPicker
   mode="range"
   selected={{
    from: formik.values.startDate ? new Date(formik.values.startDate) : undefined,
    to: formik.values.endDate ? new Date(formik.values.endDate) : undefined,
   }}
   onSelect={handleSelect}
   disabled={(date: Date) => disabledDates.some((disabledDate: { getTime: () => number }) => disabledDate.getTime() === date.getTime())}
  />
 );
};
