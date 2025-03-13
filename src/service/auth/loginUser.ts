import { axiosInstance } from "../axiosInstance";

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
 const response = await axiosInstance.post("/wp-json/custom-auth/login", {
  email,
  password,
 });

 return response.data;
};
