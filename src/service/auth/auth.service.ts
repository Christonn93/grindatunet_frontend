import { axiosInstance } from "../axiosInstance";

export type AuthResponse = {
 success: boolean;
 token: string;
 user_id: number;
 user_email: string;
 user_display_name: string;
};

const AUTH_BASE = "/wp-json/jwt-auth/v1";

export const loginUser = async (username: string, password: string): Promise<AuthResponse> => {
 const response = await axiosInstance.post<AuthResponse>(`${AUTH_BASE}/token`, {
  username,
  password,
 });
 return response.data;
};

export const registerUser = async (username: string, email: string, password: string): Promise<AuthResponse> => {
 const response = await axiosInstance.post<AuthResponse>(`${AUTH_BASE}/register`, {
  username,
  email,
  password,
 });
 return response.data;
};

export const refreshToken = async (refresh_token: string): Promise<AuthResponse> => {
 const response = await axiosInstance.post<AuthResponse>(`${AUTH_BASE}/refresh`, {
  refresh_token,
 });
 return response.data;
};
