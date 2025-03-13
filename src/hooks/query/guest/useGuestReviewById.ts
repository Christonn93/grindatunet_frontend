import { fetchGuestReviewById } from "@/service/guest/guest.service";
import { useQuery } from "@tanstack/react-query";

export const useGuestReview = (id: number) => {
 return useQuery({
  queryKey: ["guest_review", id],
  queryFn: async () => fetchGuestReviewById(id),
  enabled: !!id,
 });
};
