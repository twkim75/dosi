import { popupDisplayChangeAPI, popupListAPI } from "api/admin";
import { useCallback, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { loadingState } from "recoil/back/loading";
import { ContentContainer, PageTitle } from "styles/sc/admin";
import { Toast } from "views/admin/components/Toast";
import { PopupListTable } from "views/admin/components/table";

function PopupList() {
  const [list, setList] = useState([]);
  const setLoading = useSetRecoilState(loadingState);

  const changeDisplay = async (row) => {
    setLoading(true);
    const { status } = await popupDisplayChangeAPI({
      display: row.display === "N" ? "Y" : "N",
      idx: row.idx,
    });
    if (status === 200) {
      Toast.success("수정하였습니다.");
      const newList = [...list];
      const findIndex = newList.findIndex((item) => item.idx === row.idx);
      if (findIndex > -1) {
        newList[findIndex].display = row.display === "N" ? "Y" : "N";
        setList(newList);
      }
    } else {
      Toast.error("데이터 처리중 오류가 발생하였습니다.");
    }
    setLoading(false);
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    const { data, status } = await popupListAPI();

    if (status === 200) {
      const { result } = data;
      setList(result.list);
    } else {
      Toast.error("데이터를 가져오는데 실패하였습니다.");
    }
    setLoading(false);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContentContainer>
      <PageTitle>팝업 리스트</PageTitle>
      <PopupListTable
        data={list}
        changeDisplay={changeDisplay}
      ></PopupListTable>
    </ContentContainer>
  );
}
export default PopupList;
