import { useState } from "react";
import { useCreateBooking } from "@/hooks/query/booking/useCreateBooking";

export const useBooking = () => {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  guests: 1,
  checkin_date: "",
  checkout_date: "",
 });

 const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
 const [price, setPrice] = useState<number | null>(null);
 const [bookingId, setBookingId] = useState<number | null>(null);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [error, setError] = useState<string | null>(null);

 const { mutate, isPending, isSuccess } = useCreateBooking();

 const handleDateChange = (selectedRange: [Date, Date]) => {
  if (selectedRange) {
   setDateRange(selectedRange);
   setFormData((prev) => ({
    ...prev,
    checkin_date: selectedRange[0].toISOString().split("T")[0],
    checkout_date: selectedRange[1]?.toISOString().split("T")[0] || selectedRange[0].toISOString().split("T")[0],
   }));
  }
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setError(null); // Clear previous errors
  mutate(formData, {
   onSuccess: (response) => {
    setPrice(response.price);
    setBookingId(response.booking_id);
    setIsModalOpen(true);
   },
   onError: (err) => {
    console.error("Booking Error:", err);
    setError("Failed to create booking. Please try again.");
   },
  });
 };

 return {
  formData,
  setFormData,
  handleDateChange,
  handleSubmit,
  dateRange,
  price,
  bookingId,
  isModalOpen,
  setIsModalOpen,
  isPending,
  isSuccess,
  error,
 };
};
