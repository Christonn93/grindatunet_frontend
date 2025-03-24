import { createContext } from "react";

export type SidebarContextType = {
 isOpen: boolean;
 toggle: () => void;
 close: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
