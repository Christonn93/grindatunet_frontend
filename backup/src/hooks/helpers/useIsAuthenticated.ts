import { logger } from "@/utils/logger/logger";
import { useAuthStore } from "../store/authStore";

export const useIsAuthenticated = () => {
 const isAuthenticated = useAuthStore((state) => state.isAuthenticated());
 logger.info("ProtectedRoute isAuthenticated:", isAuthenticated);
 return isAuthenticated;
};
