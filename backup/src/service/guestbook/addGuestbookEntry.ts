import { axiosInstance } from "@/service/auth/axiosInstance";
import { GuestbookEntry, GuestbookPayload } from "@/types/guestbook";

export const addGuestbookEntry = async (data: GuestbookPayload): Promise<GuestbookEntry> => {
 try {
  const response = await axiosInstance.post<GuestbookEntry>("/grindatunet/v1/book", data);
  return response.data;
 } catch (error) {
  console.error("Failed to addGuestbookEntry:", error);
  throw new Error("Error during addGuestbookEntry");
 }
};
