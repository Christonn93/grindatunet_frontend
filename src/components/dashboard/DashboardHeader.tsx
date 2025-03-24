import { DashboardActions } from "./dashboard-ui/DashboardActions";
import { DashboardLink } from "./dashboard-ui/DashboardLink";
import { DashboardToggle } from "./dashboard-ui/DashboardToggle";

export function DashboardHeader() {
 return (
  <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-white px-4 md:px-6">
   <DashboardToggle />
   <DashboardLink />
   <DashboardActions />
  </header>
 );
}
