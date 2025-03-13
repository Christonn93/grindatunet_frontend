import { postGuestReview } from "@/service/guest/guest.service";
import { useMutation } from "@tanstack/react-query";

export const useCreateGuestReview = () => {
 return useMutation({
  mutationFn: postGuestReview,
 });
};
