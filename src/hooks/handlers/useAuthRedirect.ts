import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useEffect } from "react";

const useAuthRedirect = () => {
 const navigate = useNavigate();
 const { isAuthenticated, login } = useAuthStore();

 useEffect(() => {
  if (!isAuthenticated) {
   login();
   navigate("/login");
  }
 }, [isAuthenticated, navigate, login]);
};

export default useAuthRedirect;
