import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export const DashboardActions = () => {
 return (
  <div className="ml-auto flex items-center gap-2">
   <Button variant="outline" size="icon" className="rounded-full">
    <Bell className="h-4 w-4" />
    <span className="sr-only">Notifications</span>
   </Button>
  </div>
 );
};
