import { createBooking } from "@/service/booking/booking.service";
import { useMutation } from "@tanstack/react-query";

export const useCreateBooking = () => {
 return useMutation({
  mutationFn: createBooking,
 });
};
