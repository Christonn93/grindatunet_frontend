import { BookingDetails } from "../booking/BookingDetails";
import { useBooking } from "@/hooks/handlers/useBooking";
import { PaymentDialog } from "../booking/PaymentDialog";

export const BookingForm = () => {
 const { formData, setFormData, handleSubmit, price, isModalOpen, setIsModalOpen, isPending, error } = useBooking();

 return (
  <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
   <h2 className="text-xl font-semibold mb-4 text-center">Create Booking</h2>

   <BookingDetails formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isPending={isPending} error={error} />

   <PaymentDialog isOpen={isModalOpen} price={price} onClose={() => setIsModalOpen(false)} />
  </div>
 );
};
