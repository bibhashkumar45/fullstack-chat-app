// Axios is a popular JavaScript library used to make HTTP requests to APIs

// withcredential--> Set to true when dealing with APIs that use cookies for authentication.
import axios from "axios";
export const axiosInstance=axios.create({
  baseURL:import.meta.env.MODE === "development" ? "http://localhost:5002/api" : "/api",
  withCredentials:true,
})