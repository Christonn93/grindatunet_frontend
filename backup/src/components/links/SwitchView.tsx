import { useLocation, Link } from "react-router-dom";
import { LayoutDashboard, User } from "lucide-react";

export const SwitchView = () => {
 const { pathname } = useLocation();
 const isInAdmin = pathname.startsWith("/admin");
 const isInUser = pathname.startsWith("/bruker");

 if (!isInAdmin && !isInUser) return null;

 const link = isInAdmin
  ? { to: "/bruker/minside", label: "Vis brukerside", icon: <User className="w-4 h-4" /> }
  : { to: "/admin/kontrollpanel", label: "Kontrollpanel", icon: <LayoutDashboard className="w-4 h-4" /> };

 return (
  <Link to={link.to} className="inline-flex items-center gap-1.5 text-sm text-primary underline hover:opacity-80 transition">
   {link.icon}
   {link.label}
  </Link>
 );
};
