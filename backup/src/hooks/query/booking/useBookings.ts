import { useBookingStore } from "@/hooks/store/bookingStore";
import { createBooking } from "@/service/booking/createBooking";
import { deleteBooking } from "@/service/booking/deleteBooking";
import { fetchBookings } from "@/service/booking/fetchBookings";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useBookings = () => {
 const setBookings = useBookingStore((state) => state.setBookings);
 return useQuery({
  queryKey: ["bookings"],
  queryFn: fetchBookings,
  select: (data) => {
   const bookings = Array.isArray(data) ? data : [];
   setBookings(bookings);
   return bookings;
  },
 });
};

export const useCreateBooking = () => {
 const queryClient = useQueryClient();

 return useMutation({
  mutationFn: createBooking,
  onSuccess: () => {
   queryClient.invalidateQueries({ queryKey: ["bookings"] });
  },
 });
};

export const useDeleteBooking = () => {
 const queryClient = useQueryClient();

 return useMutation({
  mutationFn: deleteBooking,
  onSuccess: () => {
   queryClient.invalidateQueries({ queryKey: ["bookings"] });
  },
 });
};
