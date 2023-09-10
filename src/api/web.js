import http from "./http";

const PREFIX = "/api/request";

/**
 * 로그인
 * @returns
 */
const regRequest = ({ name, phone, hopeAddr, addText }) => {
  return http.post(`${PREFIX}/reg`, { name, phone, hopeAddr, addText });
};

export { regRequest };
