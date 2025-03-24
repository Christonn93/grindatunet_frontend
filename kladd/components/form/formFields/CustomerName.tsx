import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";
import { FormikProps } from "formik";

export const CustomerName = ({ formik }: { formik: FormikProps<BookingFormValues> }) => {
 return (
  <div className="grid grid-cols-2 gap-4">
   <div className="space-y-2">
    <Label htmlFor="firstName">First Name</Label>
    <Input
     id="firstName"
     name="firstName"
     placeholder="John"
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.firstName}
     className={cn(formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "")}
    />
    {formik.touched.firstName && formik.errors.firstName && <p className="text-red-500 text-xs mt-1">{formik.errors.firstName}</p>}
   </div>
   <div className="space-y-2">
    <Label htmlFor="lastName">Last Name</Label>
    <Input
     id="lastName"
     name="lastName"
     placeholder="Doe"
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.lastName}
     className={cn(formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "")}
    />
    {formik.touched.lastName && formik.errors.lastName && <p className="text-red-500 text-xs mt-1">{formik.errors.lastName}</p>}
   </div>
  </div>
 );
};
