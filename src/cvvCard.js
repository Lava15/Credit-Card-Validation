// VALIDATION CARD CVV
import { disableBtn, enableBtn } from "./disableBtn.js";
const cvvCardTop = document.querySelector("#cvv-card-top");
const cvvCard = document.querySelector("#cvv-card");
const cvvCardErr = document.querySelector("#cvv-error");

const fullNameTop = document.querySelector("#full-name-top");
const fullName = document.querySelector("#full-name");

const move = (next) => {
  next.focus();
  enableBtn();
};

export const checkCardCvv = () => {
  cvvCardTop.addEventListener("input", (e) => {
    //
    cvvCardTop === cvvCard
      ? cvvCardTop.setAttribute("value", e.target.value)
      : //
      cvvCardTop.value === ""
      ? (cvvCard.value = "") && (cvvCardErr.innerText = "Введите CVC/CVV")
      : //
      cvvCardTop.value.length > 4
      ? (cvvCardErr.innerText = "не более 4 цифр") &&
        (cvvCardTop.value = cvvCardTop.value = "") &&
        disableBtn()
      : //
      cvvCardTop.value.length === 4 && (cvvCard.value = cvvCardTop.value)
      ? move(fullNameTop)
      : //

        (cvvCard.value = cvvCardTop.value) && (cvvCardErr.innerText = "");
  });

  cvvCard.addEventListener("input", (e) => {
    //
    !cvvCardTop === cvvCard
      ? cvvCard.setAttribute("value", e.target.value)
      : //
      cvvCard.value === ""
      ? (cvvCardErr.innerText = "Введите CVC/CVV") && (cvvCardTop.value = "")
      : cvvCard.value.length > 4
      ? (cvvCardErr.innerText = "не более 4 цифр") &&
        (cvvCard.value = cvvCard.value = "") &&
        disableBtn()
      : //
      cvvCard.value.length === 4 && (cvvCardTop.value = cvvCard.value)
      ? move(fullName)
      : //

        (cvvCardTop.value = cvvCard.value) && (cvvCardErr.innerText = "");
  });
};
