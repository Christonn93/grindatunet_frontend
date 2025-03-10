import { AuthContext } from "@/context/AuthContext";
import { useAuthStore } from "@/hooks/store/useAuthStore";

import { ReactNode, useEffect } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
 const { user, logout } = useAuthStore();

 useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
   useAuthStore.setState({ user: JSON.parse(storedUser) });
  }
 }, []);

 useEffect(() => {
  if (user) {
   localStorage.setItem("user", JSON.stringify(user));
  } else {
   localStorage.removeItem("user");
  }
 }, [user]);

 return <AuthContext.Provider value={{ isAuthenticated: !!user, logout }}>{children}</AuthContext.Provider>;
};
