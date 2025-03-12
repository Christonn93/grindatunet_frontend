import { fetchWeather } from "@/service/fetchWeather";
import { useQuery } from "@tanstack/react-query";

export const useWeather = () => {
 return useQuery({
  queryKey: ["weather"],
  queryFn: fetchWeather,
 });
};
