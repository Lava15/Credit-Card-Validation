// VALIDATION EXPIRATION DATE MONTH

export const checkCardMonth = () => {
  let expMonthTop = document.querySelector("#exp-month-top");
  let expMonth = document.querySelector("#exp-month");

  expMonthTop.addEventListener("input", (e) => {
    expMonthTop === expMonth
      ? expMonthTop.setAttribute("value", e.target.value)
      : (expMonth.value = expMonthTop.value);
  });

  expMonth.addEventListener("input", (e) => {
    !expMonthTop === expMonth
      ? expMonth.setAttribute("value", e.target.value)
      : (expMonthTop.value = expMonth.value);
  });
};

// VALIDATION EXPIRATION DATE YEAR
export const checkCardYear = () => {
  let expYearTop = document.querySelector("#exp-year-top");
  let expYear = document.querySelector("#exp-year");

  expYearTop.addEventListener("input", (e) => {
    expYearTop === expYear
      ? expYearTop.setAttribute("value", e.target.value)
      : (expYear.value = expYearTop.value);
  });

  expYear.addEventListener("input", (e) => {
    !expYearTop === expYear
      ? expYear.setAttribute("value", e.target.value)
      : (expYearTop.value = expYear.value);
  });

  console.log("Validating Expiration Year");
};
