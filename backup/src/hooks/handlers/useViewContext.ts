import { useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const useViewContext = () => {
 const { user } = useAuthStore();
 const isAdmin = user?.roles?.includes("administrator");

 const { pathname } = useLocation();

 const isInAdmin = pathname.startsWith("/admin");
 const isInUser = pathname.startsWith("/bruker");
 const isInDashboard = isInAdmin || isInUser;

 return {
  isAdmin,
  isInAdmin,
  isInUser,
  isInDashboard,
 };
};
