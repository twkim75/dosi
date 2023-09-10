import "styles/select.scss";
import { useState, useEffect } from "react";
import { ReactComponent as SelectArrow } from "assets/selectarrow.svg";

// icon 이미지

function Select({
  options = [],
  optionClickEvent = () => {},
  defaultValue,
  className = "", // 클래스명
  // defaultValue=""
  // options=[]
  // clearEvent = () => {}, // input clear event
  // changeEvent = () => {}, // input change event
  // clickEvent = () => {}, // input click event
}) {
  const idx = defaultValue ? defaultValue : 0;
  // className
  const [selected, setSelected] = useState(false);
  const [option, setOption] = useState(options[0].label);
  useEffect(() => {
    window.addEventListener("click", outwindowClicked);
    setOption(options[idx].label);
    return () => {
      // unmount
      window.removeEventListener("click", outwindowClicked);
    };
  }, []);

  const selectClick = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };
  const chooseoption = (e, item) => {
    optionClickEvent(e, item);
    setOption(e.target.innerHTML);
    setSelected(false);
  };
  const outwindowClicked = (e) => {
    if (
      !e.target.classList?.contains("optionitem") &&
      !e.target.classList?.contains("select__btn") &&
      !e.target.classList?.contains("select__icon") &&
      !e.target.parentNode?.classList.contains("select__iconvalue")
    ) {
      setSelected(false);
    }
  };
  return (
    <>
      <div className="select__container">
        <div className={`select__btn ${className}`} onClick={selectClick}>
          {option}
        </div>
        <ul
          className={"select__control " + (selected === false ? "hidden" : "")}
        >
          {options.map((item) => (
            <li
              className="optionitem"
              onClick={(e) => chooseoption(e, item)}
              value={item.idx}
              key={item.label}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <span className="select__icon " onClick={selectClick}>
          <SelectArrow
            fill="#545D69"
            className={
              "select__iconvalue " + (selected === false ? "" : "clicked")
            }
          ></SelectArrow>
        </span>
      </div>
    </>
  );
}

export { Select };
