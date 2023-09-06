import Slider from "react-slick";

import main1 from "assets/dummy/menu/main/main1.jpg";
import main2 from "assets/dummy/menu/main/main2.jpg";
import main3 from "assets/dummy/menu/main/main3.jpg";
import main4 from "assets/dummy/menu/main/main4.jpg";

import { styled } from "styled-components";

import { NextArrow, PrevArrow } from "views/web/components/slider";
import { useEffect, useRef, useState } from "react";

const Menu = () => {
  const elementRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !scrollActive) return setScrollActive(true);

      const el = document.querySelector("#menu .title__wrapper");
      if (el.classList.contains("active")) return;
      el.classList.add("active");
    });
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const options = { root: null, threshold: 0.3 };
    const io = new IntersectionObserver(callback, options);
    io.observe(elementRef.current);
    return () => {
      io.disconnect();
    };
  }, []);

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
    <section id="menu" ref={elementRef}>
      <div className="container">
        <div className="title__wrapper">
          <h1 className="title">MENU</h1>
          <h4 className="subtitle">도시맥주만의 최상의 퀄리티의 음식입니다.</h4>
        </div>
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
                <h3 className="item__title">SOUP</h3>
                <div className="slider__container">
                  <Slider {...settings}>
                    <MainItem src={main1}></MainItem>
                    <MainItem src={main2}></MainItem>
                    <MainItem src={main3}></MainItem>
                    <MainItem src={main4}></MainItem>
                  </Slider>
                </div>
              </div>
              <div className="menu__item fried">
                <h3 className="item__title">FRIED</h3>
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
            <div className="menu__row">
              <div className="menu__item stick">
                <h3 className="item__title">STICK</h3>
                <div className="slider__container">
                  <Slider {...settings}>
                    <MainItem src={main1}></MainItem>
                    <MainItem src={main2}></MainItem>
                    <MainItem src={main3}></MainItem>
                    <MainItem src={main4}></MainItem>
                  </Slider>
                </div>
              </div>
              <div className="menu__item side">
                <h3 className="item__title">SIDE</h3>
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
  @media all and (max-width: 1200px) {
    height: 300px;
  }
`;
