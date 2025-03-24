import { fetchWeather } from "@/service/weather/fetchWeather";
import { useQuery } from "@tanstack/react-query";

export const useWeather = () => {
 const { data, isLoading, error } = useQuery({
  queryKey: ["weather"],
  queryFn: fetchWeather,
 });

 return { data, isLoading, error };
};
