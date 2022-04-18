// VALIDATION 16 DIGITS
let REGEX_NUMBERS = /[0-9]/g;

export const checkCardNumbers = () => {
  let inputNumber = document.querySelector("#digits");
  let cardNumber = document.querySelector("#top-input");
  let cardNumberErr = document.querySelector("#digits-error");

  //
  let fullNameTop = document.querySelector("#full-name-top");
  let fullName = document.querySelector("#full-name");

  const detectCard = (digits) => {
    let REGEX_CARDS = ["^4", "^5[1-5]", "^8[6]", "9860"];
    if (digits.match(REGEX_CARDS[0]) !== null) {
      console.log("Visa card");
    }
    if (digits.match(REGEX_CARDS[1])) {
      console.log("Mastercard");
    }
    if (digits.match(REGEX_CARDS[2])) {
      console.log("Uzcard");
    }
    if (digits.match(REGEX_CARDS[3])) {
      console.log("Humo");
    }
  };

  const move = (next) => {
    if (true) {
      inputNumber.value = cardNumber.value;
      next.focus();
    }
  };

  cardNumber.addEventListener("input", (e) => {
    // 1
    !inputNumber === cardNumber
      ? inputNumber.setAttribute("value", e.target.value)
      : // 2
      cardNumber.value === ""
      ? (cardNumberErr.innerText = "Credit card number is required") &&
        (inputNumber.value = "")
      : // 3
      cardNumber.value.length === 16 && true
      ? move(fullNameTop)
      : // 4
      cardNumber.value.length === 4
      ? detectCard(cardNumber.value)
      : // 3
        (inputNumber.value = cardNumber.value) &&
        (cardNumberErr.innerText = "");
  });

  inputNumber.addEventListener("input", (e) => {
    // 1
    inputNumber === cardNumber
      ? cardNumber.setAttribute("value", e.target.value)
      : // 2
      inputNumber.value === ""
      ? (cardNumberErr.innerText = "Credit card number is required") &&
        (cardNumber.value = "")
      : // 3
      inputNumber.value.length === 16 && true
      ? move(fullName)
      : // 3

        (cardNumber.value = inputNumber.value) &&
        (cardNumberErr.innerText = "");
  });
};
