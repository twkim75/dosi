import { useEffect, useRef, useState } from "react";

const Procedure = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const proceduresRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !scrollActive) return setScrollActive(true);
      const target = entry.target;
      if (target.classList.contains("active")) return;

      if (target.classList.contains("title")) {
        const titleEl = document.querySelector("#procedure .title");
        return titleEl.classList.add("active");
      }
      if (target.classList.contains("subtitle")) {
        const subtitleEl = document.querySelector("#procedure .subtitle");
        return subtitleEl.classList.add("active");
      }
      if (target.classList.contains("procedure__wrapper")) {
        const procedureWrapperEl = document.querySelector(
          "#procedure .procedure__wrapper"
        );
        return procedureWrapperEl.classList.add("active");
      }
    });
  };

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !proceduresRef.current)
      return;

    const options = { root: null, threshold: 0.5 };
    const io = new IntersectionObserver(callback, options);
    io.observe(titleRef.current);
    io.observe(subtitleRef.current);
    io.observe(proceduresRef.current);
    return () => {
      io.disconnect();
    };
  }, []);
  return (
    <>
      <section id="procedure">
        <div className="container">
          <h1 className="title" ref={titleRef}>
            가맹절차
          </h1>
          <h4 className="subtitle" ref={subtitleRef}>
            도시맥주는 예비 점주님들의 어려움을 잘 알고 있습니다.
            <br />
            해보시지 않은 구청에서의 영업신고증 신고, 지위승계, 사업자등록증
            등등 디테일한 부분까지 도와드리겠습니다.
          </h4>
          <div className="procedure__wrapper" ref={proceduresRef}>
            <div className="procedure">
              <h4>1. 가맹상담</h4>
              <hr></hr>
              <p>
                유선상담 및 미팅상담
                {/* <br />
                ▶︎ 1811-8051 */}
              </p>
            </div>
            <div className="procedure">
              <h4>2. 상권분석</h4>
              <hr></hr>
              <p>
                예비 점주님의 희망상권이 출점 가능한 상권인지 1차조사 후 상담 및
                자리분석
              </p>
            </div>
            <div className="procedure">
              <h4>3. 임대차계약</h4>
              <hr></hr>
              <p>
                예비 점주님의 잔금일과 본사 인테리어 업체 일정 미리 공유하여
                하루도 공백 없는 디테일 진행
              </p>
            </div>
            <div className="procedure">
              <h4>4. 가맹계약 체결</h4>
              <hr></hr>
              <p>주식회사 어세이블 , 점주님과의 가맹 계약</p>
            </div>
            <div className="procedure">
              <h4>5. 인테리어 및 간판 시공</h4>
              <hr></hr>
              <p>
                3D 도면을 미리 확인 시켜 드리며, 안전하고 신속한 인테리어 시공
              </p>
            </div>
            <div className="procedure">
              <h4>6. 교육 진행</h4>
              <hr></hr>
              <p>현장에서 직접 그 매장에 맞춰 교육 진행</p>
            </div>
            <div className="procedure">
              <h4>7. 오픈</h4>
              <hr></hr>
              <p>본사 슈퍼바이저들이 파견되어 안전하고 숙달된 오픈 과정</p>
            </div>
            <div className="procedure">
              <h4>8. 오픈 이후</h4>
              <hr></hr>
              <p>지속적인 교육 , 신메뉴개발, 마케팅 진행</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Procedure;
