import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormikProps } from "formik";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";

export const TimePicker = ({ labelText, formik, fieldName }: { labelText: string; formik: FormikProps<BookingFormValues>; fieldName: keyof BookingFormValues }) => {
 const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  formik.setFieldValue(fieldName, e.target.value);
 };

 return (
  <div>
   <Label htmlFor={fieldName}>{labelText}</Label>
   <Input id={fieldName} type="time" value={String(formik.values[fieldName] ?? "")} onChange={handleTimeChange} />
   {formik.touched[fieldName] && formik.errors[fieldName] && <div className="text-red-500 text-sm">{String(formik.errors[fieldName])}</div>}
  </div>
 );
};
