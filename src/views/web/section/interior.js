import Slider from "react-slick";
import dummy1 from "assets/dummy/dummy_1.jpg";
import dummy2 from "assets/dummy/dummy_2.png";
import dummy3 from "assets/dummy/dummy_3.jpg";
import dummy4 from "assets/dummy/dummy_4.jpg";
import { styled } from "styled-components";

import { NextArrow, PrevArrow } from "views/web/components/slider";
import { useEffect, useRef, useState } from "react";
const Interior = () => {
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
          <p className="subtitle">항상 꿈꿔 왔습니다.</p>
          <p className="subtitle">
            누구나 할 수 있는, 어디에서나 공존하는, 그런 인테리어의 공간이 아닌,
            새롭고 세련되고 힙한 공간으로 수년간의 연구와 시도 끝에
            만들어졌습니다.
          </p>
          <p className="subtitle">"도시맥주" 입니다.</p>
        </div>
        <div className="interior__slider_container">
          <Slider {...settings}>
            <Banner src={dummy2}></Banner>
            <Banner src={dummy1}></Banner>
            <Banner src={dummy3}></Banner>
            <Banner src={dummy4}></Banner>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Interior;
const Banner = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;

  @media all and (max-width: 830px) {
    height: 360px;
  }
`;
