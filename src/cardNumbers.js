import { disableBtn, enableBtn } from "./disableBtn.js";
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

const REGEX_CARDS = ["^4", "^5[1-5]", "^8[6]", "986"];
const REGEX_NUMBERS = /^(?=.*\d)[\d ]+$/;

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

const detectLetters = (numbers) => {
  if (!numbers.match(REGEX_NUMBERS)) {
    cardNumberErr.innerText = "???????????? ?????????? - ?????? ???????? ?? ??????????????";
  }
};

const move = (next) => {
  cardNumberErr.innerText = "";
  next.focus();
  enableBtn();
};

export const checkCardNumbers = () => {
  cardNumber.addEventListener("keyup", (e) => {
    (e.keyCode !== 8 && cardNumber.value.length === 4) ||
    cardNumber.value.length === 10 ||
    cardNumber.value.length === 16
      ? (cardNumber.value =
          (cardNumber.value = cardNumber.value + "  ") &&
          (inputNumber.value = cardNumber.value)) &&
        detectLetters(cardNumber.value)
      : detectCard(cardNumber.value);
  });

  inputNumber.addEventListener("keyup", (e) => {
    (e.keyCode !== 8 && inputNumber.value.length === 4) ||
    inputNumber.value.length === 10 ||
    inputNumber.value.length === 16
      ? (inputNumber.value = inputNumber.value + "  ") &&
        (cardNumber.value = inputNumber.value) &&
        detectLetters(inputNumber.value)
      : detectCard(inputNumber.value);
  });

  cardNumber.addEventListener("input", (e) => {
    // 1
    !inputNumber === cardNumber
      ? inputNumber.setAttribute("value", e.target.value)
      : //
      cardNumber.value === ""
      ? (cardNumberErr.innerText = "?????????????? ?????????? ??????????!") &&
        (inputNumber.value = "")
      : //
      cardNumber.value.length === 22 && (inputNumber.value = cardNumber.value)
      ? move(expMonthTop)
      : //
      cardNumber.value.length === 3 && (inputNumber.value = cardNumber.value)
      ? detectCard(cardNumber.value)
      : //

        //
        (inputNumber.value = cardNumber.value) &&
        (cardNumberErr.innerText = "");
  });

  inputNumber.addEventListener("input", (e) => {
    //
    inputNumber === cardNumber
      ? cardNumber.setAttribute("value", e.target.value)
      : //
      inputNumber.value === ""
      ? (cardNumberErr.innerText = "?????????????? ?????????? ??????????!") &&
        (cardNumber.value = "")
      : //

      inputNumber.value.length === 22 && (cardNumber.value = inputNumber.value)
      ? move(expMonth)
      : //

      //
      inputNumber.value.length === 3 && (cardNumber.value = inputNumber.value)
      ? detectCard(inputNumber.value)
      : //
        (cardNumber.value = inputNumber.value) &&
        (cardNumberErr.innerText = "");
  });
};
