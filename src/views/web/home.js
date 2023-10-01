import "styles/web.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Header from "./header";
import Main from "views/web/section/main";
import Brand from "views/web/section/brand";
import Revenue from "views/web/section/revenue";
import Menu from "views/web/section/menu";
import Interior from "views/web/section/interior";
import Sorry from "views/web/section/sorry";
import Store from "views/web/section/store";
import Procedure from "views/web/section/procedure";
import Cost from "views/web/section/cost";
import Consulting from "views/web/section/consulting";
import Footer from "views/web/section/footer";
import "styles/common.scss";
import { mainDataAPI, showPopupDataAPI } from "api/web";
import Popup from "./components/popup";

const Home = () => {
  const [homeData, setHomeData] = useState({
    popup: [],
    topimgList: [],
    interiorImgList: [],
    menu_mainList: [],
    menu_soupList: [],
    menu_friedList: [],
    menu_kkochiList: [],
    menu_sideList: [],
  });

  const {
    popup,
    topimgList,
    interiorImgList,
    menu_mainList,
    menu_soupList,
    menu_friedList,
    menu_kkochiList,
    menu_sideList,
  } = homeData;

  const popupCloseExpired = (idx) => {
    const expiredDate = Number(localStorage.getItem(`popup_${idx}`));
    const now = new Date();

    if (expiredDate < now.getTime()) {
      localStorage.removeItem(`popup_${idx}`);
      return true;
    }
  };

  const fetchData = async () => {
    let result = {};
    // 팝업데이터 불러오기
    const { status: popupStatus, data: popupData } = await showPopupDataAPI();
    if (popupStatus === 200) {
      const { result: popups } = popupData;
      const popupResult = popups.map((item) => ({
        ...item,
        isShow: localStorage.getItem(`popup_${item.idx}`)
          ? popupCloseExpired(item.idx)
          : true,
      }));
      result = {
        popup: popupResult,
      };
    }

    const { status, data } = await mainDataAPI();
    if (status === 200) {
      const {
        topimgList,
        interiorImgList,
        menu_mainList,
        menu_soupList,
        menu_friedList,
        menu_kkochiList,
        menu_sideList,
      } = data.result;
      result = {
        ...result,
        topimgList,
        interiorImgList,
        menu_mainList,
        menu_soupList,
        menu_friedList,
        menu_kkochiList,
        menu_sideList,
      };
    }

    setHomeData((preval) => ({
      ...preval,
      ...result,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {popup.map((item, index) => (
        <Popup
          key={`popup_${item.idx}`}
          index={index}
          item={item}
          closeEvent={(idx) => {
            const popupResult = popup.map((item) => ({
              ...item,
              isShow: idx === item.idx ? false : item.isShow,
            }));
            setHomeData((preval) => ({
              ...preval,
              popup: popupResult,
            }));
          }}
        ></Popup>
      ))}
      <Header></Header>
      <main>
        {/* 메인슬라이드 */}
        {topimgList.length > 0 && <Main topimgList={topimgList}></Main>}
        {/* 영상 */}
        <section id="video">
          <div className="container">
            <iframe
              width="100%"
              height="600px"
              src="https://www.youtube.com/embed/G-zGp9Df-r8?si=M-L78arMl-4JplTN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        {/* 브랜드 */}
        <Brand></Brand>
        {/* 인테리어 */}
        <Interior interiorImgList={interiorImgList}></Interior>
        <Sorry></Sorry>
        {/* 메뉴 */}

        <Menu
          mainList={menu_mainList}
          soupList={menu_soupList}
          friedList={menu_friedList}
          kkochiList={menu_kkochiList}
          sideList={menu_sideList}
        ></Menu>
        {/* 수익성 */}
        <Revenue></Revenue>
        {/* 매장안내 */}
        {/* open예정 */}
        <Store></Store>
        {/* 가맹절차 */}
        <Procedure></Procedure>
        {/* 신규 가맹비용 안내 */}
        <Cost></Cost>
        {/* 가맹상담 신청 */}
        <Consulting></Consulting>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Home;
