// FULLNAME VALIDATION

export const checkCardName = () => {
  let fullNameTop = document.querySelector("#full-name-top");
  let fullName = document.querySelector("#full-name");
  let cardNameErr = document.querySelector("#cname-error");

  fullNameTop.addEventListener("input", (e) => {
    // 1
    fullNameTop === fullName
      ? fullName.setAttribute("value", e.target.value)
      : // 2
      fullNameTop.value === ""
      ? (cardNameErr.innerText = "Credit card fullname is required") &&
        (fullName.value = "")
      : // 3
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
        (fullNameTop.value = fullName.value) && (cardNameErr.innerText = "");

    fullNameTop.setAttribute("value", e.target.value);
  });
};
