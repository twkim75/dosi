import { popupCreateAPI } from "api/admin";
import { useCallback, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
} from "styles/sc/admin";
import Button from "views/admin/components/Button";
import Editor from "views/admin/components/Editor";
import { Toast } from "views/admin/components/Toast";
import { Radio, RadioGroup, TextField } from "views/admin/components/input";

function PopupWrite() {
  const location = useLocation();
  const navigate = useNavigate();
  let { id } = useParams();
  const setLoading = useSetRecoilState(loadingState);
  const [writeData, setWriteData] = useState({
    title: "",
    content: "",
    display: "N",
  });

  const onChangeData = (e, setData) => {
    const { name, value } = e.currentTarget;
    setData((preVal) => ({ ...preVal, [name]: value }));
  };

  const onChangeRadioData = (value, setData) => {
    // const { name, value } = e.currentTarget;
    setData((preVal) => ({ ...preVal, display: value }));
  };

  const handleSubmit = useCallback(async () => {
    const { title, content } = writeData;
    if (!title || title.length === 0) {
      Toast.info("제목은 필수 입력값입니다.");
      return document.querySelector("input[name=title]").focus();
    }
    if (!content || content.length === 0) {
      return Toast.info("내용은 필수 입력값입니다.");
    }
    setLoading(true);
    const { data, status } = await popupCreateAPI(writeData);
    if (status === 200) {
      navigate(`/ad/popup_list`);
      Toast.success("등록되었습니다.");
    } else {
      Toast.error("데이터 처리중 오류가 발생하였습니다.");
    }
    setLoading(false);
  }, [writeData]);

  // const pageTitle = useMemo(() => {
  //   return !id ? "팝업 등록하기" : "팝업 수정하기";
  // }, [id]);
  return (
    <ContentContainer>
      <PageTitle>팝업 등록하기</PageTitle>
      <FormBox>
        <FormBoxItem>
          <FormBoxItemTitle>제목</FormBoxItemTitle>
          <FormBoxItemValue>
            <TextField
              placeholder="제목"
              height="40px"
              width="250px"
              name="title"
              value={writeData.title}
              onChange={(e) => {
                onChangeData(e, setWriteData);
              }}
            ></TextField>
          </FormBoxItemValue>
        </FormBoxItem>
        <FormBoxItem style={{ height: "500px" }}>
          <FormBoxItemTitle>내용</FormBoxItemTitle>
          <FormBoxItemValue>
            <Editor
              content={writeData.content}
              setContents={(contents) => {
                setWriteData((preVal) => ({
                  ...preVal,
                  content: contents,
                }));
              }}
            ></Editor>
          </FormBoxItemValue>
        </FormBoxItem>
        <FormBoxItem style={{ minHeight: "60px" }}>
          <FormBoxItemTitle>노출여부</FormBoxItemTitle>
          <FormBoxItemValue style={{ height: "60px" }}>
            <RadioGroup
              style={{ width: "200px" }}
              value={writeData.display}
              onChange={(e) => {
                onChangeRadioData(e, setWriteData);
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
              navigate("/ad/popup_list");
            }}
          >
            <span>목록</span>
          </Button>
        </BottomBtnWrapper>
      </FormBox>
    </ContentContainer>
  );
}

export default PopupWrite;
