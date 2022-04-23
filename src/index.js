import { checkCardNumbers } from "./cardNumbers.js";
import { checkCardName } from "./cardName.js";
import { checkCardMonth, checkCardYear } from "./expirationDate.js";
import { checkCardCvv } from "./cvvCard.js";
import "./sass/style.scss";

window.addEventListener("load", () => {
  checkCardNumbers();
  checkCardMonth();
  checkCardYear();
  checkCardName();
  checkCardCvv();
});

//
