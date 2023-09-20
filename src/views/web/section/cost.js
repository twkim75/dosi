import { useEffect, useRef, useState } from "react";

const Cost = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const tableRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !scrollActive) return setScrollActive(true);
      const target = entry.target;
      if (target.classList.contains("active")) return;

      if (target.classList.contains("title")) {
        const titleEl = document.querySelector("#cost .title");
        return titleEl.classList.add("active");
      }
      if (target.classList.contains("subtitle")) {
        const subtitleEl = document.querySelector("#cost .subtitle");
        return subtitleEl.classList.add("active");
      }
      if (target.classList.contains("cost__table")) {
        const procedureWrapperEl = document.querySelector("#cost .cost__table");
        return procedureWrapperEl.classList.add("active");
      }
    });
  };

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !tableRef.current) return;

    const options = { root: null, threshold: 0.6 };
    const io = new IntersectionObserver(callback, options);
    io.observe(titleRef.current);
    io.observe(subtitleRef.current);
    io.observe(tableRef.current);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section id="cost">
      <div className="cost__wrapper container">
        <h1 className="title" ref={titleRef}>
          신규 가맹비용 안내
        </h1>
        <h4 className="subtitle" ref={subtitleRef}>
          모든 상권에서 1등 도시맥주!
        </h4>
        <div className="cost__table" ref={tableRef}>
          <div className="table__caption">[ 25평 기준 ]</div>
          <div className="table__header">
            <div>구분</div>
            <div>가격</div>
            <div>비고</div>
          </div>
          <div className="table__items">
            <div className="__item">
              <div>가맹비</div>
              <div className="price">
                <span>700</span>
              </div>
              <div>-</div>
            </div>
            <div className="__item">
              <div>교육비</div>
              <div className="price">
                <span>300</span>
              </div>
              <div>-</div>
            </div>
            <div className="__item">
              <div>인테리어</div>
              <div className="price">
                <span>5,500</span>
              </div>
              <div style={{ flexDirection: "column", gap: "2px" }}>
                <div>40평 이하 평당 220</div>
                <div>40평 이상 평당 195 </div>
              </div>
            </div>
            <div className="__item">
              <div>주방그릇 및 기물</div>
              <div className="price">
                <span>350</span>
              </div>
              <div>새제품 기준</div>
            </div>
            <div className="__item">
              <div>주방집기</div>
              <div className="price">
                <span>650</span>
              </div>
              <div>-</div>
            </div>
            <div className="__item">
              <div>간판</div>
              <div className="price">
                <span>500</span>
              </div>
              <div>
                간판은 매장별 간판 사이즈가 전부 상이하므로, 사이즈별 금액책정
              </div>
            </div>
            <div className="__item">
              <div>의탁자</div>
              <div className="price">
                <span>300</span>
              </div>
              <div>
                스텐테이블 금액, 의자는 붙박이로 인테리어 금액에 포함입니다
              </div>
            </div>
            <div className="__item">
              <div>초도비품</div>
              <div className="price">
                <span>300</span>
              </div>
              <div>유니폼, 도시맥주 로고 맥주잔,마케팅 등등</div>
            </div>
            <div className="__item">
              <div>합계금액</div>
              <div className="price discount">
                <span>8,600</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="cost__caption">
          <p>
            ※ 별도공사 및 기타:계약이행보증금:300 ,포스기,
            태블릿pc(에스오더),냉난방기,전기증설, 도시가스, 파사드 및 외부공사,
            화장실, 닥트후드, 각종 인허가, 음향기기, CCTV,폴딩도어, 로얄티 월3%
          </p>
          <p>
            ※ 위 금액은 점포 개설 시 평균치를 기준으로 책정되었으며, 점포 상태에
            따라 변경 사항이 발생할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cost;
