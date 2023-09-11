import { ReactComponent as Close } from "assets/icon/dialog/close.svg";
import styled from "styled-components";
import { dateFormatV2, formatPhoneNumber } from "utils/format";
import Button from "views/admin/components/Button";

function ApplyDetailDialog({ detail, closeDialog }) {
  return (
    <ModalWrapper>
      <Modal>
        {/* 타이틀 */}
        <ModalHeader>
          <h5>상세보기</h5>
          <Button onClick={closeDialog}>
            <Close style={{ margin: 0 }}></Close>
          </Button>
        </ModalHeader>
        <FormBox>
          <FormBoxItem height="54px">
            <FormBoxItemTitle>신청날짜</FormBoxItemTitle>
            <FormBoxItemValue>
              <span>{dateFormatV2(detail.regDate)}</span>
            </FormBoxItemValue>
          </FormBoxItem>
          <FormBoxItem height="54px">
            <FormBoxItemTitle>성함</FormBoxItemTitle>
            <FormBoxItemValue>
              <span>{detail.name}</span>
            </FormBoxItemValue>
          </FormBoxItem>
          <FormBoxItem height="54px">
            <FormBoxItemTitle>연락처</FormBoxItemTitle>
            <FormBoxItemValue>
              <span>{detail.phone}</span>
            </FormBoxItemValue>
          </FormBoxItem>

          <FormBoxItem height="54px">
            <FormBoxItemTitle>창업희망지역</FormBoxItemTitle>
            <FormBoxItemValue>
              <span>{detail.hopeAddr}</span>
            </FormBoxItemValue>
          </FormBoxItem>

          <FormBoxItem height="200px">
            <FormBoxItemTitle>추가문의사항</FormBoxItemTitle>
            <FormBoxItemValue style={{ overflowY: "auto" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: detail.addText?.replaceAll("\n", "<br/>") || "",
                }}
              ></div>
            </FormBoxItemValue>
          </FormBoxItem>
        </FormBox>
      </Modal>
    </ModalWrapper>
  );
}

export default ApplyDetailDialog;
const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 10;
  background-color: rgba(58, 58, 60, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;
`;
const Modal = styled.div`
  position: relative;
  background-color: #fff;
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;
  display: flex;
  flex-direction: column;
  width: 560px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-dark-1);
  margin-bottom: 24px;
`;

/** FormBox 시작*/
const FormBox = styled.div`
  border-top: 2px solid var(--color-admin-border);
  display: flex;
  flex-direction: column;
`;
const FormBoxItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-admin-border);
  background-color: var(--color-light-4);
  min-height: ${({ height }) => (height ? height : "66px")};
  height: ${({ height }) => (height ? height : "auto")};
`;
const FormBoxItemTitle = styled.div`
  height: 100%;
  width: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-light-4);

  font-size: 14px;
  color: var(--color-dark-1);
`;
const FormBoxItemValue = styled.div`
  height: 100%;
  width: calc(100% - 128px);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--color-dark-1);
  padding: 12px 18px;
  //background-color: white;
  background-color: #fff;

  > fieldset {
    width: 148px;
  }
`;
