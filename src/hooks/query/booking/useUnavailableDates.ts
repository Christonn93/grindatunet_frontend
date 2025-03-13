import { fetchUnavailableDates } from "@/service/booking/booking.service";
import { useQuery } from "@tanstack/react-query";

export const useUnavailableDates = () => {
 return useQuery({
  queryKey: ["unavailableDates"],
  queryFn: fetchUnavailableDates,
 });
};
