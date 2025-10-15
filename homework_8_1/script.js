function add() {
  let result = 0;
  return function (a) {
    result += a;
    return result;
  };
}
const sum = add();

console.log(sum(4));
console.log(sum(6));

console.log(sum(10));

console.log(sum(7));
