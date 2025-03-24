import { useAuthStore } from "@/hooks/store/authStore";
import { loginUser } from "@/service/auth/authService";
import { logger } from "@/utils/logger/logger";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
 const navigate = useNavigate();

 return useMutation({
  mutationFn: loginUser,
  onSuccess: (data) => {
   logger.info("Login successful:", data);

   const roles = useAuthStore.getState().user?.roles || [];

   if (roles.includes("administrator")) {
    navigate("/admin/kontrollpanel");
   } else {
    navigate("/bruker/kontrollpanel");
   }
  },
  onError: (error) => {
   logger.error("Login failed:", error);
  },
 });
};
