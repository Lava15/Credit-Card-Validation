import { disableBtn, enableBtn } from "./disableBtn.js";

// VALIDATION EXPIRATION DATE MONTH

const expMonthTop = document.querySelector("#exp-month-top");
const expMonth = document.querySelector("#exp-month");
const expMonthErr = document.querySelector("#exp-month-error");

const expYearTop = document.querySelector("#exp-year-top");
const expYear = document.querySelector("#exp-year");
const expYearErr = document.querySelector("#exp-year-error");

const cvvCardTop = document.querySelector("#cvv-card-top");
const cvvCard = document.querySelector("#cvv-card");

const REGEX_MONTH = /^0[1-9]|1[012]$/;
const REGEX_YEAR = /20(?:2\d|30)/;

const move = (next, mmyy) => {
  if (mmyy.match(REGEX_MONTH)) {
    next.focus();
    enableBtn();
    expMonthErr.innerText = "";
  } else if (mmyy.match(REGEX_YEAR)) {
    next.focus();
    enableBtn();
    expYearErr.innerText = "";
  }
};
export const checkCardMonth = () => {
  expMonthTop.addEventListener("input", (e) => {
    //
    expMonthTop === expMonth
      ? expMonthTop.setAttribute("value", e.target.value)
      : //
      expMonthTop.value.length === 2 && (expMonth.value = expMonthTop.value)
      ? move(expYearTop, expMonthTop.value)
      : //
      expMonthTop.value.length > 2
      ? (expMonthErr.innerText = "Максимум 2 цифры") &&
        (expMonth.value = "") &&
        disableBtn()
      : //
      expMonthTop.value === ""
      ? (expMonthErr.innerText = "Укажите месяц") &&
        (expMonth.value = expMonthTop.value)
      : //
        (expMonth.value = expMonthTop.value) && (expMonthErr.innerText = "");
  });

  expMonth.addEventListener("input", (e) => {
    //
    !expMonthTop === expMonth
      ? expMonth.setAttribute("value", e.target.value)
      : //
      expMonth.value.length === 2 && (expMonthTop.value = expMonth.value)
      ? move(expYear, expMonth.value)
      : //
      expMonth.value.length > 2
      ? (expMonthErr.innerText = "Максимум 2 цифры")
      : //
      expMonth.value === ""
      ? (expMonthErr.innerText = "Укажите месяц")
      : //
        (expMonthTop.value = expMonth.value) && (expMonthErr.innerText = "");
  });
};

// VALIDATION EXPIRATION DATE YEAR
export const checkCardYear = () => {
  expYearTop.addEventListener("input", (e) => {
    //
    expYearTop === expYear
      ? expYearTop.setAttribute("value", e.target.value)
      : //
      expYearTop.value.length === 4 && (expYear.value = expYearTop.value)
      ? move(cvvCardTop, expYearTop.value)
      : //
      expYearTop.value.length > 4
      ? (expYearErr.innerText = "Только 4 цифры") && disableBtn()
      : //
      expYearTop.value.length < 4
      ? disableBtn()
      : //
      expYearTop.value === ""
      ? (expYearErr.innerText = "Укажите год") && (expYear.value = "")
      : //
        (expYear.value = expYearTop.value) && (expYearErr.innerText = "");
  });

  expYear.addEventListener("input", (e) => {
    //
    !expYearTop === expYear
      ? expYear.setAttribute("value", e.target.value)
      : //
      expYear.value.length === 4 && (expYearTop.value = expYear.value)
      ? move(cvvCard, expYear.value)
      : //
        (expYearTop.value = expYear.value);
  });
};
