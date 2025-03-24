import { Button } from "react-day-picker";
import { PaymentDialog } from "../dialog/PaymentDialog";
import { BookingFormValues } from "@/utils/initialValues/initialBookingFormValues";
import { FormikProps } from "formik";
import { useBooking } from "@/hooks/handlers/useBooking";

export const FormButtonGroup = ({ formik }: { formik: FormikProps<BookingFormValues> }) => {
 const { handleConfirm } = useBooking();

 return (
  <div>
   <PaymentDialog />
   <div className="flex space-x-4 justify-end">
    <Button onClick={handleConfirm} className="px-4 py-2 rounded">
     Confirm Booking
    </Button>
    <Button type="button" onClick={formik.handleReset} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
     Reset Form
    </Button>
   </div>
  </div>
 );
};
