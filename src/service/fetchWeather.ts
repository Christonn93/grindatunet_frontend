import axios from "axios";

export const fetchWeather = async () => {
 const baseUrl = "https:///api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.013211&lon=10.595175";
 const response = await axios.get(baseUrl, {
  headers: {
   "Content-Type": "application/json",
   Accept: "application/json",
  },
 });

 return response.data;
};
