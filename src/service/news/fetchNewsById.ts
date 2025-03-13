import { axiosInstance } from "../axiosInstance";

export const fetchNewsById = async (id: string) => {
 try {
  const { data } = await axiosInstance.get(`/wp-json/wp/v2/hytte_nytt/${id}`);
  return data;
 } catch (error) {
  console.error("Error fetching post:", error);
  throw error;
 }
};
