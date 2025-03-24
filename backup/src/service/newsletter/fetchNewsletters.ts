import { axiosInstance } from "@/service/auth/axiosInstance";
import { Newsletter } from "@/types/newsletter";

export const fetchNewsletters = async (): Promise<Newsletter[]> => {
 try {
  const response = await axiosInstance.get<Newsletter[]>("/newsletters");
  return response.data;
 } catch (error) {
  console.error("Failed to fetchNewsletters:", error);
  throw new Error("Error during fetchNewsletters");
 }
};
