import { useEffect, useRef, useState } from "react";

const Sorry = () => {
  const elementRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !scrollActive) return setScrollActive(true);

      const el = document.querySelector("#sorry .container");
      if (el.classList.contains("active")) return;
      el.classList.add("active");
    });
  };

  useEffect(() => {
    if (!elementRef.current) return;

    const options = { root: null, threshold: 0.5 };
    const io = new IntersectionObserver(callback, options);
    io.observe(elementRef.current);
    return () => {
      io.disconnect();
    };
  }, []);
  return (
    <section id="sorry" ref={elementRef}>
      <div className="container">
        <h1 className="title">
          죄송한 말씀이지만,
          <br />
          <strong>누구나</strong> 창업을 도와드리진 않습니다.
        </h1>
        <h4 className="subtitle">
          점주님의 서비스업에 대한 이해도와 의지를 보고 충분한 상담을 거친 후에
          본사에서 결정해 드릴 생각입니다.
          <br />
          다년간의 프랜차이즈 사업을 해본 결과 점주님들 한분 한분이 브랜드의
          가치를 채워 주신 다는 것을 깨달았습니다.
          <br />
          저희 어세이블과 열심히 미래를 함께하실 점주님을 구합니다.
        </h4>
      </div>
    </section>
  );
};
export default Sorry;
