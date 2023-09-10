import { atom, selector } from "recoil";

// 리스트
const listState = atom({
  key: "contractList",
  default: [],
});

// 리스트 검색 조건
const listSearchParamState = atom({
  key: "contractListSearchParam",
  default: {},
});

// 리스트 페이지 정보
const listPageState = atom({
  key: "contractListPage",
  default: {
    pageNum: 1,
    pageSize: 10,
    total: 0,
  },
});

export { listState, listSearchParamState, listPageState };
