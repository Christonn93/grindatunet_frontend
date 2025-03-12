import type React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WelcomeContainer } from "../container/WelcomeContainer";
import { LoginButtonGroup } from "../buttons/LoginButtonGroup";
import { LoginButton } from "../buttons/LoginButton";

export const LoginForm = ({ className, ...props }: React.ComponentPropsWithoutRef<"div">) => {
 return (
  <div className={cn("flex flex-col gap-6", className)} {...props}>
   <form>
    <div className="flex flex-col gap-6">
     <WelcomeContainer />
     <div className="flex flex-col gap-6">
      <div className="grid gap-2">
       <Label htmlFor="email">Epost</Label>
       <Input id="email" type="email" placeholder="m@example.com" required className="text-black" autoComplete="off" />
      </div>
      <LoginButton />
     </div>
     <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
      <span className="relative z-10 bg-background px-2">Or</span>
     </div>
     <LoginButtonGroup />
    </div>
   </form>
   <div className="text-balance text-center text-xs [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
    By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
   </div>
  </div>
 );
};
