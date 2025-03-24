import { axiosInstance } from "@/service/auth/axiosInstance";
import { Price, PricePayload } from "@/types/booking";

export const createBookingPrice = async (data: PricePayload): Promise<Price> => {
 try {
  const response = await axiosInstance.post<Price>("/grindatunet/v1/booking/price", data);
  return response.data;
 } catch (error) {
  console.error("Failed to createBookingPrice:", error);
  throw new Error("Error during createBookingPrice");
 }
};
