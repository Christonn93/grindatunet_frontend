import { axiosInstance } from "@/service/auth/axiosInstance";
import { HytteBookingRequest } from "@/types/booking";

export const fetchBookings = async (): Promise<HytteBookingRequest[]> => {
 try {
  const response = await axiosInstance.get("/bookings");
  return response.data;
 } catch (error) {
  console.error("Failed to fetchBookings:", error);
  throw new Error("Error during fetchBookings");
 }
};
