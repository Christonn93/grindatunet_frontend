import axios from "axios";

export const loginUser = async ({ email, password }: { email: string; password: string }) => {
 const response = await axios.post(`${import.meta.env.VITE_WP_BASE_URL}/wp-json/custom-auth/login`, {
  email,
  password,
 });

 return response.data; // Returns user data and tokens
};
