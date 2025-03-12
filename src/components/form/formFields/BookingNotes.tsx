import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";
import { FormikProps } from "formik";

export const BookingNotes = ({ formik }: { formik: FormikProps<BookingFormValues> }) => {
 return (
  <div className="space-y-2">
   <Label htmlFor="notes">Additional Notes</Label>
   <Textarea
    id="notes"
    name="notes"
    placeholder="Any special requirements or information..."
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.notes}
    className={cn(formik.touched.notes && formik.errors.notes ? "border-red-500" : "")}
   />
   {formik.touched.notes && formik.errors.notes && <p className="text-red-500 text-xs mt-1">{formik.errors.notes}</p>}
  </div>
 );
};
