import { HytteBookingRequest } from "@/types/booking";
import { create } from "zustand";

type BookingState = {
 bookings: HytteBookingRequest[];
 setBookings: (bookings: HytteBookingRequest[]) => void;
};

export const useBookingStore = create<BookingState>((set) => ({
 bookings: [],
 setBookings: (bookings) => set({ bookings }),
}));
