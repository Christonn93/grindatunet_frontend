import { Link, useLocation } from "react-router-dom";
import { routes } from "@/route/routes";
import { cn } from "@/lib/utils";

export const Navigation = () => {
 const location = useLocation();

 return (
  <nav>
   <ul className="hidden lg:flex gap-4">
    {routes.map((link) => {
     const isActive = location.pathname === link.path;

     return (
      <li>
       <Link
        key={link.path}
        to={link.path}
        className={cn("flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors", isActive ? "bg-primary text-primary-foreground" : "hover:bg-background hover:text-black")}
       >
        <link.icon className="h-4 w-4" />
        {link.name}
       </Link>
      </li>
     );
    })}
   </ul>
  </nav>
 );
};
