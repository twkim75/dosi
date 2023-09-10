import { Route, Routes, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// web
import Home from "views/web/home";
// admin
import Layout from "views/admin/layout";
import Login from "views/admin/Login";
import AdminHome from "views/admin/menu/Home";

import { StyledToastConatiner } from "views/admin/components/Toast";
import Auth from "hoc/auth";

const AdminCommonLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

function App() {
  // option:
  // - null: 아무나 출입이 가능한 페이지
  // - true: 로그인한 유저만 출입이 가능한 페이지
  // - false: 로그인한 유저는 출입 불가능한 페이지

  // admin
  const AuthAdminLoginPage = Auth(Login, null);
  const AuthAdminHomePage = Auth(AdminHome, null);

  return (
    <>
      <StyledToastConatiner newestOnTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ad/login" element={<AuthAdminLoginPage />} />
        <Route element={<AdminCommonLayout />}>
          <Route path="/ad/home" element={<AuthAdminHomePage />} />
        </Route>
        {/* <Route path="/ad/home" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
