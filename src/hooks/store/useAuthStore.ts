import { AuthState, User } from "@/types/store.types";
import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
 user: JSON.parse(localStorage.getItem("user") || "null"),
 token: localStorage.getItem("token") || null,

 login: (userData: NonNullable<User>) => {
  set({ user: userData, token: userData.accessToken });
  localStorage.setItem("user", JSON.stringify(userData));
  localStorage.setItem("token", userData.accessToken);
 },

 logout: () => {
  set({ user: null, token: null });
  localStorage.removeItem("user");
  localStorage.removeItem("token");
 },
}));
