import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { navMenu } from "const/admin/common";

import { ReactComponent as DropDown } from "assets/icon/drop_down.svg";
import { css, styled } from "styled-components";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const HEIGHT = 51; // 45 + margin 6 포함

  // snbItem active 여부
  const isSnbItemActive = (id) => {
    const index = navMenu.findIndex((menu) => menu.id === id);
    if (index > -1) {
      const clickMenu = navMenu[index];
      if (!clickMenu.children) return isActive(id);
    }
    return false;
  };

  // active 효과를 위한 함수
  const isActive = (id) => {
    const activePath = location.pathname.split("/")[2];
    return activePath === id;
  };

  // snb
  const snbItems = [];
  navMenu.forEach((menuItem) => {
    const submenu = [];

    if (menuItem.children) {
      menuItem.children.forEach((childItem) => {
        submenu.push(
          <SubMenuItem
            key={childItem.id}
            $active={isActive(childItem.id)}
            onClick={() => {
              navigate(`/ad/${childItem.id}`);
            }}
          >
            {childItem.name}
          </SubMenuItem>
        );
      });
    }
    snbItems.push(
      <SnbItem key={menuItem.id} id={menuItem.id}>
        <Item
          $active={isSnbItemActive(menuItem.id)}
          onClick={(e) => {
            snbItemClickEvent(e, menuItem.id);
          }}
        >
          <span>{menuItem.name}</span>
          {menuItem.children && <DropDown></DropDown>}
        </Item>
        {menuItem.children && <SubMenu>{submenu}</SubMenu>}
      </SnbItem>
    );
  });

  // 메뉴 클릭 이벤트
  const snbItemClickEvent = (e, id) => {
    const index = navMenu.findIndex((menu) => menu.id === id);
    if (index > -1) {
      const clickMenu = navMenu[index];
      if (!clickMenu.children) return navigate(`/ad/${clickMenu.id}`);
      else return openMenu(e);
    }
  };

  // 메뉴 드롭다운 효과 함수
  const openMenu = (e) => {
    const el = e.target.closest("li");
    const status = el.classList.contains("opened");

    const snb = e.target.closest("ul");
    const opendEl = snb.querySelectorAll(".opened");
    opendEl.forEach((element) => {
      element.classList.remove("opened");
      const elSubMenu = element.querySelector("ul");
      elSubMenu.style.height = "0rem";
    });

    const elSubMenu = el.querySelector("ul");
    if (status) {
      el.classList.remove("opened");
      elSubMenu.style.height = "0rem";
    } else {
      el.classList.add("opened");
      elSubMenu.style.height = `${HEIGHT * elSubMenu.childElementCount}px`;
    }
  };

  useEffect(() => {
    const activePath = location.pathname.split("/")[2];
    let openMenu = "";
    switch (activePath) {
      case "gold_reg":
      case "gold_list":
      case "dia_reg":
      case "pure_gold_reg":
      case "silver_reg":
        openMenu = "market";
        break;
      case "category_reg":
      case "category_list":
      case "product_reg":
      case "product_list":
        openMenu = "product";
        break;
      case "order_list":
      case "payment_list":
        openMenu = "order";
        break;
      case "notice_list":
      case "notice_reg":
      case "notice_edit":
      case "notice_detail":
      case "question_list":
        openMenu = "cs";
        break;
      case "popup_list":
      case "popup_reg":
        openMenu = "popup";
        break;
      case "banner_reg":
      case "banner_list":
        openMenu = "banner";
        break;
      default:
        break;
    }
    if (openMenu) {
      const snbItemEl = document.querySelector(`#${openMenu}`);
      const status = snbItemEl.classList.contains("opened");
      if (!status) {
        const snb = snbItemEl.closest("ul");
        const opendEl = snb.querySelectorAll(".opened");

        opendEl.forEach((element) => {
          element.classList.remove("opened");
          const elSubMenu = element.querySelector("ul");
          elSubMenu.style.height = "0rem";
        });
        snbItemEl.classList.add("opened");
        const elSubMenu = snbItemEl.querySelector("ul");
        elSubMenu.style.height = `${HEIGHT * elSubMenu.childElementCount}px`;
      }
    }
  }, [location.pathname]);

  return (
    <NavBar>
      {/* 로고 */}
      <LogoWrapper
        onClick={() => {
          navigate("/ad/home");
        }}
      >
        {/* <img src={logo} alt="로고" width={150} /> */}
      </LogoWrapper>
      {/* SNB */}
      <Snb>{snbItems}</Snb>
    </NavBar>
  );
}

export default Nav;

const itemCss = css`
  height: 45px;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ $active }) => {
    if ($active) {
      return css`
        background-color: var(--color-admin-main);
        color: white;
      `;
    }
  }}
  &:hover {
    background-color: ${({ $active }) =>
      $active ? "var(--color-admin-main)" : "#ebebf0"};
  }
`;

const NavBar = styled.div`
  background-color: #f9f9f9;
  width: 258px;
  position: absolute;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;
// 로고
const LogoWrapper = styled.div`
  margin-top: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > img {
    padding-top: 2px;
  }
`;
// 사이드 네비게이션 바
const Snb = styled.ul`
  padding: 12px 16px;
  font-size: 18px;
`;
const Item = styled.div`
  ${itemCss};
  // > svg {
  //   fill: var(--color-admin-main);
  //   transform: rotate(0deg);
  // }
  // &.opend {
  //   svg {
  //     transform: rotate(180deg);
  //   }
  // }
`;
const SnbItem = styled.li`
  transition: height ease 0.4s;
  > ${Item} {
    > svg {
      fill: var(--color-admin-main);
      transition: transform 0.3s linear;
      transform: rotate(0deg);
    }
  }
  &.opened {
    > ${Item} {
      > svg {
        transform: rotate(180deg);
      }
    }
  }
`;

const SubMenu = styled.ul`
  height: 0rem;
  overflow: hidden;
  transition: height ease 0.4s;
`;
const SubMenuItem = styled.li`
  ${itemCss}
  padding-left: 32px;
`;
