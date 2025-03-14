import { loginUser } from "@/service/auth/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useLogin = () => {
 const { login } = useAuth();

 return useMutation({
  mutationFn: ({ username, password }: { username: string; password: string }) => loginUser(username, password),
  onSuccess: (data) => {
   login(data.token, {
    id: data.user_id,
    email: data.user_email,
    displayName: data.user_display_name,
   });
  },
  onError: (error) => {
   console.error("Login failed:", error);
  },
 });
};
