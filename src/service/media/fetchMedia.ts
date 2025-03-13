import { axiosInstance } from "../axiosInstance";

export const fetchMedia = async () => {
 try {
  const { data } = await axiosInstance.get("/wp-json/wp/v2/media");
  return data;
 } catch (error) {
  console.error("Error fetching media:", error);
  throw error;
 }
};
