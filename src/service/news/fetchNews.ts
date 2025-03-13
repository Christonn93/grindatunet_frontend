import { axiosInstance } from "../axiosInstance";

export const fetchNews = async () => {
 try {
  const { data } = await axiosInstance.get(`/wp-json/wp/v2/hytte_nytt`);
  return data;
 } catch (error) {
  console.error("Error fetching post:", error);
  throw error;
 }
};
