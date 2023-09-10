import "styles/custombutton.scss";

// icon 이미지
import { ReactComponent as Search } from "assets/search.svg";
import { ReactComponent as Close } from "assets/close.svg";
import { ReactComponent as Checkbox } from "assets/checkbox.svg";
import { ReactComponent as ArrowRight } from "assets/arrow_right.svg";
import { ReactComponent as Logout } from "assets/logout.svg";
import { ReactComponent as Settings } from "assets/settings.svg";
import { ReactComponent as Kakao } from "assets/kakao.svg";
import { ReactComponent as Copy } from "assets/copy.svg";
import { ReactComponent as ChevronLeft } from "assets/chevron_left.svg";
import { ReactComponent as ChevronRight } from "assets/chevron_right.svg";
import { ReactComponent as PageFirst } from "assets/page_first.svg";
import { ReactComponent as PageLast } from "assets/page_last.svg";
import { ReactComponent as PagePrev } from "assets/page_prev.svg";
import { ReactComponent as PageNext } from "assets/page_next.svg";
import { ReactComponent as Refresh } from "assets/refresh.svg";

function Button({
  className = "", // class
  name, // name
  size, // size ['small', 'medium(*)', 'large'] (*) = default
  type, // type ['outlined', 'icon', 'primary']
  icon = "", // button icon style
  disabled = false, // disabled
  btnClickEvent = () => {}, // button click Event
}) {
  const buttonName = name ? name : "";

  let btnCls = "";
  //  size 설정
  switch (size) {
    case "small":
      btnCls = "btn--small";
      break;
    case "medium":
      btnCls = "btn--medium";
      break;
    case "large":
      btnCls = "btn--large";
      break;
    default:
      btnCls = "btn--medium";
      break;
  }
  //  type 설정
  switch (type) {
    case "primary":
      btnCls += " primary";
      break;
    case "outlined":
      btnCls += " outlined";
      break;
    case "icon":
      btnCls += " icon";
      break;
    default:
      break;
  }

  if (className.length > 0) btnCls += ` ${className}`;

  // icon 설정
  let _icon = "";
  if (icon.length > 0) {
    // icon 컴포넌트 추가
    switch (icon) {
      case "search":
        _icon = <Search fill="#6b7588"></Search>;
        break;
      case "close":
        _icon = <Close fill="#6b7588"></Close>;
        break;
      case "checkbox":
        _icon = <Checkbox fill="#3377FF"></Checkbox>;
        break;
      case "arrow_right":
        _icon = <ArrowRight fill="#3377FF"></ArrowRight>;
        break;
      case "logout":
        _icon = <Logout></Logout>;
        break;
      case "settings":
        _icon = <Settings></Settings>;
        break;
      case "kakao":
        _icon = <Kakao></Kakao>;
        break;
      case "copy":
        _icon = <Copy></Copy>;
        break;
      case "chevron_left":
        _icon = <ChevronLeft></ChevronLeft>;
        break;
      case "chevron_right":
        _icon = <ChevronRight></ChevronRight>;
        break;
      case "page_first":
        _icon = <PageFirst></PageFirst>;
        break;
      case "page_last":
        _icon = <PageLast></PageLast>;
        break;
      case "page_prev":
        _icon = <PagePrev></PagePrev>;
        break;
      case "page_next":
        _icon = <PageNext></PageNext>;
        break;
      case "refresh":
        _icon = <Refresh fill="#3A3A3C"></Refresh>;
        break;
      default:
        break;
    }
  }
  return (
    <>
      <button className={btnCls} onClick={btnClickEvent} disabled={disabled}>
        {icon.length > 0 && _icon}
        {buttonName}
      </button>
    </>
  );
}

export default Button;
