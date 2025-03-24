import { Link } from "react-router-dom";
import { Menu, ChevronDown, User, LogOut } from "lucide-react";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const HeaderNav = () => {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <nav className="px-6 py-3">
   <div className="container mx-auto flex justify-between items-center">
    {/* Left-side menu */}
    <ul className="hidden md:flex space-x-6 text-gray-700">
     <li>
      <Link to="/home" className="hover:text-gray-900">
       Home
      </Link>
     </li>
     <li>
      <Link to="/news" className="hover:text-gray-900">
       News
      </Link>
     </li>
     <li>
      <Link to="/booking" className="hover:text-gray-900">
       Booking
      </Link>
     </li>
     <li>
      <Link to="/reviews" className="hover:text-gray-900">
       Guest Reviews
      </Link>
     </li>
    </ul>

    {/* Dropdown Menu */}
    <div className="relative">
     <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 px-4 py-2 rounded-lg transition">
       <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
       </Avatar>
       <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200">
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

    {/* Mobile Menu Button */}
    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
     <Menu size={24} />
    </button>
   </div>

   {/* Mobile Menu */}
   {isOpen && (
    <ul className="md:hidden mt-2 space-y-2 bg-white p-4 shadow-md rounded-md">
     <li>
      <Link to="/home" className="block px-4 py-2 hover:bg-gray-100">
       Home
      </Link>
     </li>
     <li>
      <Link to="/news" className="block px-4 py-2 hover:bg-gray-100">
       News
      </Link>
     </li>
     <li>
      <Link to="/booking" className="block px-4 py-2 hover:bg-gray-100">
       Booking
      </Link>
     </li>
     <li>
      <Link to="/reviews" className="block px-4 py-2 hover:bg-gray-100">
       Guest Reviews
      </Link>
     </li>
     <li>
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
     </li>
    </ul>
   )}
  </nav>
 );
};
