import http from "./http";

const PREFIX = "/api/request";

/**
 * 가맹상담 신청
 * @returns
 */
export const regRequest = ({ name, phone, hopeAddr, addText }) => {
  return http.post(`${PREFIX}/reg`, { name, phone, hopeAddr, addText });
};

/**
 * 팝업리스트 조회(랜딩페이지)
 * @returns
 */
export const showPopupDataAPI = () => {
  return http.get("/api/notice/display/notice");
};

/**
 * 랜딩페이지 메인이미지 조회
 * @returns
 */
export const mainDataAPI = () => {
  return http.get("/api/main/display/list");
};
