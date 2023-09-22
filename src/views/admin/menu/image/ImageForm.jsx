import { imageSaveAPI } from "api/admin";
import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loadingState } from "recoil/back/loading";
import {
  BottomBtnWrapper,
  ContentContainer,
  FormBox,
  FormBoxItem,
  FormBoxItemTitle,
  FormBoxItemValue,
  PageTitle,
  UploadBox,
  UploadBtn,
  UploadBtns,
  UploadCaution,
  UploadEmptyBox,
} from "styles/sc/admin";
import Button from "views/admin/components/Button";
import { Toast } from "views/admin/components/Toast";
import { Radio, RadioGroup, Uploader } from "views/admin/components/input";

function ImageForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const setLoading = useSetRecoilState(loadingState);
  const [writeData, setWriteData] = useState({
    profileURL: null,
    type: "1",
    display: "Y",
  });
  const [filePreview, setFilePreview] = useState("");

  const onChangeDisplayRadioData = (value, setData) => {
    // const { name, value } = e.currentTarget;
    setData((preVal) => ({ ...preVal, display: value }));
  };
  const onChangeTypeRadioData = (value, setData) => {
    // const { name, value } = e.currentTarget;
    setData((preVal) => ({ ...preVal, type: value }));
  };
  // 파일 선택시 이벤트
  const onChangeFile = async (e) => {
    let file = e.target.files[0];
    if (!file) return;

    // 유효성검사
    // 1. 확장자 검사
    if (
      file.type !== "image/png" &&
      file.type !== "image/jpeg" &&
      file.type !== "image/bmp "
    ) {
      e.target.value = "";
      return Toast.info(
        "다음과 같은 확장자만 업로드 할 수 있습니다.(.png, .jpeg, .jpg, .bmp)"
      );
    }
    // 2. 6MB 이하 업로드 가능
    if (file.size > 6291456) {
      e.target.value = "";
      return Toast.info("6MB 이하인 파일만 업로드 가능합니다.");
    }

    await getBase64(file);
    setWriteData((preVal) => ({
      ...preVal,
      profileURL: file,
    }));

    e.target.value = "";
  };
  // 이미지 file => base64 convert
  const getBase64 = async (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function async() {
      setFilePreview(reader.result);
    };
    reader.onerror = function async(error) {
      console.log("Error: ", error);
    };

    return file;
  };
  // 대표이미지 삭제
  const deleteFile = () => {
    setFilePreview("");
    setWriteData((preVal) => ({
      ...preVal,
      filprofileURLe: null,
    }));
  };

  const handleSubmit = useCallback(async () => {
    const { profileURL, type, display } = writeData;
    if (!profileURL || profileURL.length === 0) {
      return Toast.info("이미지를 등록해주세요.");
    }
    setLoading(true);
    const { status } = await imageSaveAPI({
      profileURL,
      type: parseInt(type),
      display,
    });
    if (status === 200) {
      navigate(`/ad/image_list`);
      Toast.success("등록되었습니다.");
    } else {
      Toast.error("데이터 처리중 오류가 발생하였습니다.");
    }
    setLoading(false);
  }, [writeData]);

  return (
    <ContentContainer>
      <PageTitle>이미지 등록</PageTitle>
      <FormBox>
        <FormBoxItem>
          <FormBoxItemTitle style={{ width: "132px" }}>이미지</FormBoxItemTitle>
          <FormBoxItemValue style={{ alignItems: "flex-end" }}>
            {writeData.profileURL ? (
              <UploadBox height="250px" width="250px">
                <img
                  src={filePreview}
                  style={{
                    height: 230,
                    width: 230,
                  }}
                  alt="대표 이미지"
                ></img>
              </UploadBox>
            ) : (
              <UploadEmptyBox></UploadEmptyBox>
            )}
            <UploadBtns>
              <div>
                <Uploader
                  id="file"
                  onChange={(e) => {
                    onChangeFile(e);
                  }}
                >
                  <UploadBtn style={{ marginBottom: "8px" }}>
                    파일선택
                  </UploadBtn>
                </Uploader>
                {writeData.profileURL && (
                  <Button
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      marginBottom: "8px",
                    }}
                    width={"100px"}
                    height={"36px"}
                    type={"outlined"}
                    onClick={() => {
                      deleteFile();
                    }}
                  >
                    <span>삭제</span>
                  </Button>
                )}
              </div>
              <div>
                {/* <UploadCaution>권장 사이즈 : 540 x 540</UploadCaution> */}
                <UploadCaution>6MB 이하 업로드 가능</UploadCaution>
              </div>
            </UploadBtns>
          </FormBoxItemValue>
        </FormBoxItem>
        <FormBoxItem style={{ minHeight: "60px" }}>
          <FormBoxItemTitle>이미지 타입</FormBoxItemTitle>
          <FormBoxItemValue style={{ height: "60px" }}>
            <RadioGroup
              style={{ width: "1200px" }}
              value={writeData.type}
              onChange={(e) => {
                onChangeTypeRadioData(e, setWriteData);
              }}
            >
              <Radio name="type" value="1">
                상단 슬라이드
              </Radio>
              <Radio name="type" value="2">
                인테리어
              </Radio>
              <Radio name="type" value="3">
                메뉴 - MAIN(왼쪽)
              </Radio>
              <Radio name="type" value="6">
                메뉴 - MAIN(오른쪽)
              </Radio>
              <Radio name="type" value="4">
                메뉴 - SOUP
              </Radio>
              <Radio name="type" value="5">
                메뉴 - FRIED
              </Radio>
              
              <Radio name="type" value="7">
                메뉴 - SIDE
              </Radio>
            </RadioGroup>
          </FormBoxItemValue>
        </FormBoxItem>
        <FormBoxItem style={{ minHeight: "60px" }}>
          <FormBoxItemTitle>노출여부</FormBoxItemTitle>
          <FormBoxItemValue style={{ height: "60px" }}>
            <RadioGroup
              style={{ width: "200px" }}
              value={writeData.display}
              onChange={(e) => {
                onChangeDisplayRadioData(e, setWriteData);
              }}
            >
              <Radio name="display" value="Y">
                노출
              </Radio>
              <Radio name="display" value="N">
                비노출
              </Radio>
            </RadioGroup>
          </FormBoxItemValue>
        </FormBoxItem>
      </FormBox>
      <BottomBtnWrapper>
        <Button
          style={{
            color: "white",
            marginRight: "12px",
          }}
          width={"120px"}
          height={"42px"}
          color={"admin_sub"}
          onClick={handleSubmit}
        >
          <span>저장</span>
        </Button>

        <Button
          style={{ marginRight: "24px" }}
          width={"120px"}
          height={"42px"}
          type={"outlined"}
          onClick={() => {
            navigate("/ad/image_list");
          }}
        >
          <span>목록</span>
        </Button>
      </BottomBtnWrapper>
    </ContentContainer>
  );
}

export default ImageForm;
