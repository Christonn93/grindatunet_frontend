import { axiosInstance } from "@/service/auth/axiosInstance";
import { GuestbookEntry } from "@/types/guestbook";

export const fetchGuestbookEntries = async (): Promise<GuestbookEntry[]> => {
 try {
  const response = await axiosInstance.get<GuestbookEntry[]>("/grindatunet/v1/book");
  return response.data;
 } catch (error) {
  console.error("Failed to fetchGuestbookEntries:", error);
  throw new Error("Error during fetchGuestbookEntries");
 }
};
