import { deleteGuestReview } from "@/service/guest/guest.service";
import { useMutation } from "@tanstack/react-query";

export const useDeleteGuestReview = () => {
 return useMutation({
  mutationFn: deleteGuestReview,
 });
};
