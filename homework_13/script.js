const form = document.querySelector("form");

const inputs = document.querySelectorAll("input, textarea");
const errors = document.querySelectorAll("p");

const checkValue = (value, regEx, item) => {
  if (regEx.test(value)) {
    item.style.display = "none";
  } else {
    item.style.display = "block";
  }
};

const validateValue = (event) => {
  event.preventDefault();

  inputs.forEach((input, index) => {
    if (index === 0) {
      checkValue(input.value, /^.+$/, errors[0]);
    }
    if (index === 1) {
      checkValue(input.value, /.{5,}/, errors[1]);
    }
    if (index === 2) {
      checkValue(input.value, /^\+380\d+$/, errors[2]);
    }
    if (index === 3) {
      checkValue(input.value, /.+\@\w+\./, errors[3]);
    }
    console.log(`${input.name}: ${input.value}`);
  });
};

form.addEventListener("submit", validateValue);
