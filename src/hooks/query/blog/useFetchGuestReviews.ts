import { fetchGuestReviews } from "@/service/guest/guest.service";
import { useQuery } from "@tanstack/react-query";

export const useFetchGuestReviews = () => {
 const { data, isLoading, isError } = useQuery({
  queryKey: ["review"],
  queryFn: () => fetchGuestReviews(),
 });

 return { data, isLoading, isError };
};
