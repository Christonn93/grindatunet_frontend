import { axiosInstance } from "@/service/auth/axiosInstance";
import { Price } from "@/types/booking";

export const fetchBookingPrices = async (): Promise<Price[]> => {
 try {
  const response = await axiosInstance.get<Price[]>("/grindatunet/v1/booking/prices");
  return response.data;
 } catch (error) {
  console.error("Failed to fetchBookingPrices:", error);
  throw new Error("Error during fetchBookingPrices");
 }
};
