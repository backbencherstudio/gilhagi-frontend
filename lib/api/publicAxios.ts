import axios from "axios";

export const publicAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for public axios (no auth headers)
publicAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for public axios
publicAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle errors for public requests
    return Promise.reject(error);
  }
);
