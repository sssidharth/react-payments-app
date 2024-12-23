import axios from "axios";

console.log("Base URL:", process.env.REACT_APP_API_BASE_URL);

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3001", // Replace with your API base URL
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default apiClient;