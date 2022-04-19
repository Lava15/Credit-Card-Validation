// VALIDATION 16 DIGITS
const inputNumber = document.querySelector("#digits");
const cardNumber = document.querySelector("#top-input");
const cardNumberErr = document.querySelector("#digits-error");

//
const expMonthTop = document.querySelector("#exp-month-top");
const expMonth = document.querySelector("#exp-month");

//
const REGEX_CARDS = ["^4", "^5[1-5]", "^8[6]", "9860"];

export const checkCardNumbers = () => {
  const detectCard = (digits) => {
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
      next.focus();
    }
  };

  cardNumber.addEventListener("input", (e) => {
    // 1
    !inputNumber === cardNumber
      ? inputNumber.setAttribute("value", e.target.value)
      : // 2
      cardNumber.value === ""
      ? (cardNumberErr.innerText = "Укажите Номер карты!") &&
        (inputNumber.value = "")
      : // 3
      cardNumber.value.length === 16 && true
      ? move(expMonthTop) && (cardNumberErr.innerText = "")
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
      ? (cardNumberErr.innerText = "Укажите Номер карты!") &&
        (cardNumber.value = "")
      : // 3
      inputNumber.value.length === 16 && true
      ? move(expMonth) && (cardNumberErr.innerText = "")
      : // 3

        (cardNumber.value = inputNumber.value) &&
        (cardNumberErr.innerText = "");
  });
};
