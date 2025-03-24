import { SwitchView } from "@/components/common/switch/SwitchView";
import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

export const DashboardLink = () => {
 return (
  <div className="flex gap-4">
   <Link to="/admin/kontrollpanel" className="flex items-center gap-2 font-semibold text-foreground">
    <LayoutDashboard className="h-6 w-6" />
    <span>Dashboard</span>
   </Link>
   <SwitchView />
  </div>
 );
};
