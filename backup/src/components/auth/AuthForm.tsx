import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthTitle } from "./AuthTitle";
import { AuthFormFields } from "./AuthFormFields";
import { AuthModeToggle } from "./AuthModeToggle";
import { useLogin } from "@/hooks/query/auth/useLogin";
import { useRegister } from "@/hooks/query/auth/useRegister";

export function AuthForm() {
 const [mode, setMode] = useState<"login" | "register">("login");
 const isLogin = mode === "login";

 const loginMutation = useLogin();
 const registerMutation = useRegister();

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  if (mode === "login") {
   loginMutation.mutate({ username, password });
  } else {
   registerMutation.mutate({ name, username, password });
  }
 };

 return (
  <div className="w-full max-w-xl rounded-2xl shadow-xl border px-8 py-10 transition-all duration-300 bg-gradient-to-br from-orange-50 to-purple-100">
   <AuthTitle isLogin={isLogin} />
   <form onSubmit={handleSubmit} className="space-y-4">
    <AuthFormFields isLogin={isLogin} />
    <Button type="submit" className="w-full rounded-lg bg-primary text-white font-medium hover:bg-background hover:text-black hover:shadow-xl transition-colors">
     {isLogin ? "Logg in" : "Registrer deg"}
    </Button>
   </form>
   <AuthModeToggle isLogin={isLogin} setMode={setMode} />
  </div>
 );
}
