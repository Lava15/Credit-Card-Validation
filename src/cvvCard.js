// VALIDATION CARD CVV
import { disableBtn, enableBtn } from "./disableBtn.js";
const cvvCardTop = document.querySelector("#cvv-card-top");
const cvvCard = document.querySelector("#cvv-card");
const cvvCardErr = document.querySelector("#cvv-error");

const fullNameTop = document.querySelector("#full-name-top");
const fullName = document.querySelector("#full-name");

const backSide = document.querySelector("#show-backside");

const move = (next) => {
  next.focus();
  enableBtn();
};

const showBackSide = () => {
  backSide.classList.toggle("show-back-card");
};

export const checkCardCvv = () => {
  cvvCard.addEventListener("focus", () => {
    showBackSide();
  });
  cvvCardTop.addEventListener("focus", () => {
    showBackSide();
  });

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
        (cvvCard.value = cvvCardTop.value) &&
        true &&
        console.log("CVV1 TRUE")
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
        (cvvCardTop.value = cvvCard.value) &&
        true &&
        console.log("NUMBER4 TRUE")
      : //
      cvvCard.value.length === 4 && (cvvCardTop.value = cvvCard.value)
      ? move(fullName)
      : //

        (cvvCardTop.value = cvvCard.value) && (cvvCardErr.innerText = "");
  });
  return true;
};
