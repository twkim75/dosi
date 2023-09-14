import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";

const Main = ({ topimgList }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // swipe: false,
  };

  const elementRef = useRef(null);

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      const el = document.querySelector("#header");
      if (!entry.isIntersecting) {
        el.classList.add("header--dark");
      } else {
        el.classList.remove("header--dark");
      }
    });
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const options = { root: null, threshold: 0.9 };
    const io = new IntersectionObserver(callback, options);
    io.observe(elementRef.current);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section id="main" ref={elementRef}>
      <div className="slider__container">
        <Slider {...settings}>
          {topimgList.map((imgSrc, index) => {
            return <Banner key={`${index}_banner`} src={imgSrc}></Banner>;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Main;
const Banner = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;
