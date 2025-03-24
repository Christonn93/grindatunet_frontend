import { create } from "zustand";
import { DateRange } from "react-day-picker";

type BookingState = {
 name: string;
 email: string;
 phone: string;
 guests: number;
 price: number;
 range: DateRange | undefined;

 setName: (value: string) => void;
 setEmail: (value: string) => void;
 setPhone: (value: string) => void;
 setGuests: (value: number) => void;
 setPrice: (value: number) => void;
 setRange: (range: DateRange | undefined) => void;

 reset: () => void;
};

export const useBookingStore = create<BookingState>((set) => ({
 name: "",
 email: "",
 phone: "",
 guests: 1,
 price: 0,
 range: undefined,

 setName: (value) => set({ name: value }),
 setEmail: (value) => set({ email: value }),
 setPhone: (value) => set({ phone: value }),
 setGuests: (value) => set({ guests: value }),
 setPrice: (value) => set({ price: value }),
 setRange: (range) => set({ range }),

 reset: () =>
  set({
   name: "",
   email: "",
   phone: "",
   guests: 1,
   price: 0,
   range: undefined,
  }),
}));
