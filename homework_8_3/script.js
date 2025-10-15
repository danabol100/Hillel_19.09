let numbFromUser = prompt("Введите число больше 100");
for (let i = 0; i <= 10; i++) {
  if (numbFromUser <= 100) {
    numbFromUser = prompt("Введите число больше!!! 100");
  } else {
    console.log(`Останне введення: ${numbFromUser}`);
    break;
  }
}
