import { BookingFormValues, initialBookingFormValues } from "@/utils/initialValues/initialBookingFormValues";
import { validationSchema } from "@/utils/validation/bookingFormValidation";
import { useFormik } from "formik";

export const useFormikHandler = () => {
 const formik = useFormik({
  initialValues: initialBookingFormValues,
  validationSchema: validationSchema,
  onSubmit: async (values: BookingFormValues) => {
   console.log(values);
  },
 });

 const handleReset = () => {
  formik.resetForm();
 };

 return { ...formik, handleReset };
};
