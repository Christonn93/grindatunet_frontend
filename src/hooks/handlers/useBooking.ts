import { useBookingStore } from "../store/useBookingStore";
import { useBookingActions } from "./useBookingActions";
import { usePriceCalculation } from "./usePriceCalculation";

export const useBooking = () => {
 const { name, guests, startDate, endDate, startTime, endTime, purpose, termsAccepted, showModal, setBookingDetails, resetBooking } = useBookingStore();

 const { calculatePrice } = usePriceCalculation();
 const { handleConfirm, handlePayment } = useBookingActions();

 return {
  name,
  setName: (value: string) => setBookingDetails("name", value),
  guests,
  setGuests: (value: number) => setBookingDetails("guests", value),
  startDate,
  setStartDate: (value: Date | null) => setBookingDetails("startDate", value),
  endDate,
  setEndDate: (value: Date | null) => setBookingDetails("endDate", value),
  startTime,
  setStartTime: (value: string) => setBookingDetails("startTime", value),
  endTime,
  setEndTime: (value: string) => setBookingDetails("endTime", value),
  purpose,
  setPurpose: (value: "pleasure" | "business") => setBookingDetails("purpose", value),
  termsAccepted,
  setTermsAccepted: (value: boolean) => setBookingDetails("termsAccepted", value),
  showModal,
  setShowModal: (value: boolean) => setBookingDetails("showModal", value),
  calculatePrice,
  handleConfirm,
  handlePayment,
  resetBooking,
 };
};
