import "moment/locale/ko";
const moment = require("moment");

const getDayWithWeek = (time) => {
  return moment(time).format("YYYY.MM.DD dddd");
};

const getDayFormatHypen = (time) => {
  return moment(time).format("yyyy-MM-DD");
};

const getDayCalendarFormat = (time) => {
  return moment(time).format("yyyy.MM.DD");
};

const getFullDayFormatHypen = (time) => {
  return moment(time).format("yyyy-MM-DD hh:mm:ss");
};

const getDayFormatYearMonth = (time) => {
  return moment(time).format("yyyy . MM");
};

export {
  getDayWithWeek,
  getDayCalendarFormat,
  getDayFormatHypen,
  getFullDayFormatHypen,
  getDayFormatYearMonth,
};
