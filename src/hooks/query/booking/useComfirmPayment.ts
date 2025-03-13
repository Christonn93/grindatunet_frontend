import { confirmPayment } from "@/service/booking/booking.service";
import { useMutation } from "@tanstack/react-query";

export const useConfirmPayment = () => {
 return useMutation({
  mutationFn: (bookingId: number) => confirmPayment(bookingId),
 });
};
