const array = [30, true, null, undefined, 70, "string", { user: "Kyrylo" }];

function calcAverage(arr) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
      count++;
    }
  }

  console.log(sum / count);
  return sum / count;
}
calcAverage(array);
