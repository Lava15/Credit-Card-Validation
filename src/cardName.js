// FULLNAME VALIDATION
import { disableBtn, enableBtn } from "./disableBtn.js";

const fullNameTop = document.querySelector("#full-name-top");
const fullName = document.querySelector("#full-name");
const cardNameErr = document.querySelector("#cname-error");
const REGEX_FULLNAME = /^[a-zA-Z ]+$/;

const validateName = (name) => {
  if (name.match(REGEX_FULLNAME)) {
    cardNameErr.innerText = "";
    enableBtn();
  } else {
    cardNameErr.innerText = "Только латинские буквы - без символов";
  }
};

export const checkCardName = () => {
  fullNameTop.addEventListener("input", (e) => {
    // 1
    fullNameTop === fullName
      ? fullName.setAttribute("value", e.target.value)
      : // 2
      fullNameTop.value === ""
      ? (cardNameErr.innerText = "Укажите Имя и Фамилия!") &&
        (fullName.value = "")
      : // 3
      fullNameTop.value.length > 4
      ? (fullName.value = fullNameTop.value) && validateName(fullNameTop.value)
      : // 3
      fullNameTop.value.length <= 4 || fullNameTop.value.length === 0
      ? (fullName.value = fullNameTop.value) && disableBtn()
      : // 4
        (fullName.value = fullNameTop.value) && (cardNameErr.innerText = "");
  });

  fullName.addEventListener("input", (e) => {
    // 1
    !fullNameTop === fullNameTop
      ? fullNameTop.setAttribute("value", e.target.value)
      : // 2
      fullName.value === ""
      ? (cardNameErr.innerText = "Укажите Имя и Фамилия!") &&
        (fullNameTop.value = "")
      : // 3
      fullName.value.length > 4
      ? (fullNameTop.value = fullName.value) && validateName(fullName.value)
      : // 3
      fullName.value.length <= 4 || fullName.value.length === 0
      ? (fullNameTop.value = fullName.value) && disableBtn()
      : // 4
        (fullNameTop.value = fullName.value) && (cardNameErr.innerText = "");
  });
};
