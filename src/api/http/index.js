import axios from "axios";

const http = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

http.interceptors.response.use((res) => {
  return res.data;
});
export default http;
