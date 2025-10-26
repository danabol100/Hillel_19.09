const text = document.querySelector(".block__text");
const btnRed = document.querySelector(".btn");

btnRed.addEventListener("click", () => {
  text.classList.toggle("red");
});
