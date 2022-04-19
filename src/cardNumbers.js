// VALIDATION 16 DIGITS
const inputNumber = document.querySelector("#digits");
const cardNumber = document.querySelector("#top-input");
const cardNumberErr = document.querySelector("#digits-error");
//
const expMonthTop = document.querySelector("#exp-month-top");
const expMonth = document.querySelector("#exp-month");
//
const cvvCardTop = document.querySelector("#cvv-card-top");
const cvvCard = document.querySelector("#cvv-card");
//
const visaCard = document.querySelector("#visa-card");
const masterCard = document.querySelector("#mastercard");
const humoCard = document.querySelector("#humo-card");
const uzCard = document.querySelector("#uzcard");

const allCards = [visaCard, masterCard, humoCard, uzCard];

const REGEX_CARDS = ["^4", "^5[1-5]", "^8[6]", "9860"];

const detectCard = (digits) => {
  if (digits.match(REGEX_CARDS[0])) {
    cvvCardTop.disabled = false;
    cvvCardTop.style.opacity = 1;
    cvvCard.disabled = false;
    cvvCard.style.opacity = 1;
    masterCard.style.display = "none";
    visaCard.style.display = "block";
    uzCard.style.display = "none";
    humoCard.style.display = "none";
  } else if (digits.match(REGEX_CARDS[1])) {
    cvvCardTop.disabled = false;
    cvvCardTop.style.opacity = 1;
    cvvCard.disabled = false;
    cvvCard.style.opacity = 1;
    masterCard.style.display = "block";
    visaCard.style.display = "none";
    uzCard.style.display = "none";
    humoCard.style.display = "none";
  } else if (digits.match(REGEX_CARDS[2])) {
    masterCard.style.display = "none";
    visaCard.style.display = "none";
    uzCard.style.display = "block";
    humoCard.style.display = "none";
    cvvCardTop.disabled = true;
    cvvCardTop.style.opacity = 0;
    cvvCard.disabled = true;
    cvvCard.style.opacity = 0.5;
  } else if (digits.match(REGEX_CARDS[3])) {
    masterCard.style.display = "none";
    visaCard.style.display = "none";
    uzCard.style.display = "none";
    humoCard.style.display = "block";
    cvvCardTop.disabled = true;
    cvvCardTop.style.opacity = 0;
    cvvCard.disabled = true;
    cvvCard.style.opacity = 0.5;
  } else {
    allCards.forEach((card) => {
      card.style.display = "none";
    });
    cvvCardTop.disabled = true;
    cvvCardTop.style.opacity = 0;
    cvvCard.disabled = true;
    cvvCard.style.opacity = 0.5;
  }
};

export const checkCardNumbers = () => {
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
      cardNumber.value.length === 16 && (inputNumber.value = cardNumber.value)
      ? move(expMonthTop)
      : // 4
      cardNumber.value.length === 4 && (inputNumber.value = cardNumber.value)
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
      inputNumber.value.length === 16 && (cardNumber.value = inputNumber.value)
      ? move(expMonth)
      : // 4
      inputNumber.value.length === 4 && (cardNumber.value = inputNumber.value)
      ? detectCard(inputNumber.value)
      : // 3
        (cardNumber.value = inputNumber.value) &&
        (cardNumberErr.innerText = "");
  });
};
