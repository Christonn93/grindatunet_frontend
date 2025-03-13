import { fetchNews } from "@/service/news/fetchNews";
import { useQuery } from "@tanstack/react-query";

export const useNews = () => {
 return useQuery({
  queryKey: ["news"],
  queryFn: fetchNews,
  staleTime: 1000 * 60 * 5,
  retry: 2,
 });
};
