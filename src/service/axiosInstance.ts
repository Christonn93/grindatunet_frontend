import { isTokenExpired } from "@/utils/validation/token";
import axios from "axios";

export const axiosInstance = axios.create({
 baseURL: `${import.meta.env.VITE_WP_BASE_URL}`,
});

axiosInstance.interceptors.request.use(async (config) => {
 let token = localStorage.getItem("token");
 const refreshToken = localStorage.getItem("refresh_token");

 if (token && isTokenExpired(token)) {
  try {
   const response = await axios.post("/refresh", { refresh_token: refreshToken });

   if (response.data?.token) {
    token = response.data.token;
    localStorage.setItem("token", response.data.token);
   } else {
    throw new Error("Failed to refresh token");
   }
  } catch (error) {
   console.error("Error refreshing token:", error);
   localStorage.removeItem("token");
   localStorage.removeItem("refresh_token");
   window.location.href = "/login"; // Redirect to login
  }
 }

 if (token) {
  config.headers["Authorization"] = `Bearer ${token}`;
 }
 return config;
});
