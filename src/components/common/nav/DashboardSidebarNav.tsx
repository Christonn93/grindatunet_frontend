import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { adminRoutes } from "@/route/adminRoutes";
import { cn } from "@/lib/utils";

import { ChevronDown, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const DashboardSidebarNav = () => {
 const location = useLocation();
 const [expanded, setExpanded] = useState<string | null>(null);

 // Auto-expand based on current route
 useEffect(() => {
  const matchedGroup = adminRoutes.find((route) => location.pathname.startsWith(route.path) && route.children?.length);
  if (matchedGroup) {
   setExpanded(matchedGroup.id);
  }
 }, [location.pathname]);

 const handleMainClick = (id: string, isGroup: boolean) => {
  if (isGroup) {
   setExpanded((prev) => (prev === id ? null : id));
  }
 };

 return (
  <ScrollArea className="flex-1 px-2 py-4">
   <nav className="flex flex-col gap-1">
    {adminRoutes.map((route) => {
     const isGroup = (route.children?.length ?? 0) > 0;
     const isActive = location.pathname === route.path;
     const isExpanded = expanded === route.id;

     return (
      <div key={route.id}>
       <div className="flex items-center w-full">
        {/* Top-Level Link */}
        <Link
         to={route.path}
         onClick={() => handleMainClick(route.id, isGroup)}
         className={cn(
          "flex flex-1 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive ? "bg-primary text-primary-foreground" : "hover:bg-primary hover:text-white"
         )}
        >
         <route.icon className="h-4 w-4" />
         <span className="flex-1 text-left">{route.name}</span>
        </Link>

        {/* Optional Expand/Collapse Button */}
        {isGroup && (
         <button onClick={() => handleMainClick(route.id, true)} className="px-2 text-muted-foreground hover:text-white" aria-label="Toggle submenu">
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
         </button>
        )}
       </div>

       {/* Submenu */}
       {isGroup && isExpanded && (
        <ul className="mt-1 space-y-1 pl-3 text-sm bg-gray-400/30 py-2">
         {route.children?.map((sub) => {
          const isChildActive = location.pathname === sub.path;
          return (
           <li key={sub.path}>
            <Link to={sub.path} className={cn("block rounded px-2 py-1 transition-colors", isChildActive ? "bg-primary text-white font-medium" : "text-foreground hover:bg-primary hover:text-white")}>
             {sub.name}
            </Link>
           </li>
          );
         })}
        </ul>
       )}
      </div>
     );
    })}
   </nav>
  </ScrollArea>
 );
};
