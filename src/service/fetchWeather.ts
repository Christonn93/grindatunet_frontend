import axios from "axios";

export const fetchWeather = async () => {
 const baseUrl = "https://api.met.no/weatherapi/locationforecast/2.0/compact";
 const address = "Lønnåsveien 58, 0758 Oslo";
 const response = await axios.get(baseUrl, {
  params: {
   address: address,
  },
  headers: {
   "User-Agent": "YourAppName/1.0",
  },
 });
 return response.data;
};
