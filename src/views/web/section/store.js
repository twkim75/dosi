import dummy1 from "assets/dummy/dummy_1.jpg";
import dummy2 from "assets/dummy/dummy_2.png";
import dummy3 from "assets/dummy/dummy_3.jpg";
import dummy4 from "assets/dummy/dummy_4.jpg";
import { useEffect, useRef, useState } from "react";

const { kakao } = window;

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

  useEffect(() => {
    // // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const mapOption = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.5259628, 127.0376468), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(mapContainer, mapOption); //지도 생성 및 객체 리턴
    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();
    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
    var positions = [
      {
        content:
          "<div class='marker_info_wrapper'><h4>도시맥주 압구정점</h4><hr/><h6>서울 강남구 선릉로 157길 23-4 ,1층</h6></div>",
        latlng: new kakao.maps.LatLng(37.5259628, 127.0376468),
      },
    ];
    for (var i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
      });
      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "click",
        makeOverListener(map, marker, infowindow)
      );
    }
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }
  }, []);
  return (
    <>
      <section id="store" ref={elementRef}>
        <div className="store__wrapper container">
          <h1 className="title">매장안내</h1>
          <div id="map"></div>
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
            <div className="open_store__item __empty">
              <h1>WHO'S NEXT?</h1>
              {/* <div className="item__discription">
                <h3>도시맥주 압구정점(9월 오픈예정)</h3>
                <h6>서울 강남구 선릉로 157길 23-4 ,1층</h6>
              </div> */}
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
