const Consulting = () => {
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
              <div>이메일</div>
              <input></input>
            </div>
            <div className="input__wrapper">
              <div>창업희망지역</div>
              <input></input>
            </div>
            <div className="input__wrapper">
              <div>예상 창업비용</div>
              <input></input>
            </div>
            <div className="input__wrapper">
              <div>연락가능시간</div>
              <input></input>
            </div>
            <div className="input__wrapper">
              <div>추가문의사항</div>
              <input></input>
            </div>
          </div>
          <div className="consulting__btn">
            <button>문의하기</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Consulting;
