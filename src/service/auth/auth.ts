import axios from "axios";

const API_URL = import.meta.env.VITE_AUTH_API_URL || "https://your-wordpress-site.com/wp-json/jwt-auth/v1";

export const authApi = axios.create({
 baseURL: API_URL,
 headers: {
  "Content-Type": "application/json",
 },
});
