import { axiosInstance } from "../axiosInstance";

// Fetch all guest reviews
export const fetchGuestReviews = async () => {
 try {
  const { data } = await axiosInstance.get("/wp-json/wp/v2/guest_reviews");
  return data;
 } catch (error) {
  console.error("Error fetching guest reviews:", error);
  throw error;
 }
};

// Fetch a single guest review by ID
export const fetchGuestReviewById = async (id: number) => {
 try {
  const { data } = await axiosInstance.get(`/wp-json/wp/v2/guest_reviews/${id}`);
  return data;
 } catch (error) {
  console.error("Error fetching guest review:", error);
  throw error;
 }
};

// Create a new guest review
export const postGuestReview = async (review: { title: string; description: string; images: string; tags: string[]; author: number }) => {
 try {
  const response = await axiosInstance.post(`/wp-json/wp/v2/guest_reviews`, review, {
   headers: { "Content-Type": "application/json" },
  });
  return response.data;
 } catch (error) {
  console.error("Error posting guest review:", error);
  throw error;
 }
};

// Update an existing guest review
export const updateGuestReview = async (
 id: number,
 updatedReview: {
  title?: string;
  description?: string;
  images?: string;
  tags?: string[];
 }
) => {
 try {
  const response = await axiosInstance.put(`/wp-json/wp/v2/guest_reviews/${id}`, updatedReview, {
   headers: { "Content-Type": "application/json" },
  });
  return response.data;
 } catch (error) {
  console.error(`Error updating guest review with ID ${id}:`, error);
  throw error;
 }
};

// Delete a guest review
export const deleteGuestReview = async (id: number) => {
 try {
  await axiosInstance.delete(`/wp-json/wp/v2/guest_reviews/${id}`);
  return { success: true, message: "Guest review deleted successfully" };
 } catch (error) {
  console.error(`Error deleting guest review with ID ${id}:`, error);
  throw error;
 }
};
