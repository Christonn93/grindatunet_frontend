import { BookingForm } from "@/components/form/BookingForm";
import { MainHeading } from "@/components/text/MainHeading";

export const Booking = () => {
 return (
  <div>
   <div>
    <MainHeading text="Hyttebooking" />
   </div>

   <div>
    <BookingForm />
   </div>
  </div>
 );
};
