import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User } from "lucide-react";

export function DashboardHeaderDropdownMenu() {
 return (
  <DropdownMenu>
   <DropdownMenuTrigger className="focus:outline-none">
    <Avatar className="h-8 w-8">
     <AvatarImage src="/images/avatar-placeholder.png" alt="User" />
     <AvatarFallback className="bg-foreground text-white">UN</AvatarFallback>
    </Avatar>
   </DropdownMenuTrigger>

   <DropdownMenuContent align="end" className="w-48">
    <DropdownMenuLabel className="text-xs">My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />

    <DropdownMenuItem className="flex items-center gap-2">
     <User className="h-4 w-4" />
     Profile
    </DropdownMenuItem>

    <DropdownMenuItem className="flex items-center gap-2">
     <Settings className="h-4 w-4" />
     Settings
    </DropdownMenuItem>

    <DropdownMenuSeparator />

    <DropdownMenuItem className="flex items-center gap-2 text-red-600 hover:text-red-600">
     <LogOut className="h-4 w-4" />
     Logout
    </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 );
}
