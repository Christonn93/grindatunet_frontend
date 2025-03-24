import { useAuthStore } from "@/hooks/store/authStore";
import { registerUser } from "@/service/auth/authService";
import { logger } from "@/utils/logger/logger";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
 const navigate = useNavigate();

 return useMutation({
  mutationFn: registerUser,
  onSuccess: (data) => {
   logger.info("Registration successful:", data);

   const roles = useAuthStore.getState().user?.roles || [];

   if (roles.includes("administrator")) {
    navigate("/admin/kontrollpanel");
   } else {
    navigate("/bruker/kontrollpanel");
   }
  },
  onError: (error) => {
   logger.error("Registration failed:", error);
  },
 });
};
