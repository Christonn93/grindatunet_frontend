import { create } from "zustand";

type AuthState = {
 user: null | { name: string; email: string };
 isAuthenticated: boolean;
 login: () => void;
 logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
 user: null,
 isAuthenticated: false,
 login: () => set({ isAuthenticated: true }),
 logout: () => set({ isAuthenticated: false }),
}));
