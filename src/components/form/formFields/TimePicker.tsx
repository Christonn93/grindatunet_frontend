import { Label } from "@/components/ui/label";
import { FormikProps } from "formik";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";
import { DateInput, TimeField } from "@/components/ui/datefield-rac";

export const TimePicker = ({ labelText, formik, fieldName }: { labelText: string; formik: FormikProps<BookingFormValues>; fieldName: keyof BookingFormValues }) => {
 const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  formik.setFieldValue(fieldName, e.target.value);
 };

 return (
  <TimeField locale="nb-NO" hourCycle="h23" className="*:not-first:mt-2">
   <Label className="text-foreground text-sm font-medium">Tidspunkt</Label>
   <DateInput />
  </TimeField>
 );
};
