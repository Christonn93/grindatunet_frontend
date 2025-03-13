import { loginUser } from "@/service/loginUser";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
 return useMutation({
  mutationFn: loginUser,
 });
};
