import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";

import { FormikProps } from "formik";
import { PurposeSelect } from "./PurposeSelect";

export const GuestsInformation = ({ formik }: { formik: FormikProps<BookingFormValues> }) => {
 return (
  <div className="grid grid-cols-2 gap-4">
   <div className="space-y-2">
    <Label htmlFor="phone">Hvor mange gjester?</Label>
    <Input
     id="guests"
     name="guests"
     placeholder="1"
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.guests}
     className={cn(formik.touched.guests && formik.errors.guests ? "border-red-500" : "")}
    />
    {formik.touched.guests && formik.errors.guests && <p className="text-red-500 text-xs mt-1">{formik.errors.guests}</p>}
   </div>
   <div className="space-y-2">
    <PurposeSelect formik={formik} />
   </div>
  </div>
 );
};
