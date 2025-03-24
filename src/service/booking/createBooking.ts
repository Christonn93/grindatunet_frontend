import { axiosInstance } from "@/service/auth/axiosInstance";
import { Booking, BookingPayload } from "@/types/booking";

export const createBooking = async (data: BookingPayload): Promise<Booking> => {
 try {
  const response = await axiosInstance.post<Booking>("/grindatunet/v1/booking", data);
  return response.data;
 } catch (error) {
  console.error("Failed to createBooking:", error);
  throw new Error("Error during createBooking");
 }
};
