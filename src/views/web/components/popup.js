import { styled } from "styled-components";
import { ReactComponent as PopupClose } from "assets/icon/popup/close.svg";
import { useState } from "react";
function Popup({ index, item, closeEvent }) {
  const [dayclose, setDayClose] = useState(false);

  const popupClose = () => {
    if (dayclose) {
      const today = new Date();
      // +1일 계산
      const expiryDate = new Date(today.setDate(today.getDate() + 1));
      // 로컬스토리지 저장
      localStorage.setItem(`popup_${item.idx}`, expiryDate.getTime());
    }
    closeEvent(item.idx);
  };

  return (
    <>
      {item.isShow && (
        <PopupWrapper $index={index}>
          <PopupTop>
            <PopupClose
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                popupClose();
              }}
            ></PopupClose>
          </PopupTop>
          <PopupContents
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></PopupContents>
          <PopupBottom>
            <label>
              <input
                type="checkbox"
                value={dayclose}
                onChange={(e) => {
                  setDayClose(e.target.checked);
                }}
              ></input>
              하루 동안 이 창을 열지 않음
            </label>
          </PopupBottom>
        </PopupWrapper>
      )}
    </>
  );
}

export default Popup;

const PopupWrapper = styled.div`
  position: absolute;
  z-index: ${({ $index }) => 3 + $index};
  top: ${({ $index }) => 30 + 36 * $index + "px"};
  left: ${({ $index }) => 50 + 70 * $index + "px"};
  border: 1px solid #dbdbdb;
  background-color: white;
`;
const PopupTop = styled.div`
  height: 36px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 14px;
`;

const PopupContents = styled.div`
  max-width: 500px;
  max-height: 500px;
  position: relative;
  overflow: hidden;
  > figure {
    width: 100% !important;
    img {
      max-width: 100%;
      max-height: 500px;
    }
  }
`;
const PopupBottom = styled.div`
  height: 44px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 14px;
  > label {
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: #ffffff;
    display: flex;
    align-items: center;
    > input[type="checkbox"] {
      margin-right: 7px;
    }
  }
`;
