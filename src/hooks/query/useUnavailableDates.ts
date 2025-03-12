import { fetchUnavailableDates } from "@/service/fetchUnavailableDates";
import { useQuery } from "@tanstack/react-query";

export const useUnavailableDates = () => {
 return useQuery({
  queryKey: ["unavailableDates"],
  queryFn: fetchUnavailableDates,
 });
};
