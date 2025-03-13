import { axiosInstance } from "../axiosInstance";

type BookingData = {
 name: string;
 email: string;
 phone: string;
 guests: number;
 checkin_date: string;
 checkout_date: string;
};

export const createBooking = async (bookingData: BookingData) => {
 try {
  const { data } = await axiosInstance.post("/wp-json/wp/v2/bookings", bookingData, {
   headers: { "Content-Type": "application/json" },
  });
  return data;
 } catch (error: unknown) {
  console.error("Error creating booking:", error);
  throw error;
 }
};

export const fetchUnavailableDates = async (): Promise<string[]> => {
 try {
  const { data } = await axiosInstance.get("/wp-json/wp/v2/bookings/unavailable-dates");
  console.log("Unavailable dates:", data);
  return data;
 } catch (error) {
  console.error("Error fetching unavailable dates:", error);
  throw error;
 }
};

export const confirmPayment = async (bookingId: number): Promise<void> => {
 try {
  const response = await axiosInstance.post("/wp-json/wp/v2/bookings/confirm-payment", {
   booking_id: bookingId,
  });
  return response.data;
 } catch (error) {
  console.error("Error confirming payment:", error);
  throw error;
 }
};
