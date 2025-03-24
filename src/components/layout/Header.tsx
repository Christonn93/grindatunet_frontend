import { useIsAuthenticated } from "@/hooks/helpers/useIsAuthenticated";
import { Navigation } from "../nav/Navigation";
import { useAuthStore } from "@/hooks/store/authStore";
import { SwitchView } from "../links/SwitchView";

export const Header = () => {
 const isAuthenticated = useIsAuthenticated();
 const isAdmin = useAuthStore().user?.roles[0] === "administrator";

 return (
  <header className="p-4 flex justify-between items-center shadow-md">
   <div className="flex items-center gap-4">
    <h1 className="text-2xl">Grindatunet</h1>
    {isAuthenticated && isAdmin && <SwitchView />}
   </div>
   {isAuthenticated && <Navigation />}
  </header>
 );
};
