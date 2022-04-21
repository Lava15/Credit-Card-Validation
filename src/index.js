import { checkCardNumbers } from "./cardNumbers.js";
import { checkCardName } from "./cardName.js";
import { checkCardMonth, checkCardYear } from "./expirationDate.js";
import { checkCardCvv } from "./cvvCard.js";

window.addEventListener("load", () => {
  checkCardNumbers();
  checkCardMonth();
  checkCardYear();
  checkCardName();
  checkCardCvv();
});

//
