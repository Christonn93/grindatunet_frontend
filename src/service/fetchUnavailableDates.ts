import axios from "axios";

export const fetchUnavailableDates = async () => {
 const { data } = await axios.get("https://wp.grindatunet.no/wordpress/wp-json/api/availability");
 return data.unavailableDates;
};
