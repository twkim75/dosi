import { CONSENT } from "const/consent";
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { Checkbox } from "../components/checkbox";

const Consulting = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    question: "",
  });

  const [checked, setChecked] = useState(false);

  const onChangeData = (e, setData) => {
    const { name, value } = e.currentTarget;
    setData((preVal) => ({ ...preVal, [name]: value }));
  };

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && !scrollActive) return setScrollActive(true);
      const target = entry.target;
      if (target.classList.contains("active")) return;

      if (target.classList.contains("title")) {
        const titleEl = document.querySelector("#consulting .title");
        return titleEl.classList.add("active");
      }
      if (target.classList.contains("subtitle")) {
        const subtitleEl = document.querySelector("#consulting .subtitle");
        return subtitleEl.classList.add("active");
      }
      if (target.classList.contains("consulting__wrapper")) {
        const consultingWrapperEl = document.querySelector(
          "#consulting .consulting__wrapper"
        );
        return consultingWrapperEl.classList.add("active");
      }
    });
  };

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !formRef.current) return;

    const options = { root: null, threshold: 0.5 };
    const io = new IntersectionObserver(callback, options);
    io.observe(titleRef.current);
    io.observe(subtitleRef.current);
    io.observe(formRef.current);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section id="consulting">
      <div className="container">
        <h1 className="title" ref={titleRef}>
          가맹상담 신청
        </h1>
        <h4 className="subtitle" ref={subtitleRef}>
          성공적인 창업의 시작 도시맥주에서 시작하세요!
        </h4>
        <hr />
        <div className="consulting__wrapper" ref={formRef}>
          <div className="consulting__form">
            <div className="input__wrapper">
              <div>성함</div>
              <input
                name="name"
                value={formData.name}
                onChange={(e) => {
                  onChangeData(e, setFormData);
                }}
              ></input>
            </div>
            <div className="input__wrapper">
              <div>연락처</div>
              <input
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  onChangeData(e, setFormData);
                }}
              ></input>
            </div>
            <div className="input__wrapper">
              <div>창업희망지역</div>
              <input
                name="location"
                value={formData.location}
                onChange={(e) => {
                  onChangeData(e, setFormData);
                }}
              ></input>
            </div>
            <div className="input__wrapper">
              <div>추가문의사항</div>
              <FormTextareaStyled
                name="question"
                onChange={(e) => {
                  onChangeData(e, setFormData);
                }}
              ></FormTextareaStyled>
            </div>
          </div>
          <div className="consulting__btn_wrapper">
            <FormTextareaStyled
              defaultValue={CONSENT}
              readOnly
            ></FormTextareaStyled>
            <Checkbox checked={checked} onChange={setChecked}>
              <span>위의 ‘개인정보의 제공 및 활용 동의서’ 에 동의합니다.</span>
            </Checkbox>
            <button
              onClick={() => {
                console.log(formData);
                console.log(checked);
              }}
            >
              문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Consulting;

export const FormTextareaStyled = styled.textarea`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  border: none;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  padding: 10px;
  resize: none;
  width: 100%;
  color: var(--color-dark-1);
  border-radius: 6px;
  /* max-width: ${(props) => props.w || "900"}px; */
  height: 120px;
  &:focus-visible {
    /* border: none; */
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10px; /* 스크롤바의 길이 */
    background-color: #303030; /* 스크롤바의 색상 */
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background: #e8e8e8; /*스크롤바 뒷 배경 색상*/
  }
`;
