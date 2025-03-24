import { createContext } from "react";

export type AuthContextType = {
 isAuthenticated: boolean;
 login: (token: string, expiresIn: number) => void;
 logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
