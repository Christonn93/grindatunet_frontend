import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";
import { FormikProps } from "formik";

export const PurposeSelect = ({ formik }: { formik: FormikProps<BookingFormValues> }) => {
 return (
  <>
   <Label htmlFor="purpose">Purpose</Label>
   <Select name="purpose" value={formik.values.purpose} onValueChange={(value) => formik.setFieldValue("purpose", value)}>
    <SelectTrigger id="purpose" className="w-full mt-1">
     <SelectValue placeholder="Select purpose" />
    </SelectTrigger>
    <SelectContent>
     <SelectItem value="pleasure">Pleasure</SelectItem>
     <SelectItem value="business">Business</SelectItem>
    </SelectContent>
   </Select>
   {formik.errors.purpose && formik.touched.purpose && <div className="text-red-500 text-sm">{formik.errors.purpose}</div>}
  </>
 );
};
