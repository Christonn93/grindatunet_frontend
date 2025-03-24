import { axiosInstance } from "@/service/auth/axiosInstance";
import { Newsletter, NewsletterPayload } from "@/types/newsletter";

export const createNewsletter = async (data: NewsletterPayload): Promise<Newsletter> => {
 try {
  const response = await axiosInstance.post<Newsletter>("/grindatunet/v1/newsletter", data);
  return response.data;
 } catch (error) {
  console.error("Failed to createNewsletter:", error);
  throw new Error("Error during createNewsletter");
 }
};
