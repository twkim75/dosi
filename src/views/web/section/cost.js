const Cost = () => {
  return (
    <section id="cost">
      <div className="cost__wrapper container">
        <h1 className="title">신규 가맹비용 안내</h1>
        <h4 className="subtitle">
          경쟁 브랜드도 앞다투며 도시맥주로 업종변경하는 이유!
        </h4>
        <div className="cost__table">
          <div className="table__header">
            <div>구분</div>
            <div>가격</div>
            <div>비고</div>
          </div>
          <div className="table__items">
            <div className="__item">
              <div>가맹비</div>
              <div className="price discount">
                <span>1,000</span>
                <span>500</span>
              </div>
              <div>상호이용, 노하우전수</div>
            </div>
            <div className="__item">
              <div>교육비</div>
              <div className="price discount">
                <span>1,000</span>
                <span>500</span>
              </div>
              <div>메뉴/매장 교육, 오픈지원</div>
            </div>
            <div className="__item">
              <div>도면디자인(3D포함)</div>
              <div className="price discount">
                <span>200</span>
                <span>면제</span>
              </div>
              <div>-</div>
            </div>
            <div className="__item">
              <div>인테리어</div>
              <div className="price discount">
                <span>5,000</span>
                <span>4,500</span>
              </div>
              <div>평당 180(자체 시공 가능)</div>
            </div>
            <div className="__item">
              <div>주방기물</div>
              <div className="price">
                <span>1,300</span>
              </div>
              <div>매장별 상이</div>
            </div>
            <div className="__item">
              <div>주방기기</div>
              <div className="price">
                <span>1,150</span>
              </div>
              <div>매장별 상이</div>
            </div>
            <div className="__item">
              <div>간판</div>
              <div className="price">
                <span>500</span>
              </div>
              <div>사이즈별 상이(외부간판/실내사인물 등)</div>
            </div>
            <div className="__item">
              <div>초도비품</div>
              <div className="price">
                <span>500</span>
              </div>
              <div>메뉴판, 오픈홍보마케팅 등</div>
            </div>
            <div className="__item">
              <div>합계</div>
              <div className="price discount">
                <span>10,700</span>
                <span>8,950</span>
              </div>
              <div>업종변경 시 개별상담</div>
            </div>
          </div>
        </div>
        <div className="cost__caption">
          <p>
            ※ 별도공사 및 기타 : 계약이행보증금(300), 포스기 오더(티오더),
            의탁자, 냉난방기, 철거, 전기증설, 도시가스 인입 및 배관공사, 파사드
            및 외부 공사, 화장실, 덕트, 각종 인허가비용, 스피커, CCTV, 홍등,
            연못 등
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
