// 메뉴
const navMenu = [
  {
    id: "apply_list",
    name: "가맹상담 신청 리스트",
  },
  // {
  //   id: "popup",
  //   name: "팝업관리",
  //   children: [
  //     {
  //       id: "popup_reg",
  //       name: "팝업등록하기",
  //     },
  //     {
  //       id: "popup_list",
  //       name: "팝업리스트",
  //     },
  //   ],
  // },
  // {
  //   id: "youtube",
  //   name: "유튜브관리",
  // },
  // {
  //   id: "banner",
  //   name: "배너관리",
  //   children: [
  //     {
  //       id: "banner_reg",
  //       name: "배너 등록하기",
  //     },
  //     {
  //       id: "banner_list",
  //       name: "배너리스트",
  //     },
  //   ],
  // },
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
