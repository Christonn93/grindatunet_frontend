import { useAuthStore } from "@/hooks/store/authStore";
import { axiosInstance } from "../auth/axiosInstance";
import { logger } from "@/utils/logger/logger";

export type User = {
 id: number;
 username: string;
 email: string;
 roles: string[];
 name: string;
};

export const fetchUserData = async (): Promise<User> => {
 try {
  const token = useAuthStore.getState().token;
  if (!token) throw new Error("No authentication token found");

  const response = await axiosInstance.get<User>("/user", {
   headers: { Authorization: `Bearer ${token}` },
  });

  logger.info("[User] Fetched user data:", response.data);

  return response.data;
 } catch (error) {
  console.error("User fetch failed:", error);
  throw new Error("Failed to fetch user data");
 }
};
