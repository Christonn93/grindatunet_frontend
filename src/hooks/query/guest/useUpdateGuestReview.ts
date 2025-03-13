import { updateGuestReview } from "@/service/guest/guest.service";
import { useMutation } from "@tanstack/react-query";

export const useUpdateGuestReview = () => {
 return useMutation({
  mutationFn: ({ id, updatedReview }: { id: number; updatedReview: Partial<{ title: string; description: string; images: string; tags: string[] }> }) => updateGuestReview(id, updatedReview),
 });
};
