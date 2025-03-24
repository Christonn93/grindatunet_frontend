import { axiosInstance } from "@/service/auth/axiosInstance";
import { Subscriber } from "@/types/subscriber";

export const fetchSubscribers = async (): Promise<Subscriber[]> => {
 try {
  const response = await axiosInstance.get<Subscriber[]>("/grindatunet/v1/subscribers");
  return response.data;
 } catch (error) {
  console.error("Failed to fetchSubscribers:", error);
  throw new Error("Error during fetchSubscribers");
 }
};
