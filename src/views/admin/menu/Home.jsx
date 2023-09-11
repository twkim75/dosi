import "styles/request_list.scss";

import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSearchParams } from "react-router-dom";

import SearchBox from "./SearchBox";
import List from "./List";
import { Toast } from "views/admin/components/Toast";

import { getDayFormatHypen } from "utils/timeFormat";

import { loadingState } from "recoil/back/loading";

import {
  listState,
  listSearchParamState,
  listPageState,
} from "recoil/back/requestList";
import { getRequestList } from "api/admin";

function Home() {
  const [searchParams] = useSearchParams();
  const setList = useSetRecoilState(listState);
  const setListSearchParam = useSetRecoilState(listSearchParamState);
  const setListPage = useSetRecoilState(listPageState);
  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let params = {};
      if (searchParams.size === 0) {
        params = {
          dateStart: getDayFormatHypen(new Date()),
          dateEnd: getDayFormatHypen(new Date()),
          pageNum: 1,
          pageSize: 10,
        };
      } else {
        const queryDateStart = searchParams.get("dateStart");
        const queryDateEnd = searchParams.get("dateEnd");
        const queryTransferType = parseInt(searchParams.get("transferType"));
        const querySearchType = parseInt(searchParams.get("searchType"));
        const querySearchWord = searchParams.get("searchWord") || "";
        const queryPageNum = parseInt(searchParams.get("pageNum"));
        const queryPageSize = parseInt(searchParams.get("pageSize"));
        params = {
          pageNum: queryPageNum,
          pageSize: queryPageSize,
        };
        // 시작일시
        if (queryDateStart?.length > 0 && !!queryDateStart) {
          params["dateStart"] = queryDateStart;
        }
        // 종료일시
        if (queryDateEnd?.length > 0 && !!queryDateEnd) {
          params["dateEnd"] = queryDateEnd;
        }
        // 계약상태
        if (queryTransferType > -1) {
          params["transferType"] = queryTransferType;
        }
        // 검색조건 & 검색어
        if (querySearchWord.length > 0 && !!querySearchWord) {
          params["searchType"] = querySearchType;
          params["searchWord"] = querySearchWord;
        }
      }

      const { message, status, result } = await getRequestList(params);
      console.log(status);
      console.log(result);
      // 여기서 하다가 멈춤

      if (status !== 0) {
        return Toast.error(message);
      }

      const { list, pageNum, pageSize, total } = result;

      const resultList = list.map((item, index) => ({
        no: total + (1 - pageNum) * pageSize - index,
        id: item.idx,
        ...item,
      }));

      setListPage({ pageNum, pageSize, total });
      setListSearchParam(params);
      setList(resultList);
      setLoading(false);
    };
    fetchData();
  });

  return (
    <>
      <div className="apply_list_wrapper">
        <span className="title body--medium text-dark-1">
          가맹상담 신청 리스트
        </span>
        <SearchBox></SearchBox>
        <List></List>
      </div>
    </>
  );
}
export default Home;
