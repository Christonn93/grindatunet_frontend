import { useAuthStore } from "@/hooks/store/authStore";
import { fetchUserData } from "@/service/user/userService";
import { logger } from "@/utils/logger/logger";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
 const setUser = useAuthStore((state) => state.setUser);
 const token = useAuthStore((state) => state.token);

 return useQuery({
  queryKey: ["user"],
  queryFn: fetchUserData,
  enabled: !!token,
  select: (data) => {
   logger.info("[User] Fetched user data:", data);
   setUser(data);
   return data;
  },
 });
};
