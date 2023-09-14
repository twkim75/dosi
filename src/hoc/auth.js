// 회원 인증을 통한 컴포넌트 반환 함수
// option:
// - null: 아무나 출입이 가능한 페이지
// - true: 로그인한 유저만 출입이 가능한 페이지
// - false: 로그인한 유저는 출입 불가능한 페이지
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Auth(SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck() {
    const navigate = useNavigate();
    const location = useLocation();

    const accessToken = localStorage.getItem("accessToken");
    const isLogin = localStorage.getItem("login");
    // console.log("isLogin : ", isLogin);

    useEffect(() => {
      if (option) {
        if (!accessToken) {
          return navigate("/ad/login");
        }
      } else {
        if (location.pathname === "/ad/login" && accessToken) {
          return navigate("/ad/home");
        }
      }
    }, [navigate]);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
export default Auth;
