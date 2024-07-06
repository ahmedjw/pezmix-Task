import axios from "axios";

// create axiosInstance as a base url for endpoints
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
});
