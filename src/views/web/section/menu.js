import Slider from "react-slick";

import main1 from "assets/dummy/menu/main/main1.jpg";
import main2 from "assets/dummy/menu/main/main2.jpg";
import main3 from "assets/dummy/menu/main/main3.jpg";
import main4 from "assets/dummy/menu/main/main4.jpg";

import { styled } from "styled-components";

import { NextArrow, PrevArrow } from "views/web/components/slider";
import { useEffect, useRef, useState } from "react";

const Menu = ({ mainList, soupList, friedList, kkochiList, sideList }) => {
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
          <CommingSoon>COMMING SOON.</CommingSoon>
          {/* <div className="menu__main">
            <div className="menu__item main">
              <h3 className="item__title">MAIN</h3>
              {mainList.length > 0 ? (
                <div className="slider__container">
                  <Slider {...settings}>
                    {mainList.map((imgSrc, index) => {
                      return (
                        <MainItem
                          key={`${index}_main_menu`}
                          src={imgSrc}
                        ></MainItem>
                      );
                    })}
                  </Slider>
                </div>
              ) : (
                <MainCommingSoon>
                  <div>COMMING SOON</div>
                </MainCommingSoon>
              )}
            </div>
          </div>
          <div className="menu__sub">
            <div className="menu__row">
              <div className="menu__item soup">
                <h3 className="item__title">SOUP</h3>
                {soupList.length > 0 ? (
                  <div className="slider__container">
                    <Slider {...settings}>
                      {soupList.map((imgSrc, index) => {
                        return (
                          <MainItem
                            key={`${index}_soup_menu`}
                            src={imgSrc}
                          ></MainItem>
                        );
                      })}
                    </Slider>
                  </div>
                ) : (
                  <SubCommingSoon>
                    <div>COMMING SOON</div>
                  </SubCommingSoon>
                )}
              </div>
              <div className="menu__item fried">
                <h3 className="item__title">FRIED</h3>
                {friedList.length > 0 ? (
                  <div className="slider__container">
                    <Slider {...settings}>
                      {friedList.map((imgSrc, index) => {
                        return (
                          <MainItem
                            key={`${index}_fried_menu`}
                            src={imgSrc}
                          ></MainItem>
                        );
                      })}
                    </Slider>
                  </div>
                ) : (
                  <SubCommingSoon>
                    <div>COMMING SOON</div>
                  </SubCommingSoon>
                )}
              </div>
            </div>
            <div className="menu__row">
              <div className="menu__item stick">
                <h3 className="item__title">STICK</h3>
                {kkochiList.length > 0 ? (
                  <div className="slider__container">
                    <Slider {...settings}>
                      {kkochiList.map((imgSrc, index) => {
                        return (
                          <MainItem
                            key={`${index}_stick_menu`}
                            src={imgSrc}
                          ></MainItem>
                        );
                      })}
                    </Slider>
                  </div>
                ) : (
                  <SubCommingSoon>
                    <div>COMMING SOON</div>
                  </SubCommingSoon>
                )}
              </div>
              <div className="menu__item side">
                <h3 className="item__title">SIDE</h3>
                {sideList.length > 0 ? (
                  <div className="slider__container">
                    <Slider {...settings}>
                      {sideList.map((imgSrc, index) => {
                        return (
                          <MainItem
                            key={`${index}_side_menu`}
                            src={imgSrc}
                          ></MainItem>
                        );
                      })}
                    </Slider>
                  </div>
                ) : (
                  <SubCommingSoon>
                    <div>COMMING SOON</div>
                  </SubCommingSoon>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Menu;
const CommingSoon = styled.div`
  line-height: 300px;
  padding: 20px 0px;
  font-family: "Outfit";
  font-weight: 700;
  color: #fff;
  font-size: 100px;
  width: 100%;
  text-align: center;
  @media all and (max-width: 900px) {
    font-size: 64px;
  }
  @media all and (max-width: 635px) {
    line-height: 150px;
    font-size: 32px;
  }
`;
const MainItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  @media all and (max-width: 1200px) {
    height: 300px;
  }
`;
const MainCommingSoon = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  background-color: white;

  > div {
    line-height: 300px;
    font-family: "Outfit";
    font-weight: 700;
    color: var(--color-dark-1);
    font-size: 36px;
  }
  @media all and (max-width: 1200px) {
    height: 300px;
  }
`;

const SubCommingSoon = styled.div`
  width: 100%;
  height: 230px;
  border-radius: 12px;
  background-color: white;

  > div {
    line-height: 230px;
    font-family: "Outfit";
    font-weight: 700;
    color: var(--color-dark-1);
    font-size: 28px;
  }
  @media all and (max-width: 1200px) {
    height: 300px;
    > div {
      line-height: 300px;
      font-size: 36px;
    }
  }
`;
