import { useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
 baseURL: import.meta.env.VITE_WP_CONN,
 headers: {
  "Content-Type": "application/json",
  Accept: "application/json",
 },
});

export const useAxios = () => {
 useEffect(() => {
  const requestInterceptor = axiosInstance.interceptors.request.use(
   (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
     config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
   },
   (error) => {
    return Promise.reject(error);
   }
  );

  const responseInterceptor = axiosInstance.interceptors.response.use(
   (response) => response,
   (error) => {
    if (error.response?.status === 401) {
     console.error("Unauthorized - Redirecting to login...");
    }

    return Promise.reject(error);
   }
  );

  return () => {
   axiosInstance.interceptors.request.eject(requestInterceptor);
   axiosInstance.interceptors.response.eject(responseInterceptor);
  };
 }, []);

 return axiosInstance;
};
