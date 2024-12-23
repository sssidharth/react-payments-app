import axios from "axios";

console.log("Base URL:", process.env.REACT_APP_API_BASE_URL);

const apiClient = axios.create({
    baseURL: "https://react-payments-app.vercel.app/", /* Replcae with http://localhost:3001 for local  */
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  });
  
  export default apiClient;