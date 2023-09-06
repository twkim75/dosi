import { CONSENT } from "const/consent";
import { useState } from "react";
import { styled } from "styled-components";
import { Checkbox } from "../components/checkbox";

const Consulting = () => {
  const [checked, setChecked] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <section id="consulting">
      <div className="container">
        <h1 className="title">가맹상담 신청</h1>
        <h4 className="subtitle">
          성공적인 창업의 시작 도시맥주에서 시작하세요!
        </h4>
        <hr />
        <div className="consulting__wrapper">
          <div className="consulting__form">
            <div className="input__wrapper">
              <div>성함</div>
              <input></input>
            </div>
            <div className="input__wrapper">
              <div>연락처</div>
              <input></input>
            </div>
            <div className="input__wrapper">
              <div>창업희망지역</div>
              <input></input>
            </div>
            <div className="input__wrapper">
              <div>추가문의사항</div>
              <FormTextareaStyled value={comment}></FormTextareaStyled>
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
            <button>문의하기</button>
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
