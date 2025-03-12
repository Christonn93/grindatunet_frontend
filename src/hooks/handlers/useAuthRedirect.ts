import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const useAuthActions = (redirectOnLogin: string = "/user", redirectOnLogout: string = "/") => {
 const navigate = useNavigate();
 const { isAuthenticated, login, logout } = useAuthStore();

 const handleLogin = () => {
  login();
  navigate(redirectOnLogin);
 };

 const handleLogout = () => {
  logout();
  navigate(redirectOnLogout);
 };

 return { isAuthenticated, handleLogin, handleLogout };
};
