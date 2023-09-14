import { imageDisplayChangeAPI, imageListAPI } from "api/admin";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loadingState } from "recoil/back/loading";
import { ContentContainer, PageTitle } from "styles/sc/admin";
import Pagination from "views/admin/components/Pagination";
import { Toast } from "views/admin/components/Toast";
import { ImageListTable } from "views/admin/components/table";

function ImageList() {
  const location = useLocation();
  const navigate = useNavigate();
  const setLoading = useSetRecoilState(loadingState);
  const [imageList, setImageList] = useState([]);
  const [pageOption, setPageOption] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
  });

  const changeDisplay = async (row) => {
    setLoading(true);
    const { status } = await imageDisplayChangeAPI({
      display: row.display === "N" ? "Y" : "N",
      idx: row.idx,
    });
    if (status === 200) {
      Toast.success("수정하였습니다.");
      const newList = [...imageList];
      const findIndex = newList.findIndex((item) => item.idx === row.idx);
      if (findIndex > -1) {
        newList[findIndex].display = row.display === "N" ? "Y" : "N";
        setImageList(newList);
      }
    } else {
      Toast.error("데이터 처리중 오류가 발생하였습니다.");
    }
    setLoading(false);
  };

  const getImageList = useCallback(async (pageNum) => {
    setLoading(true);

    const { status, data } = await imageListAPI(pageNum);
    if (status !== 200) {
      Toast.error("데이터를 불러오는데 실패하였습니다.");
    } else {
      const { list, total, pageSize, pageNum } = data.result;
      setImageList(list);
      setPageOption({ page: pageNum, pageSize, total });
    }
    setLoading(false);
  }, []);
  const handlePage = useCallback(
    (page) => {
      getImageList(page);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageOption]
  );

  useEffect(() => {
    getImageList(1);
  }, []);
  return (
    <ContentContainer>
      <PageTitle>이미지 리스트</PageTitle>
      <ImageListTable
        data={imageList}
        changeDisplay={changeDisplay}
      ></ImageListTable>
      {pageOption.total > 0 && (
        <Pagination
          page={pageOption.page}
          pageSize={pageOption.pageSize}
          blockSize={2}
          totalCount={pageOption.total}
          movePageEvent={handlePage}
        ></Pagination>
      )}
    </ContentContainer>
  );
}

export default ImageList;
