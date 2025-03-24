import { ReactNode } from "react";

export const MainWrapper = ({ children }: { children: ReactNode }) => {
 return <div className="flex items-center justify-center min-h-full">{children}</div>;
};
