const stringFromUser = prompt("Write string for delete symbol");

let arr = [];

while (true) {
  let symbolFromUser = prompt("Write Symbol (for finish push cancel)");

  if (symbolFromUser === null) {
    break;
  }
  arr.push(symbolFromUser);
}
console.log(stringFromUser, arr);
function deleteSymbol(string, array) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let flag = false;
    for (let j = 0; j < array.length; j++) {
      if (string[i] === array[j]) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      result += string[i];
    }
  }
  alert(result);
  return result;
}
deleteSymbol(stringFromUser, arr);
