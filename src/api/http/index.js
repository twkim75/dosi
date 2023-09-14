import axios from "axios";

const http = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

http.interceptors.request.use((config) => {
  if (config.url.includes("api/main/save")) {
    config.headers["Content-Type"] = "multipart/form-data";
  }

  // 요청 보내기전 수행 로직
  return config;
});

http.interceptors.response.use(
  (res) => {
    const { data, status } = res;
    return { data, status };
  },
  async (err) => {
    const { status } = err.response;

    return { message: err.message, status };
  }
);
export default http;
