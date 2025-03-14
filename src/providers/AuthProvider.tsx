import { AuthContext, AuthContextType } from "@/context/AuthContext";
import { axiosInstance } from "@/service/axiosInstance";
import { isTokenExpired } from "@/utils/validation/token";
import { useEffect, useState } from "react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
 const [user, setUser] = useState<AuthContextType["user"]>(null);
 const [token, setToken] = useState<string | null>(null);

 useEffect(() => {
  let storedToken = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refresh_token");

  const refreshAuthToken = async () => {
   try {
    const response = await axiosInstance.post("/refresh", { refresh_token: refreshToken });
    storedToken = response.data.token;
    localStorage.setItem("token", storedToken || "");
    setToken(storedToken);
   } catch {
    logout();
   }
  };

  if (storedToken && isTokenExpired(storedToken)) {
   refreshAuthToken();
  } else {
   setToken(storedToken);
   setUser(JSON.parse(localStorage.getItem("user") || "{}"));
  }
 }, []);

 const login = (token: string, user: unknown) => {
  localStorage.setItem("token", token);
  localStorage.setItem("refresh_token", ""); // You might need to handle refresh token differently
  localStorage.setItem("user", JSON.stringify(user));
  setToken(token);
  setUser(user);
 };

 const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
  setToken(null);
  setUser(null);
 };

 return <AuthContext.Provider value={{ user, token, login, logout }}>{children}</AuthContext.Provider>;
};
