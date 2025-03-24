import { axiosInstance } from "@/service/auth/axiosInstance";
import { Payment, PaymentPayload } from "@/types/payment";

export const createBookingPayment = async (data: PaymentPayload): Promise<Payment> => {
 try {
  const response = await axiosInstance.post<Payment>("/grindatunet/v1/booking/payment", data);
  return response.data;
 } catch (error) {
  console.error("Failed to createBookingPayment:", error);
  throw new Error("Error during createBookingPayment");
 }
};
