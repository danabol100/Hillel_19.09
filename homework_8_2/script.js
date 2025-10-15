function multiplyNumb(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiplyNumb(5)(5));
