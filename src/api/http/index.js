import axios from "axios";

const http = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

http.interceptors.response.use(
  (res) => {
    // console.log("res : ", res);
    const { data, status } = res;
    return { data, status };
  },
  async (err) => {
    const { status } = err.response;

    return { message: err.message, status };
  }
);
export default http;
