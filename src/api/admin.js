import http from "./http";

const PREFIX = "/api";

/**
 * 로그인
 * @returns
 */
const loginAction = ({ id, pwd }) => {
  return http.post(`${PREFIX}/user/login`, { id, pwd });
};

const getRequestList = (param) => {
  return http.get(`${PREFIX}/request/list`, { params: param });
};

// const userUpdate = ({
//   idx,
//   name,
//   phone,
//   companyName,
//   email,
//   emailType,
//   team,
// }) => {
//   return http.post(`${PREFIX}/update`, {
//     idx,
//     name,
//     phone,
//     companyName,
//     email,
//     emailType,
//     team,
//   });
// };
// const userMod = ({
//   idx,
//   name,
//   phone,
//   email,
//   emailType,
//   companyName,
//   team,
//   status,
//   contractroles,
// }) => {
//   return http.post(`${PREFIX}/moduser`, {
//     idx,
//     name,
//     phone,
//     companyName,
//     email,
//     emailType,
//     team,
//     status,
//     contractroles,
//   });
// };
// const userReg = ({
//   roles,
//   id,
//   pwd,
//   name,
//   phone,
//   companyName,
//   email,
//   emailType,
//   team,
//   status,
//   contractroles,
//   reg_user,
// }) => {
//   return http.post(`${PREFIX}/reg`, {
//     roles,
//     id,
//     pwd,
//     name,
//     phone,
//     companyName,
//     email,
//     emailType,
//     team,
//     status,
//     contractroles,
//     reg_user,
//   });
// };
// const removeUser = (userIdx) => {
//   return http.post(`${PREFIX}/remove?userIdx=${userIdx}`);
// };
export { loginAction, getRequestList };
