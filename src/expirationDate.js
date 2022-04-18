// VALIDATION EXPIRATION DATE MONTH

const move = (next) => {
  if (true) {
    next.focus();
  }
};

let expMonthTop = document.querySelector("#exp-month-top");
let expMonth = document.querySelector("#exp-month");

let expYearTop = document.querySelector("#exp-year-top");
let expYear = document.querySelector("#exp-year");

let cvvCardTop = document.querySelector("#cvv-card-top");
let cvvCard = document.querySelector("#cvv-card");

export const checkCardMonth = () => {
  expMonthTop.addEventListener("input", (e) => {
    // 1
    expMonthTop === expMonth
      ? expMonthTop.setAttribute("value", e.target.value)
      : // 2
      expMonthTop.value.length === 2 &&
        true &&
        (expMonth.value = expMonthTop.value)
      ? move(expYearTop)
      : // 3
        (expMonth.value = expMonthTop.value);
  });

  expMonth.addEventListener("input", (e) => {
    // 1
    !expMonthTop === expMonth
      ? expMonth.setAttribute("value", e.target.value)
      : // 2
      expMonth.value.length === 2 &&
        true &&
        (expMonthTop.value = expMonth.value)
      ? move(expYear)
      : // 3
        (expMonthTop.value = expMonth.value);
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
      ? move(cvvCardTop)
      : // 3
        (expYear.value = expYearTop.value);
  });

  expYear.addEventListener("input", (e) => {
    // 1
    !expYearTop === expYear
      ? expYear.setAttribute("value", e.target.value)
      : // 2
      expYear.value.length === 4 && true && (expYearTop.value = expYear.value)
      ? move(cvvCard)
      : // 3
        (expYearTop.value = expYear.value);
  });

  console.log("Validating Expiration Year");
};
