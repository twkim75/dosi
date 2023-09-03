import logo from "assets/logo.png";
import hamburger from "assets/button/hamburger.svg";
import { useCallback, useEffect } from "react";

const Header = () => {
  // 상단 메뉴 클릭 이벤트
  const toggleBtnClickEvent = () => {
    const el = document.querySelector(".navbar__contents");
    if (el.classList.contains("open")) {
      el.classList.remove("open");
    } else {
      el.classList.add("open");
    }
  };

  //   해당 section 이동 이벤트
  const scrollIntoView = useCallback((e) => {
    const target = e.target;
    const link = target.dataset.link;
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const el = document.querySelector(".navbar__contents");
      if (window.innerWidth > 830 && el.classList.contains("open")) {
        el.classList.remove("open");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header id="header">
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="로고" />
        </div>
        <div className="navbar__contents">
          <ul className="navbar__menu">
            <li
              className="navbar__menu__item"
              data-link="#video"
              onClick={scrollIntoView}
            >
              브랜드
            </li>
            <li className="navbar__menu__item" data-link="#menu">
              메뉴
            </li>
            <li className="navbar__menu__item" data-link="#interior">
              인테리어
            </li>
            <li className="navbar__menu__item" data-link="#store">
              매장안내
            </li>
            <li className="navbar__menu__item" data-link="#procedure">
              창업안내
            </li>
          </ul>
          <button className="navbar__inquiry_btn">1661 - 6450</button>
        </div>
        <button className="navbar__toggle_btn" onClick={toggleBtnClickEvent}>
          <img src={hamburger} alt="메뉴 버튼"></img>
        </button>
      </div>
    </header>
  );
};

export default Header;
