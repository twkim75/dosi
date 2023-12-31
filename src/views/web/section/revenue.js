import { useEffect, useRef, useState } from "react";
import chart from "assets/dummy/chart.png";
import { styled } from "styled-components";
const Revenue = () => {
  const elementRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !scrollActive) return setScrollActive(true);

      const el = document.querySelector("#revenue .title__wrapper");
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

  return (
    <section id="revenue" ref={elementRef}>
      <div className="revenue__wrapper container">
        <div className="title__wrapper">
          <h1 className="title">수익성</h1>
          <h4 className="subtitle">
            경쟁 브랜드도 앞다투며 도시맥주로 업종변경하는 이유!
          </h4>
        </div>
        <CommingSoon>COMMING SOON.</CommingSoon>
        {/* <div className="revenue__contents">
          <div className="contents__chart">
            <img src={chart}></img>
            <p className="__caption">
              ※ 건대점 (2023년 1월)의 실제 매출액에 근거한 손익자료입니다.
            </p>
          </div>
          <div className="contents__table">
            <div className="table__header">
              <div>구분</div>
              <div>비용</div>
            </div>
            <div className="table__items">
              <div className="__item">
                <div>판매총액[100%]</div>
                <div>182,811,500</div>
              </div>
              <div className="__item">
                <div>식자재비[26%]</div>
                <div>- 47,530,990</div>
              </div>
              <div className="__item">
                <div>인건비[19%]</div>
                <div>- 34,734,185</div>
              </div>
              <div className="__item">
                <div>주류[12%]</div>
                <div>- 21,937,380</div>
              </div>
              <div className="__item">
                <div>임대료[5.2%]</div>
                <div>- 9,570,000</div>
              </div>
              <div className="__item">
                <div>공과잡비운영 [3.3%]</div>
                <div>- 6,016,456</div>
              </div>
              <div className="__item">
                <div>순수익[34.5%]</div>
                <div>= 63,022,489</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Revenue;

const CommingSoon = styled.div`
  line-height: 300px;
  padding: 20px 0px;
  font-family: "Outfit";
  font-weight: 700;
  color: var(--color-dark-1);
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
