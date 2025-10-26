let table = document.querySelector(".table");

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");

  for (let k = 1; k <= 10; k++) {
    const td = document.createElement("td");
    td.textContent = i * k;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
