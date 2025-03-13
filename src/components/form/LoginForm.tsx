import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WelcomeContainer } from "../container/WelcomeContainer";
import { LoginButtonGroup } from "../buttons/LoginButtonGroup";
import { LoginButton } from "../buttons/LoginButton";
import { useAccessToken } from "@/hooks/query/useAuth";
import { useLogin } from "@/hooks/query/useLogin";
import { useAuthStore } from "@/hooks/store/useAuthStore";

export const LoginForm = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const { mutate: login } = useLogin();
 const { mutate: exchangeToken } = useAccessToken();
 const setUser = useAuthStore((state) => state.setUser);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  login({ email, password });
 };

 // Handle OAuth Token Exchange after redirect
 const handleOAuthCallback = async () => {
  exchangeToken(undefined, {
   onSuccess: (data) => {
    if (typeof data.oauth_token === "string") {
     setUser({ token: data.oauth_token });
    }
   },
  });
 };

 return (
  <div className="flex flex-col gap-6">
   <form onSubmit={handleSubmit}>
    <div className="flex flex-col gap-6">
     <WelcomeContainer />
     <div className="flex flex-col gap-6">
      <div className="grid gap-2">
       <Label htmlFor="email">Epost</Label>
       <Input id="email" type="email" placeholder="m@example.com" required className="text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="grid gap-2">
       <Label htmlFor="password">Password</Label>
       <Input id="password" type="password" placeholder="••••••••" required className="text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <LoginButton />
     </div>
     <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
      <span className="relative z-10 bg-background px-2">Or</span>
     </div>
     <LoginButtonGroup />
    </div>
   </form>
   <button onClick={handleOAuthCallback} className="text-blue-500">
    Complete OAuth Login
   </button>
  </div>
 );
};
