import { useAuthStore } from "@/hooks/store/authStore";
import { authApi } from "./auth";

import { AxiosError } from "axios";
import { logger } from "@/utils/logger/logger";
import { fetchUserData } from "../user/userService";

export type LoginCredentials = {
 username: string;
 password: string;
};

export type RegisterCredentials = {
 name: string;
 username: string;
 password: string;
};

export type LoginResponse = {
 token: string;
 user_nicename: string;
 user_email: string;
 user_display_name: string;
};

// 🔹 Login User and Fetch User Data
export const loginUser = async (credentials: LoginCredentials): Promise<LoginResponse> => {
 try {
  const response = await authApi.post<LoginResponse>("/token", credentials);
  const { token } = response.data;

  useAuthStore.getState().setAuth(token, 3600); // ✅ Store token securely

  // 🔹 Fetch and store user data after successful login
  const userData = await fetchUserData();
  useAuthStore.getState().setUser(userData);

  return response.data;
 } catch (error: unknown) {
  if (error instanceof AxiosError) {
   logger.error("Login failed:", error.response?.data);
   throw new Error("Invalid credentials");
  }
  throw error;
 }
};

// 🔹 Register user
export const registerUser = async (credentials: RegisterCredentials): Promise<LoginResponse> => {
 try {
  const response = await authApi.post<LoginResponse>("/register", credentials);
  const { token } = response.data;

  useAuthStore.getState().setAuth(token, 3600); // ✅ Store token securely

  // 🔹 Fetch and store user data after successful login
  const userData = await fetchUserData();
  useAuthStore.getState().setUser(userData);

  return response.data;
 } catch (error: unknown) {
  if (error instanceof AxiosError) {
   logger.error("Registration failed:", error.response?.data);
   throw new Error("Registration failed");
  }
  throw error;
 }
};

// 🔹 Refresh Token and Validate Session
export const refreshAuthToken = async (): Promise<boolean> => {
 try {
  const token = localStorage.getItem("authToken");
  if (!token || isTokenExpired()) {
   logger.warn("Token expired or missing, logging out...");
   useAuthStore.getState().clearAuth();
   return false;
  }

  const response = await authApi.post(
   "/token/validate",
   {},
   {
    headers: { Authorization: `Bearer ${token}` },
   }
  );

  if (response.data?.code !== "jwt_auth_valid_token") {
   logger.error("Token refresh failed:", response.data?.code);
   throw new Error("Invalid token");
  }

  useAuthStore.getState().setAuth(token, 3600); // ✅ Refresh expiration time
  return true;
 } catch (error) {
  logger.error("Token refresh failed:", error);
  useAuthStore.getState().clearAuth();
  return false;
 }
};

// 🔹 Check if Token is Expired
export const isTokenExpired = (): boolean => {
 const { token, expiresAt } = useAuthStore.getState();
 if (!token || !expiresAt) return true;
 return Date.now() >= expiresAt - 5000; // ✅ Refresh 5 seconds before expiry
};
