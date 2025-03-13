import axios from "axios";

export const fetchPostById = async (id: string) => {
 const { data } = await axios.get(`https://wp.grindatunet.no/wordpress/wp-json/wp/v2/posts/${id}`);
 return data;
};
