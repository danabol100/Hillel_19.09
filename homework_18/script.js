"use strict";

const start = document.querySelector(".start");

const p = document.querySelector("p");
let interval;

let totalSeconds;

function startTimer(element) {
  clearInterval(interval);
  interval = setInterval(() => {
    if (element.textContent === "0") {
      clearInterval(interval);
    }
  });
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}

function startTimer(minutes) {
  clearInterval(interval);
  totalSeconds = minutes * 60;
  p.textContent = formatTime(totalSeconds);

  interval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      p.textContent = formatTime(totalSeconds);
    } else {
      clearInterval(interval);
      p.textContent = "время вышло";
    }
  }, 1000);
}

start.addEventListener("click", () => startTimer(1));
