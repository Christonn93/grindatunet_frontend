import { useBookingStore } from "../store/useBookingStore";

export const useBookingActions = () => {
 const { termsAccepted, setBookingDetails } = useBookingStore();

 const handleConfirm = () => {
  if (!termsAccepted) {
   alert("You must accept the terms and policy");
   return;
  }
  setBookingDetails("showModal", true);
 };

 const handlePayment = (method: "bill" | "vipps") => {
  if (method === "bill") {
   alert("An email confirmation with payment details has been sent.");
  } else {
   alert("Payment confirmed via Vipps. Your stay is now booked!");
  }
  setBookingDetails("showModal", false);
 };

 return { handleConfirm, handlePayment };
};
