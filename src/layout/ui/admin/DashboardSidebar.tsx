import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LifeBuoy, LogOut } from "lucide-react";
import { useSidebar } from "@/hooks/handlers/useSidebar";
import { DashboardSidebarNav } from "@/components/common/nav/DashboardSidebarNav";

export function DashboardSidebar() {
 const { isOpen } = useSidebar();

 return (
  <div
   id="dashboard-sidebar"
   className={cn("fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-white transition-transform lg:static lg:translate-x-0", isOpen ? "translate-x-0" : "-translate-x-full")}
  >
   <DashboardSidebarNav />
   <div className="border-t p-4">
    <div className="flex flex-col gap-1">
     <Button variant="ghost" className="justify-start gap-2">
      <LifeBuoy className="h-4 w-4" />
      Help & Support
     </Button>
     <Button variant="ghost" className="justify-start gap-2 text-red-500 hover:text-red-500">
      <LogOut className="h-4 w-4" />
      Logout
     </Button>
    </div>
   </div>
  </div>
 );
}
