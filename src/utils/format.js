const addComma = (num) => {
  if (!num) return 0;
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
};

const isOnlyNumber = (data) => {
  const regexp = /^[0-9]+$/;
  return regexp.test(data);
};

// 이메일 유효성 검사
const isEmail = (email) => {
  const reg =
    // eslint-disable-next-line
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return reg.test(email);
};

const formatPhoneNumber = (input) => {
  const cleanInput = input.replaceAll(/[^0-9]/g, '');
  let result = '';
  const length = cleanInput.length;
  if (length === 8) {
    result = cleanInput.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else if (cleanInput.startsWith('02') && (length === 9 || length === 10)) {
    result = cleanInput.replace(/(\d{2})(\d{3,4})(\d{4})/, '$1-$2-$3');
  } else if (!cleanInput.startsWith('02') && (length === 10 || length === 11)) {
    result = cleanInput.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
  } else {
    result = undefined;
  }
  return result;
};

function dateFormat(date) {
  date = new Date(date);
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  return date.getFullYear() + '-' + month + '-' + day;
}

function dateFormatV2(date) {
  if (!date) return '';
  date = new Date(date);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  minute = minute >= 10 ? minute : '0' + minute;
  second = second >= 10 ? second : '0' + second;

  return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

/**
 * 가격 표시 3자리 마다 콤마 추가
 * @param {num} string or Number
 * @returns string or undefined
 */
function priceFormat(num) {
  if (!num) return;
  const newFormatData = typeof num === 'number' ? num.toString() : num;
  return newFormatData.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/gi, ',');
}

/**
 * 무게 표시 1000g 이상일 경우 kg로 표시
 * @param {num} string or Number
 * @returns {string}
 */
export const weightFormat = (num) => {
  if (!num) return '0g';
  if (num < 1000) return `${num}g`;

  return `${num / 1000}kg`;
};

/**
 * 전화번호 유효성 검사
 * @param {num} string
 * @returns {boolean}
 */
export const phronCheck = (num) => {
  const reg = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
  return reg.test(num);
};

export { addComma, isEmail, isOnlyNumber, formatPhoneNumber, dateFormat, dateFormatV2, priceFormat };
