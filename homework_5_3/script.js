const numbFromUser = +prompt(
  "Введите число для возведения в квадрат степени(всех чисел до вашего числа):"
);

for (let i = 2; i <= 100; i += 1) {
  if (i <= numbFromUser) {
    console.log(`Квадрат числа ${i} = ${i * i}`);
  }
}
