// VALIDATION CARD CVV

const cvvCardTop = document.querySelector("#cvv-card-top");
const cvvCard = document.querySelector("#cvv-card");
const cvvCardErr = document.querySelector("#cvv-error");

export const checkCardCvv = () => {
  cvvCardTop.addEventListener("input", (e) => {
    // 1
    cvvCardTop === cvvCard
      ? cvvCardTop.setAttribute("value", e.target.value)
      : // 2
      cvvCardTop.value === ""
      ? (cvvCardErr.innerText = "Введите CVC/CVV") && (cvvCard.value = "")
      : //
      cvvCardTop.value.length > 4
      ? (cvvCardErr.innerText = "не более 4 цифр") &&
        (cvvCard.value = cvvCardTop.value)
      : // 3

        (cvvCard.value = cvvCardTop.value) &&
        (cvvCardErr.innerText = "") &&
        true;
  });

  cvvCard.addEventListener("input", (e) => {
    // 1
    !cvvCardTop === cvvCard
      ? cvvCard.setAttribute("value", e.target.value)
      : // 2
      cvvCard.value === ""
      ? (cvvCardErr.innerText = "Введите CVC/CVV") && (cvvCardTop.value = "")
      : cvvCard.value.length > 4
      ? (cvvCardErr.innerText = "не более 4 цифр") &&
        (cvvCardTop.value = cvvCard.value)
      : // 3

        (cvvCardTop.value = cvvCard.value) &&
        (cvvCardErr.innerText = "") &&
        true;
  });
  console.log("Validating Cvv");
};
