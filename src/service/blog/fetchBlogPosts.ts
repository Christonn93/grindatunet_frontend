import axios from "axios";

const WP_BLOG_API_URL = "https://wp.grindatunet.no/wordpress/wp-json/wp/v2/guest_reviews";

export const fetchGuestReviews = async () => {
 const { data } = await axios.get(WP_BLOG_API_URL);
 return data;
};
