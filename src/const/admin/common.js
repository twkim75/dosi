// 메뉴
const navMenu = [
  {
    id: "market",
    name: "시세관리",
    children: [
      {
        id: "gold_reg",
        name: "금 시세 등록",
      },
      {
        id: "gold_list",
        name: "금 시세리스트",
      },
      {
        id: "dia_reg",
        name: "다이아몬드 시세",
      },
      {
        id: "pure_gold_reg",
        name: "순금 제품별 시세",
      },
      {
        id: "silver_reg",
        name: "Sliver 은제품 시세",
      },
    ],
  },
  {
    id: "product",
    name: "제품관리",
    children: [
      {
        id: "category_reg",
        name: "카테고리 등록하기",
      },
      {
        id: "category_list",
        name: "카테고리 리스트",
      },
      {
        id: "product_reg",
        name: "제품 등록하기",
      },
      {
        id: "product_list",
        name: "제품 리스트",
      },
    ],
  },
  {
    id: "order",
    name: "주문관리",
    children: [
      {
        id: "order_list",
        name: "주문내역",
      },
      {
        id: "payment_list",
        name: "결제내역",
      },
    ],
  },
  {
    id: "cs",
    name: "고객센터관리",
    children: [
      {
        id: "notice_list",
        name: "공지사항",
      },
      {
        id: "question_list",
        name: "문의게시판",
      },
    ],
  },
  {
    id: "popup",
    name: "팝업관리",
    children: [
      {
        id: "popup_reg",
        name: "팝업등록하기",
      },
      {
        id: "popup_list",
        name: "팝업리스트",
      },
    ],
  },
  {
    id: "logistic",
    name: "배송 / 교환 및 반품관리",
  },
  {
    id: "youtube",
    name: "유튜브관리",
  },
  {
    id: "banner",
    name: "배너관리",
    children: [
      {
        id: "banner_reg",
        name: "배너 등록하기",
      },
      {
        id: "banner_list",
        name: "배너리스트",
      },
    ],
  },
];
const getMenuTitle = (id) => {
  for (let i = 0; i < navMenu.length; i++) {
    const menu = navMenu[i];
    if (!menu.children) {
      if (menu.id === id) return menu.name;
      else continue;
    }
    const findIndex = menu.children.findIndex(
      (childItem) => childItem.id === id
    );
    if (findIndex > -1) {
      return menu.children[findIndex].name;
    }
  }
  return "";
};

// 공통 페이지 사이즈
const pageSizeOptions = [
  { name: 10, value: 10 },
  { name: 50, value: 50 },
  { name: 100, value: 100 },
];

export { navMenu, getMenuTitle, pageSizeOptions };
