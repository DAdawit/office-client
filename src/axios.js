import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

const publicApiClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { apiClient, publicApiClient };
