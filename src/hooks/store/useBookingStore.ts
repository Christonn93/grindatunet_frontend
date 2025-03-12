import { create } from "zustand";

// Define the booking state type
type BookingState = {
 name: string;
 guests: number;
 startDate: Date | null;
 endDate: Date | null;
 startTime: string;
 endTime: string;
 purpose: "pleasure" | "business";
 termsAccepted: boolean;
 showModal: boolean;
 setBookingDetails: (key: keyof BookingState, value: unknown) => void;
 resetBooking: () => void;
};

export const useBookingStore = create<BookingState>((set) => ({
 name: "",
 guests: 1,
 startDate: null,
 endDate: null,
 startTime: "15:00",
 endTime: "12:00",
 purpose: "pleasure",
 termsAccepted: false,
 showModal: false,

 setBookingDetails: (key, value) => set((state) => ({ ...state, [key]: value })),
 resetBooking: () =>
  set({
   name: "",
   guests: 1,
   startDate: null,
   endDate: null,
   startTime: "15:00",
   endTime: "12:00",
   purpose: "pleasure",
   termsAccepted: false,
   showModal: false,
  }),
}));
