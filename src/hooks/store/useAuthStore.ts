import { create } from "zustand";

type AuthState = {
 user: null | { token: string };
 setUser: (user: AuthState["user"]) => void;
 logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
 user: null,
 setUser: (user) => set({ user }),
 logout: () => set({ user: null }),
}));
