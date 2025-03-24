import { axiosInstance } from "../auth/axiosInstance";

export type Booking = {
 id: number;
 name: string;
 email: string;
 phone: string;
 checkin: string;
 checkout: string;
 guests: number;
 status: string;
};

// 🔹 Fetch all bookings
export const fetchBookings = async (): Promise<Booking[]> => {
 try {
  const response = await axiosInstance.get<Booking[]>("/bookings");
  return response.data;
 } catch (error) {
  console.error("Failed to fetch bookings:", error);
  throw new Error("Error fetching bookings");
 }
};

// 🔹 Create a new booking
export const createBooking = async (data: Omit<Booking, "id" | "status">): Promise<void> => {
 try {
  await axiosInstance.post("/booking", data);
 } catch (error) {
  console.error("Failed to create booking:", error);
  throw new Error("Error creating booking");
 }
};

// 🔹 Delete a booking
export const deleteBooking = async (id: number): Promise<void> => {
 try {
  await axiosInstance.delete(`/booking/${id}`);
 } catch (error) {
  console.error("Failed to delete booking:", error);
  throw new Error("Error deleting booking");
 }
};
