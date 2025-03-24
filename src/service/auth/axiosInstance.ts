import { logger } from "@/utils/logger/logger";
import axios from "axios";
import { useAuthStore } from "@/hooks/store/authStore";
import { refreshAuthToken, isTokenExpired } from "./authService";

const API_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
 baseURL: API_URL,
 headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(async (config) => {
 const { token } = useAuthStore.getState();

 if (token) {
  if (isTokenExpired()) {
   const refreshed = await refreshAuthToken();
   if (!refreshed) {
    logger.warn("[Auth] Token expired, request blocked:", config.url);
    return Promise.reject({ message: "Token expired" });
   }
  }

  config.headers.Authorization = `Bearer ${useAuthStore.getState().token}`;
 }

 logger.info(`[API Request] ${config.url}`, config);
 return config;
});

// 🔹 Response Interceptor: Log success and handle errors
axiosInstance.interceptors.response.use(
 (response) => {
  logger.apiResponse(response.config.url!, response.data);
  return response;
 },
 async (error) => {
  // Handle 401 Unauthorized (Token expired)
  if (error.response?.status === 401) {
   useAuthStore.getState().clearAuth();
   logger.warn("[Auth] Unauthorized request, user logged out.");
  }

  logger.apiError(error.config?.url || "Unknown URL", error);
  return Promise.reject(error);
 }
);
