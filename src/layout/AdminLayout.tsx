import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/providers/SidebarProvider";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";

export const AdminLayout = () => {
 return (
  <SidebarProvider>
   <div className="flex min-h-screen flex-col">
    <DashboardHeader />
    <div className="flex flex-1">
     <DashboardSidebar />
     <div className="flex flex-col flex-1">
      <main className="flex-1 p-4 md:p-6">
       <Outlet />
      </main>
      <DashboardFooter />
     </div>
    </div>
   </div>
  </SidebarProvider>
 );
};
