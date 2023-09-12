import { useNavigate, useLocation } from "react-router-dom";
import { getMenuTitle } from "const/admin/common";

import { ReactComponent as Logout } from "assets/icon/logout.svg";
import { useMemo } from "react";
import Button from "views/admin/components/Button";
import { styled } from "styled-components";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const headerTitle = useMemo(() => {
    const nowPath = location.pathname.split("/")[2];
    if (!nowPath) return "가맹상담 신청 리스트";
    if (nowPath === "home") return "가맹상담 신청 리스트";
    if (nowPath === "category_edit") return "카테고리 수정하기";
    if (nowPath === "product_edit") return "제품 수정하기";
    if (nowPath.includes("notice")) return "공지사항";
    if (nowPath.includes("question")) return "문의게시판";
    if (nowPath === "popup_detail") return "팝업상세보기";
    if (nowPath === "popup_edit") return "팝업수정하기";

    return getMenuTitle(nowPath);
  }, [location.pathname]);

  return (
    <MainHeader>
      <h5>{headerTitle}</h5>
      <HeaderBtnWrapper>
        <Button
          width={"120px"}
          height={"42px"}
          onClick={() => {
            localStorage.removeItem("login");
            navigate("/ad/login");
          }}
        >
          <Logout></Logout>
          <span>로그아웃</span>
        </Button>
      </HeaderBtnWrapper>
    </MainHeader>
  );
}

export default Header;

const MainHeader = styled.div`
  height: 65px;
  border-bottom: 1px solid var(--color-admin-border);
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBtnWrapper = styled.div`
  display: flex;
  font-size: 14px;
`;
