import { axiosInstance } from "../auth/axiosInstance";

export type Newsletter = {
 id: number;
 subject: string;
 message: string;
 created_at: string;
};

// 🔹 Fetch all newsletters
export const fetchNewsletters = async (): Promise<Newsletter[]> => {
 try {
  const response = await axiosInstance.get<Newsletter[]>("/newsletters");
  return response.data;
 } catch (error) {
  console.error("Failed to fetch newsletters:", error);
  throw new Error("Error fetching newsletters");
 }
};

// 🔹 Create a new newsletter
export const createNewsletter = async (data: Omit<Newsletter, "id" | "created_at">): Promise<void> => {
 try {
  await axiosInstance.post("/newsletter", data);
 } catch (error) {
  console.error("Failed to create newsletter:", error);
  throw new Error("Error creating newsletter");
 }
};
