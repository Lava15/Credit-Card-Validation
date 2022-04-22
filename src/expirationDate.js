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

const move = (next, mmyy) => {
  if (mmyy.match(REGEX_MONTH)) {
    next.focus();
    enableBtn();
    expMonthErr.innerText = "";
  }

  if (!mmyy.match(REGEX_MONTH)) {
    disableBtn();
  }
  if (mmyy >= 22 && mmyy <= 30) {
    expYearErr.innerText = "";
    enableBtn();
    next.focus();
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
      ? (expMonthTop.value =
          expMonthTop.value.slice(1) &&
          (expMonthErr.innerText = "Неверный формат") &&
          (expMonth.value = ""))
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
      expYearTop.value.length === 2
      ? (expYear.value = 20 + expYearTop.value) &&
        move(cvvCardTop, expYearTop.value)
      : //
      expYearTop.value.length > 2
      ? (expYearTop.value = expYearTop.value.slice(0, 2)) &&
        (expYearErr.innerText = "") &&
        disableBtn()
      : //
      expYearTop.value !== expYear.value
      ? (expYearErr.innerText = "Неверный формат")
      : //
      expYearTop.value.length < 1
      ? (expYearErr.innerText = "Укажите год") && disableBtn()
      : //
        (expYear.value = expYearTop.value) && (expYearErr.innerText = "");
  });

  expYear.addEventListener("input", (e) => {
    //
    !expYearTop === expYear
      ? expYear.setAttribute("value", e.target.value)
      : //
      expYear.value.length === 4 && (expYearTop.value = expYear.value.slice(-2))
      ? move(cvvCard, expYear.value)
      : //
        (expYearTop.value = expYear.value);
  });
};
