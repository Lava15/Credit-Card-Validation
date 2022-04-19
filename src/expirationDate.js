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
    return true;
  }
  if (mmyy.match(REGEX_YEAR)) {
    next.focus();
    return true;
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
      ? (expMonthErr.innerText = "Только 2 номера")
      : //
      expMonthTop.value === ""
      ? (expMonthErr.innerText = "Укажите месяц")
      : //
        (expMonth.value = expMonthTop.value) && (expMonthErr.innerText = "");
  });

  expMonth.addEventListener("input", (e) => {
    // 1
    !expMonthTop === expMonth
      ? expMonth.setAttribute("value", e.target.value)
      : // 2
      expMonth.value.length === 2 &&
        true &&
        (expMonthTop.value = expMonth.value)
      ? move(expYear, expMonth.value)
      : // 3
        (expMonthTop.value = expMonth.value) && (expMonthErr.innerText = "");
  });
};

// VALIDATION EXPIRATION DATE YEAR
export const checkCardYear = () => {
  expYearTop.addEventListener("input", (e) => {
    // 1
    expYearTop === expYear
      ? expYearTop.setAttribute("value", e.target.value)
      : // 2
      expYearTop.value.length === 4 &&
        true &&
        (expYear.value = expYearTop.value)
      ? move(cvvCardTop, expYearTop.value)
      : //
      expYearTop.value.length > 4
      ? (expYearErr.innerText = "Только 4 цифры")
      : //
      expYearTop.value === ""
      ? (expYearErr.innerText = "Укажите год")
      : // 3
        (expYear.value = expYearTop.value) && (expYearErr.innerText = "");
  });

  expYear.addEventListener("input", (e) => {
    // 1
    !expYearTop === expYear
      ? expYear.setAttribute("value", e.target.value)
      : // 2
      expYear.value.length === 4 && true && (expYearTop.value = expYear.value)
      ? move(cvvCard, expYear.value)
      : // 3
        (expYearTop.value = expYear.value);
  });

  console.log("Validating Expiration Year");
};
