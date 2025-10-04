let numbFromUser = +prompt("Введите целое число");
let flag = false;
while (numbFromUser <= 0) {
  numbFromUser = +prompt(" Внимательно! Введите число больше нуля!");
}

if (numbFromUser === 1) {
  console.log("число 1 не простое");
} else {
  for (let i = 2; i < numbFromUser; i++) {
    if (numbFromUser % i === 0) {
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log(`число ${numbFromUser} не простое`);
  } else {
    console.log(`число ${numbFromUser} простое`);
  }
}
