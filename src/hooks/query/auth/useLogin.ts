import { loginUser } from "@/service/auth/loginUser";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
 return useMutation({
  mutationFn: loginUser,
 });
};
