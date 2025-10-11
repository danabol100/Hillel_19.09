const arr = [3, 5, 6, 7, 8, 23, 46, 5, 34, 2];

const arrEvenNumb = arr.filter(function (elem) {
  return elem % 2 === 0;
});
console.log(arrEvenNumb);
