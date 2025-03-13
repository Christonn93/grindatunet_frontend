import axios from "axios";

export const axiosInstance = axios.create({
 baseURL: import.meta.env.VITE_WP_BASE_URL,
 headers: {
  "Content-Type": "application/json",
  Accept: "application/json",
 },
});

axiosInstance.interceptors.request.use(
 (config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
   config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
 },
 (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
 (response) => response,
 (error) => {
  if (error.response?.status === 401) {
   console.error("Unauthorized - Redirecting to login...");
  }
  return Promise.reject(error);
 }
);
