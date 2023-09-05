import dummy2 from "assets/dummy/dummy_2.png";
import dosiLine from "assets/logo_line.png";
import { useEffect } from "react";

const Brand = () => {
  return (
    <section id="brand">
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
        <img className="brand__img active" src={dummy2}></img>
        <div className="brand__contents">
          <h1 className="contents__title">도시맥주</h1>
          <p className="contents__introduce">
            도시맥주는 1920년대의 일본 레트로펍인 재즈킷사의 엔틱한 분위기를
            모토로 삼은 브랜드 입니다. 자체제작한 고양이 캐릭터를 브랜드의
            마스코트로 내세워 전연령층을 아우르는 주점을 완성했습니다.
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
