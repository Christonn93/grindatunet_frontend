import { useQuery } from "@tanstack/react-query";
import { useAxios } from "./useAxios";

export const useFetchMedia = () => {
 const axiosInstance = useAxios();

 return useQuery({
  queryKey: ["media"],
  queryFn: async () => {
   const response = await axiosInstance.get("/media");
   return response.data;
  },
 });
};
