import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/service/auth/auth.service";
import { useAuth } from "./useAuth";

export const useRegister = () => {
 const { login } = useAuth();

 return useMutation({
  mutationFn: ({ username, email, password }: { username: string; email: string; password: string }) => registerUser(username, email, password),
  onSuccess: (data) => {
   login(data.token, {
    id: data.user_id,
    email: data.user_email,
    displayName: data.user_display_name,
   });
  },
  onError: (error) => {
   console.error("Registration failed:", error);
  },
 });
};
