import dummy1 from "assets/dummy/dummy_1.jpg";
import dummy2 from "assets/dummy/dummy_2.png";
import dummy3 from "assets/dummy/dummy_3.jpg";
import dummy4 from "assets/dummy/dummy_4.jpg";
import { useEffect, useRef, useState } from "react";

const Store = () => {
  const elementRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !scrollActive) return setScrollActive(true);

      const el = document.querySelector("#store .title");
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
    <>
      <section id="store" ref={elementRef}>
        <div className="store__wrapper container">
          <h1 className="title">매장안내</h1>
          <div className="store__map">지도</div>
        </div>
      </section>
      <section id="open">
        <div className="open__wrapper container">
          <div className="open_store__items">
            <div className="open_store__item">
              <img src={dummy2}></img>
              <div className="item__discription">
                <h3>도시맥주 압구정점(9월 오픈예정)</h3>
                <h6>서울 강남구 선릉로 157길 23-4 ,1층</h6>
              </div>
            </div>
            {/* <div className="open_store__item">
              <img src={dummy3}></img>
              <h3>도시맥주 인천구월점(내년 1월 오픈예정)</h3>
              <h6>인천광역시 남동구 인하로489번길 28, 2층</h6>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
