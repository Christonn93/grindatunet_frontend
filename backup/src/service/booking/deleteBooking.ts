import { axiosInstance } from "@/service/auth/axiosInstance";

export const deleteBooking = async (id: number): Promise<void> => {
 try {
  await axiosInstance.delete(`/grindatunet/v1/booking/${id}`);
 } catch (error) {
  console.error(`Failed to delete booking ID ${id}:`, error);
  throw new Error("Error deleting booking");
 }
};
