const btnDisabled = document.querySelector("#submit-form");

export const disableBtn = () => {
  btnDisabled.disabled = true;
};

export const enableBtn = () => {
  btnDisabled.disabled = false;
};
