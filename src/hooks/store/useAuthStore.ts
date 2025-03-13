import { create } from "zustand";

interface AuthState {
 user: { id: string; name: string } | null;
 isAuthenticated: boolean;
 login: () => void;
 logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
 user: null, // Ensure this exists
 isAuthenticated: false,
 login: () => set({ isAuthenticated: true }),
 logout: () => set({ isAuthenticated: false }),
}));
