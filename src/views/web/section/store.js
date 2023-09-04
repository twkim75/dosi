import dummy1 from "assets/dummy/dummy_1.jpg";
import dummy2 from "assets/dummy/dummy_2.png";
import dummy3 from "assets/dummy/dummy_3.jpg";
import dummy4 from "assets/dummy/dummy_4.jpg";

const Store = () => {
  return (
    <>
      <section id="store">
        <div className="store__wrapper container">
          <h1 className="title">매장안내</h1>
          <div className="store__map">지도</div>
        </div>
      </section>
      <section id="open">
        <div className="open__wrapper container">
          <div className="open_store__items">
            <div className="open_store__item">
              <img src={dummy1}></img>
              <h3>도시맥주 압구정점(9월 오픈예정)</h3>
              <h6>서울 강남구 선릉로157길 25 2층</h6>
            </div>
            <div className="open_store__item">
              <img src={dummy2}></img>
              <h3>도시맥주 신중동점(10월 오픈예정)</h3>
              <h6>경기도 부천시 신흥로 163</h6>
            </div>
            <div className="open_store__item">
              <img src={dummy3}></img>
              <h3>도시맥주 인천구월점(내년 1월 오픈예정)</h3>
              <h6>인천광역시 남동구 인하로489번길 28, 2층</h6>
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
