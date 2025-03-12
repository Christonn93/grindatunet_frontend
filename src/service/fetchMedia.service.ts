import axios from "axios";

export const fetchMedia = async () => {
 try {
  const response = await axios.get("https://www.grindatunet.no/backend/wordpress/wp-json/wp/v2/media");
  console.log(response.data);
 } catch (error) {
  console.error("Error fetching media:", error);
 }
};
