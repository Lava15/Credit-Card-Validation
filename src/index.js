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

// VALIDATION 16 DIGITS

const checkCardNumbers = () => {
  let inputNumber = document.querySelector("#digits");
  let cardNumber = document.querySelector("#top-input");
  let cardNumberErr = document.querySelector("#digits-error");
  inputNumber.addEventListener("input", (e) => {
    // 1
    inputNumber === cardNumber
      ? cardNumber.setAttribute("value", e.target.value)
      : // 2
      inputNumber.value === ""
      ? (cardNumberErr.innerText = "Credit card number is required") &&
        (cardNumber.value = "")
      : // 3
        (cardNumber.value = inputNumber.value) &&
        (cardNumberErr.innerText = "");
  });

  cardNumber.addEventListener("input", (e) => {
    // 1
    !inputNumber === cardNumber
      ? inputNumber.setAttribute("value", e.target.value)
      : // 2
      cardNumber.value === ""
      ? (cardNumberErr.innerText = "Credit card number is required") &&
        (inputNumber.value = "")
      : // 3
        (inputNumber.value = cardNumber.value) &&
        (cardNumberErr.innerText = "");
  });
};

// VALIDATION FULLNAME
const checkCardName = () => {
  let fullNameTop = document.querySelector("#full-name-top");
  let fullName = document.querySelector("#full-name");
  let cardNameErr = document.querySelector("#cname-error");

  fullNameTop.addEventListener("input", (e) => {
    // 1
    fullNameTop === fullName
      ? fullName.setAttribute("value", e.target.value)
      : // 2
      fullNameTop.value === ""
      ? (cardNameErr.innerText = "Credit card fullname is required") &&
        (fullName.value = "")
      : // 3
        (fullName.value = fullNameTop.value) && (cardNameErr.innerText = "");
  });

  fullName.addEventListener("input", (e) => {
    // 1
    !fullNameTop === fullNameTop
      ? fullNameTop.setAttribute("value", e.target.value)
      : // 2
      fullName.value === ""
      ? (cardNameErr.innerText = "Credit card fullname is required") &&
        (fullNameTop.value = "")
      : // 3
        (fullNameTop.value = fullName.value) && (cardNameErr.innerText = "");

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
