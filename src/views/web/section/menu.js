import Slider from "react-slick";

import main1 from "assets/dummy/menu/main/main1.jpg";
import main2 from "assets/dummy/menu/main/main2.jpg";
import main3 from "assets/dummy/menu/main/main3.jpg";
import main4 from "assets/dummy/menu/main/main4.jpg";

import { styled } from "styled-components";

import { NextArrow, PrevArrow } from "views/web/components/slider";

const Menu = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section id="menu">
      <div className="container">
        <h1 className="title">MENU</h1>
        <h4 className="subtitle">도시맥주만의 최상의 퀄리티의 음식입니다.</h4>
        <div className="menu__wrapper">
          <div className="menu__main">
            <div className="menu__item main">
              <h3 className="item__title">MAIN</h3>
              <div className="slider__container">
                <Slider {...settings}>
                  <MainItem src={main1}></MainItem>
                  <MainItem src={main2}></MainItem>
                  <MainItem src={main3}></MainItem>
                  <MainItem src={main4}></MainItem>
                </Slider>
              </div>
            </div>
          </div>
          <div className="menu__sub">
            <div className="menu__row">
              <div className="menu__item soup">
                <h3 className="item__title">탕</h3>
                <Slider {...settings}>
                  <MainItem src={main1}></MainItem>
                  <MainItem src={main2}></MainItem>
                  <MainItem src={main3}></MainItem>
                  <MainItem src={main4}></MainItem>
                </Slider>
              </div>
              <div className="menu__item fried">
                <h3 className="item__title">튀김 / 치킨</h3>
                <Slider {...settings}>
                  <MainItem src={main1}></MainItem>
                  <MainItem src={main2}></MainItem>
                  <MainItem src={main3}></MainItem>
                  <MainItem src={main4}></MainItem>
                </Slider>
              </div>
            </div>
            <div className="menu__row">
              <div className="menu__item stick">
                <h3 className="item__title">꼬치류</h3>
                <Slider {...settings}>
                  <MainItem src={main1}></MainItem>
                  <MainItem src={main2}></MainItem>
                  <MainItem src={main3}></MainItem>
                  <MainItem src={main4}></MainItem>
                </Slider>
              </div>
              <div className="menu__item side">
                <h3 className="item__title">마른안주/사이드</h3>
                <Slider {...settings}>
                  <MainItem src={main1}></MainItem>
                  <MainItem src={main2}></MainItem>
                  <MainItem src={main3}></MainItem>
                  <MainItem src={main4}></MainItem>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
const MainItem = styled.img`
  width: 100%;
  object-fit: cover;
`;
