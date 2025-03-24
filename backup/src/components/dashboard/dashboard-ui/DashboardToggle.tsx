import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/handlers/useSidebar";
import { Menu } from "lucide-react";

export const DashboardToggle = () => {
 const { toggle } = useSidebar();

 return (
  <Button variant="outline" size="icon" id="sidebar-toggle" className="lg:hidden mr-2" onClick={toggle}>
   <Menu className="h-5 w-5" />
   <span className="sr-only">Toggle sidebar</span>
  </Button>
 );
};
