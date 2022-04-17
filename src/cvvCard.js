// VALIDATION CARD CVV

export const checkCardCvv = () => {
  let cvvCardTop = document.querySelector("#cvv-card-top");
  let cvvCard = document.querySelector("#cvv-card");
  let cvvCardErr = document.querySelector("#cvv-error");

  cvvCardTop.addEventListener("input", (e) => {
    // 1
    cvvCardTop === cvvCard
      ? cvvCardTop.setAttribute("value", e.target.value)
      : // 2
      cvvCardTop.value === ""
      ? (cvvCardErr.innerText = "Введите CVC/CVV") && (cvvCard.value = "")
      : //
        (cvvCard.value = cvvCardTop.value) && (cvvCardErr.innerText = "");
  });

  cvvCard.addEventListener("input", (e) => {
    // 1
    !cvvCardTop === cvvCard
      ? cvvCard.setAttribute("value", e.target.value)
      : // 2
      cvvCard.value === ""
      ? (cvvCardErr.innerText = "Введите CVC/CVV") && (cvvCardTop.value = "")
      : // 3
        (cvvCardTop.value = cvvCard.value) && (cvvCardErr.innerText = "");
  });
  console.log("Validating Cvv");
};
