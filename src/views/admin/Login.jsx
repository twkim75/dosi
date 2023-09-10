import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Checkbox, TextField } from "views/admin/components/input";
import { styled } from "styled-components";
import Button from "views/admin/components/Button";
import { Toast } from "views/admin/components/Toast";
// import { loginAction } from "api/admin/auth";
import { useCookies } from "react-cookie";
import { loginAction } from "api/admin";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    id: "",
    pwd: "",
  });
  const [cookies, setCookie, removeCookie] = useCookies(["saveUserId"]);
  const [saveId, setSaveId] = useState("");

  const onChangeData = (e, setData) => {
    const { name, value } = e.currentTarget;
    setData((preVal) => ({ ...preVal, [name]: value }));
  };

  const login = async () => {
    const { id, pwd } = loginData;
    if (id.length === 0 || !id) {
      Toast.info("아이디를 입력해주세요");
      return document.querySelector("input[name=id]").focus();
    }
    if (pwd.length === 0 || !pwd) {
      Toast.info("비밀번호를 입력해주세요");
      return document.querySelector("input[name=pwd]").focus();
    }
    const { data, status } = await loginAction({ id: id, pwd: pwd });
    if (status !== 200) {
      return Toast.error("아이디 혹은 비밀번호를 확인해주세요");
    }
    localStorage.setItem("login", "Y");

    // const { access_token, refresh_token } = data;
    // localStorage.setItem("refreshToken", refresh_token);

    navigate("/ad/home");
  };

  // 아이디 저장
  const handleOnChange = (checked) => {
    setSaveId(checked);
    if (checked) {
      setCookie("saveUserId", loginData.id);
    } else {
      removeCookie("saveUserId");
    }
  };

  /*페이지가 최초 렌더링 될 경우*/
  useEffect(() => {
    /*저장된 쿠키값이 있으면, CheckBox TRUE 및 UserID에 값 셋팅*/
    if (cookies.saveUserId !== undefined) {
      setLoginData((preVal) => ({ ...preVal, id: cookies.saveUserId }));
      setSaveId(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <LoginWrapper>
      <LoginBox>
        <Logo>
          <h5>도시맥주</h5>
        </Logo>
        <LoginForm>
          <h2>LOGIN</h2>
          <TextField
            placeholder="아이디"
            height="46px"
            width="100%"
            name="id"
            value={loginData.id}
            onChange={(e) => {
              onChangeData(e, setLoginData);
            }}
          ></TextField>
          <TextField
            placeholder="비밀번호"
            height="46px"
            width="100%"
            name="pwd"
            type="password"
            value={loginData.pwd}
            onChange={(e) => {
              onChangeData(e, setLoginData);
            }}
          ></TextField>
          <Checkbox
            checked={saveId}
            onChange={(value) => {
              handleOnChange(value);
            }}
          >
            아이디 저장
          </Checkbox>
          <Button
            style={{
              color: "white",
              marginTop: "24px",
              fontSize: "16px",
              fontWeight: 700,
            }}
            width={"100%"}
            height={"50px"}
            color={"black"}
            onClick={() => {
              login();
            }}
          >
            <span>로그인</span>
          </Button>
        </LoginForm>
      </LoginBox>
    </LoginWrapper>
  );
}

export default Login;

const LoginWrapper = styled.div`
  user-select: none;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginBox = styled.div`
  width: 400px;
  padding: 40px 24px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    margin-right: 2px;
  }
  > h5 {
    color: #1a1a1a;
    font-size: 36px;
    line-height: 1.3;
    font-weight: 700;
  }
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  > h2 {
    margin-bottom: 12px;
  }
  > input {
    margin-bottom: 20px;
    font-size: 16px;
  }
`;
