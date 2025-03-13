import { axiosInstance } from "@/service/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useFetchMedia = () => {
 return useQuery({
  queryKey: ["media"],
  queryFn: async () => {
   const response = await axiosInstance.get("/media");
   return response.data;
  },
 });
};
