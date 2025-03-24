import { axiosInstance } from "../auth/axiosInstance";

// 🔹 Feedback type definition
export type Feedback = {
 id: number;
 title: string;
 content: string;
 tags: string[];
 images: string[];
 createdAt: string;
 createdBy: string;
};

// 🔹 Fetch all feedback entries
export const fetchFeedbacks = async (): Promise<Feedback[]> => {
 try {
  const response = await axiosInstance.get<Feedback[]>("/feedback");
  return response.data;
 } catch (error) {
  console.error("Failed to fetch feedbacks:", error);
  throw new Error("Kunne ikke hente tilbakemeldinger.");
 }
};

// 🔹 Create a new feedback entry
export const createFeedback = async (data: Omit<Feedback, "id" | "status">): Promise<void> => {
 try {
  await axiosInstance.post("/feedback", data);
 } catch (error) {
  console.error("Failed to create feedback:", error);
  throw new Error("Kunne ikke opprette tilbakemelding.");
 }
};

// 🔹 Delete a feedback entry
export const deleteFeedback = async (id: number): Promise<void> => {
 try {
  await axiosInstance.delete(`/feedback/${id}`);
 } catch (error) {
  console.error("Failed to delete feedback:", error);
  throw new Error("Kunne ikke slette tilbakemelding.");
 }
};
