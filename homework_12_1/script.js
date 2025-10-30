//Первый вариант

let link = "";
document.querySelector(".btn__wrapper").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-prompt")) {
    link = prompt("Write Link");
  }
  if (event.target.classList.contains("btn-link")) {
    window.location.href = link;
  }
});

//Второй Вариант

// document.querySelector(".btn-prompt").addEventListener("click", () => {
//   link = prompt("Write Link");
// });

// document.querySelector(".btn-link").addEventListener("click", () => {
//   window.location.href = link;
// });
