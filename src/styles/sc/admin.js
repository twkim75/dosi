import { styled } from "styled-components";

const ContentContainer = styled.div`
  max-width: 1444px;
  margin: auto;
`;

const PageTitle = styled.h4`
  margin-bottom: 24px;
  color: var(--color-dark-1);
  font-size: 24px;
  line-height: 1.3;
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

const UploadEmptyBox = styled.div`
  height: 150px;
  width: 200px;
  border: 1px solid var(--color-admin-border);
  border-radius: var(--border-radius);
`;
const UploadBox = styled.div`
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  border: 1px solid var(--color-admin-border);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UploadBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const UploadBoxs = styled.div`
  display: flex;
  flex-direction: column;
  > ${UploadBoxWrapper} {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const UploadBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 12px;
  padding-bottom: 8px;
`;
const UploadBtn = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-size: 12px;
  font-weight: 500;
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dde5e9;
  border-radius: var(--border-radius);
`;
const UploadCaution = styled.div`
  font-size: 12px;
  color: var(--color-dark-3);
  position: relative;
  padding-left: 6px;
  margin-bottom: 2px;
  &:last-child {
    margin: 0;
  }
  &::before {
    position: absolute;
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--color-dark-3);
    left: 0;
    top: calc(50% - 1.5px);
  }
`;
const BottomBtnWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

/** SearchBox 시작*/
const SearchBox = styled.div`
  border: 1px solid var(--color-admin-border);
  border-radius: var(--border-radius);
  margin-bottom: 12px;
`;
const SearchRow = styled.div`
  height: 60px;
  display: flex;
  color: var(--color-dark-1);
  border-bottom: 1px solid var(--color-admin-border);
  &:last-child {
    border-bottom: none;
  }
`;
const SearchKey = styled.div`
  width: 132px;
  height: 100%;
  background-color: #fafafc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
const SearchValue = styled.div`
  width: calc(100% - 132px);
  display: flex;
  align-items: center;
  padding-left: 18px;
`;
const SearchItem = styled.div`
  width: 50%;
  display: flex;
  &:first-child > ${SearchKey} {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`;

/** 상세보기(Detail) 시작*/
const DetailWrapper = styled.div`
  border-top: 2px solid var(--color-admin-border);
`;
const DetailSubject = styled.h5`
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-admin-border);
  background-color: var(--color-light-4);
  color: var(--color-dark-1);
`;
const DetailSubHead = styled.div`
  border-bottom: 1px solid var(--color-admin-border);
  display: flex;
  align-items: center;
  padding: 0px 20px;
  color: var(--color-dark-1);
  > div {
    padding: 12px 0;
    &:first-child {
      width: 100px;
    }
    &:last-child {
      width: calc(100% - 100px);
    }
  }
`;
const DetailContents = styled.div`
  padding: 32px 20px;
  border-bottom: 1px solid var(--color-admin-border);
  min-height: ${({ height }) => (height ? height : "400px")};
`;

export {
  ContentContainer,
  PageTitle,
  FormBox,
  FormBoxItem,
  FormBoxItemTitle,
  FormBoxItemValue,
  UploadBoxWrapper,
  UploadEmptyBox,
  UploadBoxs,
  UploadBox,
  UploadBtns,
  UploadBtn,
  UploadCaution,
  BottomBtnWrapper,
  SearchBox,
  SearchRow,
  SearchItem,
  SearchKey,
  SearchValue,
  DetailWrapper,
  DetailSubject,
  DetailSubHead,
  DetailContents,
};
