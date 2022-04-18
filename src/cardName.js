// FULLNAME VALIDATION
const REGEX_FULLNAME = /^([a-zA-Z]{3,})\s([a-zA-Z]{3,})$/;
export const checkCardName = () => {
  let fullNameTop = document.querySelector("#full-name-top");
  let fullName = document.querySelector("#full-name");
  let cardNameErr = document.querySelector("#cname-error");

  //
  let expMonthTop = document.querySelector("#exp-month-top");
  let expMonth = document.querySelector("#exp-month");

  const move = (next) => {
    if (true) {
      fullName.value = fullNameTop.value;
      next.focus();
    }
  };

  fullNameTop.addEventListener("input", (e) => {
    // 1
    fullNameTop === fullName
      ? fullName.setAttribute("value", e.target.value)
      : // 2
      fullNameTop.value === ""
      ? (cardNameErr.innerText = "Credit card fullname is required") &&
        (fullName.value = "")
      : // 3
      fullNameTop.value.length === 20 && true
      ? move(expMonthTop)
      : // 4
        (fullName.value = fullNameTop.value) && (cardNameErr.innerText = "");
  });

  fullName.addEventListener("input", (e) => {
    // 1
    !fullNameTop === fullNameTop
      ? fullNameTop.setAttribute("value", e.target.value)
      : // 2
      fullName.value === ""
      ? (cardNameErr.innerText = "Credit card fullname is required") &&
        (fullNameTop.value = "")
      : // 3
      fullName.value.length === 20 && true
      ? move(expMonth)
      : // 4
        (fullNameTop.value = fullName.value) && (cardNameErr.innerText = "");

    fullNameTop.setAttribute("value", e.target.value);
  });
};
