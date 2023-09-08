import dummy2 from "assets/dummy/dummy_2.png";
import dosiLine from "assets/logo_line.png";
import { useEffect, useRef, useState } from "react";

const Brand = () => {
  const elementRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !scrollActive) return setScrollActive(true);

      const el = document.querySelector(".brand__contents");
      if (el.classList.contains("active")) return;
      el.classList.add("active");
    });
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const options = { root: null, threshold: 0.6 };
    const io = new IntersectionObserver(callback, options);
    io.observe(elementRef.current);
    return () => {
      io.disconnect();
    };
  }, []);
  return (
    <section id="brand" ref={elementRef}>
      <div className="logo_slider left">
        <div className="slider_item first">
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
        </div>
        <div className="slider_item second">
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
        </div>
      </div>
      <div className="brand__wrapper container">
        <img className="brand__img" src={dummy2}></img>
        <div className="brand__contents">
          <h1 className="contents__title">도시맥주</h1>
          <p className="contents__introduce">
            항상 꿈꿔 왔습니다.
            <br />
            <br />
            누구나 할 수 있는, 어디에서나 공존하는, 그런 인테리어의 공간이 아닌,
            새롭고 세련되고 힙한 공간으로 수년간의 연구와 시도 끝에
            만들어졌습니다.
          </p>
        </div>
      </div>
      <div className="logo_slider right">
        <div className="slider_item first">
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
        </div>
        <div className="slider_item second">
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
          <img src={dosiLine} width={550} height={50}></img>
        </div>
      </div>
    </section>
  );
};

export default Brand;
