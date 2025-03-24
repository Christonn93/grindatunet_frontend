import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/hooks/store/authStore";
import { logger } from "@/utils/logger/logger";

export const ProtectedRoute = () => {
 const isAuthenticated = useAuthStore((state) => state.isAuthenticated());
 logger.info("ProtectedRoute isAuthenticated:", isAuthenticated);
 return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
