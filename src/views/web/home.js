import "styles/web.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Header from "./header";
import Main from "views/web/section/main";
import Brand from "views/web/section/brand";
import Revenue from "views/web/section/revenue";
import Menu from "views/web/section/menu";
import Interior from "views/web/section/interior";
import Store from "views/web/section/store";
import Procedure from "views/web/section/procedure";
const Home = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.addEventListener("scroll", handleScroll);
  //   }, 10);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const handleScroll = () => {
  //   console.log(window.scrollY);
  // };
  return (
    <div className="wrapper">
      <Header></Header>
      <main>
        {/* 메인슬라이드 */}
        <Main></Main>
        {/* 영상 */}
        <section id="video">
          <div className="container">
            <iframe
              width="100%"
              height="600px"
              src="https://www.youtube.com/embed/t7bS3PHRAGw?si=eMaFzJ0KO2U88vIp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        {/* 브랜드 */}
        <Brand></Brand>
        {/* 수익성 */}
        <Revenue></Revenue>
        {/* 메뉴 */}
        <Menu></Menu>
        {/* 인테리어 */}
        <Interior></Interior>
        {/* 매장안내 */}

        {/* open예정 */}
        <Store></Store>
        {/* 가맹절차 */}
        <Procedure></Procedure>

        {/* 신규 가맹비용 안내 */}
        <section id="cost"></section>
        {/* 가맹상담 신청 */}
        <section id="consulting"></section>
      </main>
    </div>
  );
};

export default Home;
