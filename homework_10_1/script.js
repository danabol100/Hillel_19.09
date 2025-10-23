const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
const company1 = {
  name: "TechCorp",
  ceo: { name: "Іван", salary: 10000 },
  employees: [
    { name: "Ольга", salary: 4000 },
    { name: "Петро", salary: 5000, extra: { salary: 2000 } },
  ],
  finance: {
    budget: 100000,
    accountant: { name: "Софія", salary: 4500 },
  },
};

function sumSalary(object) {
  let sum = 0;
  for (let key in object) {
    const value = object[key];
    if (key === "salary") {
      sum += value;
    }
    if (typeof value === "object") {
      sum += sumSalary(value);
    }
  }
  return sum;
}
console.log(sumSalary(company));
console.log(sumSalary(company1));
