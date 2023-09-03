import next from "assets/button/next.png";
import prev from "assets/button/prev.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={{ ...style }} onClick={onClick}>
      <img src={next}></img>
    </button>
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className={className} style={{ ...style }} onClick={onClick}>
      <img src={prev}></img>
    </button>
  );
}

export { NextArrow, PrevArrow };
