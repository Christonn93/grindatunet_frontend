import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";

import { FormikProps } from "formik";

export const CustomerContact = ({ formik }: { formik: FormikProps<BookingFormValues> }) => {
 return (
  <div className="grid grid-cols-2 gap-4">
   <div className="space-y-2">
    <Label htmlFor="email">Email</Label>
    <Input
     id="email"
     name="email"
     type="email"
     placeholder="john.doe@example.com"
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.email}
     className={cn(formik.touched.email && formik.errors.email ? "border-red-500" : "")}
    />
    {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>}
   </div>

   <div className="space-y-2">
    <Label htmlFor="phone">Phone Number</Label>
    <Input
     id="phone"
     name="phone"
     placeholder="1234567890"
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.phone}
     className={cn(formik.touched.phone && formik.errors.phone ? "border-red-500" : "")}
    />
    {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>}
   </div>
  </div>
 );
};
