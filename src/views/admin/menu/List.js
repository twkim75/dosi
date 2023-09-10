import axios from "axios";

import { Select } from "views/admin/components/Select";
import Button from "views/admin/components/CustomButton";
import MaterialTable from "@material-table/core";
import { makeStyles, Paper } from "@material-ui/core";
import Pagination from "views/admin/components/Pagination";

import { Toast } from "views/admin/components/Toast";
import { useState, useMemo, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

import {
  listState,
  listSearchParamState,
  listPageState,
} from "recoil/back/requestList";
import { getDayFormatHypen } from "utils/timeFormat";

function List() {
  const navigate = useNavigate();

  const getList = useRecoilValue(listState);
  const getSearchParam = useRecoilValue(listSearchParamState);
  const getPage = useRecoilValue(listPageState);

  const [pageSize, setPageSize] = useState(10);

  const pageSizeList = [
    { label: "10건", value: 10 },
    { label: "50건", value: 50 },
    { label: "100건", value: 100 },
  ];

  const useStyles = makeStyles({
    table: {
      "& tbody tr:last-child td": {
        border: 0,
      },
    },
  });

  const exportExcel = async () => {
    const accessToken = localStorage.getItem("accessToken");

    let params = { ...getSearchParam };
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/v1/contract/excel`,
      responseType: "blob", // 가장 중요함
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      params,
    }).then((response) => {
      if (response.status === 200) {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: response.headers["content-type"] })
        );

        window.open(url);
      } else {
        Toast.error("엑셀 다운로드 하는데 실패하였습니다.");
      }
    });
  };

  // pageSize 변경시 이벤트
  const changePageSize = (size) => {
    let params = { ...getSearchParam };
    params["pageSize"] = size;

    navigate({
      pathname: "/contract_list",
      search: `?${createSearchParams(params)}`,
    });
  };

  // 페이지이동
  const movePage = (page) => {
    let params = { ...getSearchParam };
    params["pageNum"] = page;
    navigate({
      pathname: "/contract_list",
      search: `?${createSearchParams(params)}`,
    });
  };

  const columns = useMemo(
    () => [
      {
        field: "no",
        title: "NO",
        sorting: false,
        width: "71px",
        headerStyle: {
          backgroundColor: "#FAFAFC",
        },
      },
      {
        field: "regDate",
        title: "등록일시",
        sorting: false,
        width: "175px",
        headerStyle: {
          backgroundColor: "#FAFAFC",
        },
      },

      {
        field: "name",
        title: "이름",
        sorting: false,
        width: "130px",
        headerStyle: {
          backgroundColor: "#FAFAFC",
        },
      },
      {
        field: "phone",
        title: "휴대폰번호",
        sorting: false,
        width: "135px",
        headerStyle: {
          backgroundColor: "#FAFAFC",
        },
      },
      {
        field: "hopeAddr",
        title: "희망지역",
        sorting: false,
        width: "130px",
        headerStyle: {
          backgroundColor: "#FAFAFC",
        },
      },
      {
        field: "details",
        title: "상세보기",
        sorting: false,
        width: "101px",
        headerStyle: {
          backgroundColor: "#FAFAFC",
        },
        render: (rowData) => (
          <Button
            className="show_details_btn"
            name="보기"
            type="outlined"
            size="small"
            btnClickEvent={() => {
              navigate({
                pathname: `/contract_detail/${rowData.idx}`,
              });
            }}
          ></Button>
        ),
      },
    ],
    []
  );

  return (
    <>
      <div className="list_wrapper">
        <div className="top_btn_wrapper">
          <Button
            className="excel_btn"
            name="EXCEL"
            size="small"
            btnClickEvent={() => {
              exportExcel();
            }}
          ></Button>
          <Select
            options={pageSizeList}
            optionClickEvent={(e, item) => {
              setPageSize();
              changePageSize(item.value);
            }}
          ></Select>
        </div>
        <div className="list">
          <div className="material__tablewrapper">
            <MaterialTable
              columns={columns}
              data={getList}
              components={{
                Container: (props) => (
                  <Paper
                    {...props}
                    elevation={0}
                    className={useStyles().table}
                  />
                ),
              }}
              options={{
                toolbar: false,
                search: false,
                paging: false,
                draggable: false,
              }}
              localization={{
                body: {
                  emptyDataSourceMessage: (
                    <span>조건에 일치하는 데이터가 없습니다.</span>
                  ),
                },
              }}
            ></MaterialTable>
          </div>
          {getPage.total !== 0 && (
            <Pagination
              page={getPage.pageNum}
              pageSize={getPage.pageSize}
              blockSize={5}
              totalCount={getPage.total}
              movePageEvent={movePage}
            ></Pagination>
          )}
        </div>
      </div>
    </>
  );
}

export default List;
