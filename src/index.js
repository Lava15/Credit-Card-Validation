window.onload = function () {
  checkCardNumbers();
  checkCardName();
  checkCardMonth();
  checkCardYear();
  checkCardCvv();
  validateAllFiels();
};

// VALIDATION ALL FIELDS
const validateAllFiels = () => {
  console.log(" All Fields Filled");
};

// VALIDATION 16 DIGITS

const checkCardNumbers = () => {
  let inputNumber = document.querySelector("#digits");
  let cardNumber = document.querySelector("#top-input");

  inputNumber.addEventListener("input", (e) => {
    inputNumber === cardNumber
      ? cardNumber.setAttribute("value", e.target.value)
      : (cardNumber.value = inputNumber.value);
  });
  cardNumber.addEventListener("input", (e) => {
    !inputNumber === cardNumber
      ? inputNumber.setAttribute("value", e.target.value)
      : (inputNumber.value = cardNumber.value);
  });
};

// VALIDATION FULLNAME
const checkCardName = () => {
  let fullNameTop = document.querySelector("#full-name-top");
  let fullName = document.querySelector("#full-name");

  fullNameTop.addEventListener("input", (e) => {
    fullNameTop === fullName
      ? fullName.setAttribute("value", e.target.value)
      : (fullName.value = fullNameTop.value);
  });

  fullName.addEventListener("input", (e) => {
    !fullNameTop === fullNameTop
      ? fullNameTop.setAttribute("value", e.target.value)
      : (fullNameTop.value = fullName.value);

    fullNameTop.setAttribute("value", e.target.value);
  });
};

// VALIDATION EXPIRATION DATE MONTH

const checkCardMonth = () => {
  let expMonthTop = document.querySelector("#exp-month-top");
  let expMonth = document.querySelector("#exp-month");

  expMonthTop.addEventListener("input", (e) => {
    expMonthTop === expMonth
      ? expMonthTop.setAttribute("value", e.target.value)
      : (expMonth.value = expMonthTop.value);
  });

  expMonth.addEventListener("input", (e) => {
    !expMonthTop === expMonth
      ? expMonth.setAttribute("value", e.target.value)
      : (expMonthTop.value = expMonth.value);
  });
};

// VALIDATION EXPIRATION DATE YEAR
const checkCardYear = () => {
  let expYearTop = document.querySelector("#exp-year-top");
  let expYear = document.querySelector("#exp-year");

  expYearTop.addEventListener("input", (e) => {
    expYearTop === expYear
      ? expYearTop.setAttribute("value", e.target.value)
      : (expYear.value = expYearTop.value);
  });

  expYear.addEventListener("input", (e) => {
    !expYearTop === expYear
      ? expYear.setAttribute("value", e.target.value)
      : (expYearTop.value = expYear.value);
  });

  console.log("Validating Expiration Year");
};

// VALIDATION CARD CVV

const checkCardCvv = () => {
  let cvvCardTop = document.querySelector("#cvv-card-top");
  let cvvCard = document.querySelector("#cvv-card");

  cvvCardTop.addEventListener("input", (e) => {
    cvvCardTop === cvvCard
      ? cvvCardTop.setAttribute("value", e.target.value)
      : (cvvCard.value = cvvCardTop.value);
  });

  cvvCard.addEventListener("input", (e) => {
    !cvvCardTop === cvvCard
      ? cvvCard.setAttribute("value", e.target.value)
      : (cvvCardTop.value = cvvCard.value);
  });
  console.log("Validating Cvv");
};
