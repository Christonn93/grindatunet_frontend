import { useAuthActions } from "@/hooks/handlers/useAuthRedirect";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
 const { isAuthenticated } = useAuthActions();

 return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export const ProtectedRouteTemp = () => {
 return <Outlet />;
};
