import { SidebarProvider } from "@/providers/SidebarProvider";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardFooter } from "./DashboardFooter";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
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
