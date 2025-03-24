import { User } from "@/service/user/userService";
import { create } from "zustand";

type AuthState = {
 token: string | null;
 expiresAt: number | null;
 user: User | null;
 isAuthenticated: () => boolean;
 setAuth: (token: string, expiresIn: number) => void;
 setUser: (user: User) => void;
 clearAuth: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => {
 const storedToken = localStorage.getItem("authToken");
 const storedExpiresAt = localStorage.getItem("authExpiresAt");
 const storedUser = localStorage.getItem("authUser");

 return {
  token: storedToken,
  expiresAt: storedExpiresAt ? parseInt(storedExpiresAt, 10) : null,
  user: storedUser ? JSON.parse(storedUser) : null,

  isAuthenticated: () => {
   const { token, expiresAt } = get();
   return !!token && !!expiresAt && Date.now() < expiresAt;
  },

  setAuth: (token, expiresIn) => {
   const expirationTime = Date.now() + expiresIn * 1000;
   set({ token, expiresAt: expirationTime });
   localStorage.setItem("authToken", token);
   localStorage.setItem("authExpiresAt", expirationTime.toString());
  },

  setUser: (user) => {
   set({ user });
   localStorage.setItem("authUser", JSON.stringify(user));
  },

  clearAuth: () => {
   set({ token: null, expiresAt: null, user: null });
   localStorage.removeItem("authToken");
   localStorage.removeItem("authExpiresAt");
   localStorage.removeItem("authUser");
  },
 };
});
