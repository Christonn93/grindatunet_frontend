import { AuthContext } from "@/context/AuthContext";
import { ReactNode, useEffect, useState } from "react";

type AuthProviderProps = {
 children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
 const [token, setToken] = useState<string | null>(localStorage.getItem("authToken"));
 const [expiresAt, setExpiresAt] = useState<number | null>(localStorage.getItem("authExpiresAt") ? parseInt(localStorage.getItem("authExpiresAt")!) : null);

 // 🔹 Check if user is authenticated
 const isAuthenticated = !!token && !!expiresAt && Date.now() < expiresAt;

 // 🔹 Login function
 const login = (token: string, expiresIn: number) => {
  const expirationTime = Date.now() + expiresIn * 1000;
  setToken(token);
  setExpiresAt(expirationTime);
  localStorage.setItem("authToken", token);
  localStorage.setItem("authExpiresAt", expirationTime.toString());
 };

 // 🔹 Logout function
 const logout = () => {
  setToken(null);
  setExpiresAt(null);
  localStorage.removeItem("authToken");
  localStorage.removeItem("authExpiresAt");
 };

 // 🔹 Auto logout when token expires
 useEffect(() => {
  if (expiresAt) {
   const timeout = setTimeout(() => {
    logout();
   }, expiresAt - Date.now());

   return () => clearTimeout(timeout);
  }
 }, [expiresAt]);

 return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
