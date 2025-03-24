import { axiosInstance } from "@/service/auth/axiosInstance";
import { Payment } from "@/types/payment";

export const fetchBookingPayments = async (): Promise<Payment[]> => {
 try {
  const response = await axiosInstance.get<Payment[]>("/grindatunet/v1/booking/payment");
  return response.data;
 } catch (error) {
  console.error("Failed to fetchBookingPayments:", error);
  throw new Error("Error during fetchBookingPayments");
 }
};
