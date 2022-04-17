// VALIDATION 16 DIGITS

export const checkCardNumbers = () => {
  let inputNumber = document.querySelector("#digits");
  let cardNumber = document.querySelector("#top-input");
  let cardNumberErr = document.querySelector("#digits-error");

  inputNumber.addEventListener("input", (e) => {
    // 1
    inputNumber === cardNumber
      ? cardNumber.setAttribute("value", e.target.value)
      : // 2
      inputNumber.value === ""
      ? (cardNumberErr.innerText = "Credit card number is required") &&
        (cardNumber.value = "")
      : // 3
        (cardNumber.value = inputNumber.value) &&
        (cardNumberErr.innerText = "");
  });

  cardNumber.addEventListener("input", (e) => {
    // 1
    !inputNumber === cardNumber
      ? inputNumber.setAttribute("value", e.target.value)
      : // 2
      cardNumber.value === ""
      ? (cardNumberErr.innerText = "Credit card number is required") &&
        (inputNumber.value = "")
      : // 3
        (inputNumber.value = cardNumber.value) &&
        (cardNumberErr.innerText = "");
  });
};
