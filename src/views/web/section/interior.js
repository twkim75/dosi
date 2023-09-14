import Slider from "react-slick";
import { styled } from "styled-components";

import { NextArrow, PrevArrow } from "views/web/components/slider";
import { useEffect, useRef, useState } from "react";
const Interior = ({ interiorImgList }) => {
  const elementRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !scrollActive) return setScrollActive(true);

      const el = document.querySelector(".interior__contents");
      if (el.classList.contains("active")) return;
      el.classList.add("active");
    });
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const options = { root: null, threshold: 0.4 };
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
    <section id="interior" ref={elementRef}>
      <div className="interior__wrapper container">
        <div className="interior__contents">
          <h1 className="title">INTERIOR</h1>
        </div>
        {interiorImgList.length > 0 ? (
          <div className="interior__slider_container">
            <Slider {...settings}>
              {interiorImgList.map((imgSrc, index) => {
                return (
                  <Banner
                    key={`${index}_interior_banner`}
                    src={imgSrc}
                  ></Banner>
                );
              })}
            </Slider>
          </div>
        ) : (
          <CommingSoon>COMMING SOON.</CommingSoon>
        )}
      </div>
    </section>
  );
};

export default Interior;
const Banner = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 12px;
  @media all and (max-width: 830px) {
    height: 360px;
  }
`;

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
