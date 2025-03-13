import { axiosInstance } from "../axiosInstance";

export const fetchPostById = async (id: string) => {
 try {
  const { data } = await axiosInstance.get(`/wp-json/wp/v2/posts/${id}`);
  return data;
 } catch (error) {
  console.error("Error fetching post:", error);
  throw error;
 }
};
