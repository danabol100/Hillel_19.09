const images = [
  "img/bmw-m4.avif",
  "img/bmw-m5.jpg",
  "img/mers.avif",
  "img/rs6.jpg",
];

const slider = document.querySelector(".slider__block");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

images.forEach((imageSrc) => {
  const img = document.createElement("img");
  img.src = imageSrc;
  img.classList.add("image");
  slider.appendChild(img);
});

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 600}px)`;
}
nextBtn.addEventListener("click", () => {
  currentIndex += 1;
  updateSlider();
  updateButtons();
});

prevBtn.addEventListener("click", () => {
  currentIndex -= 1;
  updateSlider();
  updateButtons();
});

function updateButtons() {
  if (currentIndex === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentIndex === images.length - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}
updateButtons();
