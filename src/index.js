import { checkCardNumbers } from "./cardNumbers.js";
import { checkCardName } from "./cardName.js";
import { checkCardMonth, checkCardYear } from "./expirationDate.js";
import { checkCardCvv } from "./cvvCard.js";
let REGEX_NUMBERS = /[0-9]/g;
let REGEX_LETTERS = /[A-Za-zА-Яа-яЁё]]/g;

window.onload = function () {
  // let submitForm = document.querySelector("#submit-form");
  // submitForm.addEventListener("click", (e) => {
  //   if (!finalValidation) {
  //     e.preventDefault;
  //   }
  // });

  checkCardNumbers();
  checkCardName();
  checkCardMonth();
  checkCardYear();
  checkCardCvv();
  finalValidation();
};

// VALIDATION ALL FIELDS
const finalValidation = () => {
  console.log(" All Fields Filled");
};
