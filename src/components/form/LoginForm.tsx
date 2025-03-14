import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/query/auth/useLogin";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
 const navigate = useNavigate();
 const loginMutation = useLogin();
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  loginMutation.mutate(
   { username, password },
   {
    onSuccess: () => {
     navigate("/minside"); // Redirect after login
    },
   }
  );
 };

 return (
  <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-lg">
   <h2 className="text-xl font-semibold mb-4">Login</h2>
   <form onSubmit={handleLogin} className="space-y-4">
    <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    {loginMutation.isError && <p className="text-red-500">Invalid credentials</p>}
    <Button type="submit" disabled={loginMutation.isPending} className="w-full">
     {loginMutation.isPending ? "Logging in..." : "Login"}
    </Button>
   </form>
  </div>
 );
};
