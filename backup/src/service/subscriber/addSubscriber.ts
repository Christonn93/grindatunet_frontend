import { axiosInstance } from "@/service/auth/axiosInstance";
import { Subscriber, SubscriberPayload } from "@/types/subscriber";

export const addSubscriber = async (data: SubscriberPayload): Promise<Subscriber> => {
 try {
  const response = await axiosInstance.post<Subscriber>("/grindatunet/v1/subscriber", data);
  return response.data;
 } catch (error) {
  console.error("Failed to addSubscriber:", error);
  throw new Error("Error during addSubscriber");
 }
};
