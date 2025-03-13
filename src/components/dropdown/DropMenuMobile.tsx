import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

export const DropMenuMobile = () => {
 return (
  <div className="block px-4 py-2 hover:bg-gray-100">
   <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center space-x-2 w-full">
     <span>Profile</span>
     <ChevronDown size={16} />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="absolute left-4 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200">
     <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">
      <Link to="/minside" className="flex items-center space-x-2">
       <User size={16} />
       <span>My Page</span>
      </Link>
     </DropdownMenuItem>
     <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">
      <button className="flex items-center space-x-2 w-full text-left">
       <LogOut size={16} />
       <span>Logout</span>
      </button>
     </DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  </div>
 );
};
