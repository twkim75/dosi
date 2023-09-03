import { useState } from "react";
import Slider from "react-slick";
import dummy1 from "assets/dummy/dummy_1.jpg";
import dummy2 from "assets/dummy/dummy_2.png";
import dummy3 from "assets/dummy/dummy_3.jpg";
import dummy4 from "assets/dummy/dummy_4.jpg";
import { styled } from "styled-components";

const Main = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };
  return (
    <section id="main">
      <div className="slider__container">
        <Slider {...settings}>
          <Banner src={dummy2}></Banner>
          <Banner src={dummy1}></Banner>
          <Banner src={dummy3}></Banner>
          <Banner src={dummy4}></Banner>
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
