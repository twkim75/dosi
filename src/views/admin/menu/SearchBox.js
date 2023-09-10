import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import Button from "views/admin/components/CustomButton";
import { TextField, RadioGroup, Radio } from "views/admin/components/input";
import { Select } from "views/admin/components/Select";
import { CustomDatePicker as DatePicker } from "views/admin/components/DatePicker";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";

import { listSearchParamState } from "recoil/back/requestList";
import { getDayFormatHypen } from "utils/timeFormat";

function SearchBox() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const listSearchParam = useRecoilValue(listSearchParamState);

  // 등록일시
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  // 계약상태 (-1:전체, 0: 링크전송, 1:제출, 2:반려, 3:승인)
  // 검색조건 (0: 이름, 1:휴대폰번호,2:이메일,3:등록자)
  const [searchType, setSearchType] = useState(0);
  // 검색어
  const [searchWord, setSearchWord] = useState("");

  const search = () => {
    const params = {
      pageNum: 1,
      pageSize: searchParams.get("pageSize")
        ? parseInt(searchParams.get("pageSize"))
        : 10,
    };
    // 시작일시
    if (!!dateStart) {
      params["dateStart"] = getDayFormatHypen(dateStart);
    }
    // 종료일시
    if (!!dateEnd) {
      params["dateEnd"] = getDayFormatHypen(dateEnd);
    }
    // 계약상태
    // 검색조건 & 검색어
    if (!!searchWord) {
      params["searchType"] = searchType;
      params["searchWord"] = searchWord;
    }

    navigate({
      pathname: "/ad/home",
      search: `?${createSearchParams(params)}`,
    });
  };

  useEffect(() => {
    const { dateStart, dateEnd, searchType, searchWord } = listSearchParam;
    setDateStart(dateStart ? new Date(dateStart) : null);
    setDateEnd(dateEnd ? new Date(dateEnd) : null);
    if (!!searchWord) {
      setSearchType(searchType || 1);
      setSearchWord(searchWord || "");
    }
  }, [listSearchParam]);

  return (
    <>
      {/* 검색 박스 */}
      <div className="search_box_wrapper">
        <table className="search_box">
          <tbody>
            <tr>
              <td>
                <div className="__name body--small text-dark-1">등록일시</div>
                <div className="__search_item date">
                  <DatePicker
                    startDate={dateStart}
                    setStartDate={setDateStart}
                    endDate={dateEnd}
                    setEndDate={setDateEnd}
                  ></DatePicker>
                  <Button
                    className="all_btn"
                    name="전체"
                    type="primary"
                    size="small"
                    btnClickEvent={() => {
                      setDateStart(null);
                      setDateEnd(null);
                    }}
                  ></Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="__name body--small text-dark-1">검색조건</div>
                <div className="__search_item search_type">
                  <RadioGroup
                    value={searchType.toString()}
                    onChange={(value) => {
                      setSearchType(parseInt(value));
                    }}
                  >
                    <Radio name="searchType" value="0" first="true">
                      전체
                    </Radio>
                    <Radio name="searchType" value="1">
                      이름
                    </Radio>
                    <Radio name="searchType" value="2">
                      휴대폰 번호
                    </Radio>
                  </RadioGroup>
                </div>
              </td>
              <td>
                <div className="__name body--small text-dark-1">검색어</div>
                <div
                  className="__search_item search_word"
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      search();
                    }
                  }}
                >
                  <TextField
                    type="text"
                    placeholder="검색어를 입력해주세요."
                    value={searchWord}
                    onChange={(e) => {
                      setSearchWord(e.target.value);
                    }}
                  ></TextField>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Button
          className="search_btn"
          name="검색"
          type="primary"
          size="small"
          btnClickEvent={() => {
            search();
          }}
        ></Button>
      </div>
    </>
  );
}

export default SearchBox;
