import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "@/route/routes";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon } from "lucide-react";
import { colorMap, ColorMapKey } from "@/style/colorMap";
export const BottomNav = () => {
 const location = useLocation();
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const mainRoutes = routes.filter((route) => ["dashboard", "booking"].includes(route.id));
 const menuRoutes = routes.filter((route) => ["newsletter", "feedback", "logout"].includes(route.id));

 return (
  <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 shadow-md lg:hidden">
   <div className="grid grid-cols-3 max-w-auto mx-auto h-16">
    {mainRoutes.map((route) => {
     const Icon = route.icon;
     const baseColor = colorMap[route.color as ColorMapKey] || colorMap.default;

     const isActive = location.pathname === route.path;
     return (
      <Link key={route.id} to={route.path} className="flex flex-col items-center justify-center px-3 py-2 group">
       <Icon className={cn("w-6 h-6", isActive ? colorMap.active : baseColor)} />
       <span className={cn("text-sm", isActive ? colorMap.active : baseColor)}>{route.name}</span>
      </Link>
     );
    })}

    {/* Menu Trigger */}
    <button onClick={() => setIsMenuOpen((prev) => !prev)} className="flex flex-col items-center justify-center px-3 py-2">
     <MenuIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
     <span className="text-sm text-gray-500 dark:text-gray-400">Menu</span>
    </button>
   </div>
   {isMenuOpen && (
    <div className="absolute bottom-16 left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-md z-50">
     {menuRoutes.map((route) => {
      const Icon = route.icon;
      const baseColor = colorMap[route.color as ColorMapKey] || colorMap.default;

      return (
       <Link key={route.id} to={route.path} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
        <Icon className={cn("w-5 h-5", baseColor)} />
        <span className={cn("text-sm", baseColor)}>{route.name}</span>
       </Link>
      );
     })}
    </div>
   )}
  </nav>
 );
};
