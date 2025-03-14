import { createContext } from "react";

export type AuthContextType = {
 user: { id: number; email: string; displayName: string } | null;
 token: string | null;
 login: (token: string, user: unknown) => void;
 logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
