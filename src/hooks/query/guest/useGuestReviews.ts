import { fetchGuestReviews } from "@/service/guest/guest.service";
import { useQuery } from "@tanstack/react-query";

export const useGuestReviews = () => {
 return useQuery({
  queryKey: ["guest_reviews"],
  queryFn: fetchGuestReviews,
 });
};
