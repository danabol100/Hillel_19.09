const btn = document.querySelector(".btn");
const blok = document.querySelector(".block");

btn.addEventListener("click", () => {
  blok.innerHTML = "";
  const img = document.createElement("img");
  numb = Math.floor(Math.random() * 9) + 1;
  img.src = `img/${numb}.avif`;
  img.classList.add("img");
  blok.appendChild(img);
});
