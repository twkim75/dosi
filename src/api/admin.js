import http from "./http";

const PREFIX = "/api";

/**
 * 로그인
 * @returns
 */
export const loginAction = ({ id, pwd }) => {
  return http.post(`${PREFIX}/user/login`, { id, pwd });
};

export const getRequestList = (param) => {
  return http.get(`${PREFIX}/request/list`, { params: param });
};

/**
 * 팝업 등록
 * @param {*} data
 * @returns
 */
export const popupCreateAPI = (data) => {
  return http.post(`${PREFIX}/notice/reg`, data);
};

/**
 * 팝업리스트
 * @returns
 */
export const popupListAPI = () => {
  return http.get(`${PREFIX}/notice/list`);
};

export const popupDisplayChangeAPI = (data) => {
  return http.post(`${PREFIX}/notice/mod`, data);
};
