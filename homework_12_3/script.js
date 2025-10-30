const input = form.querySelector("input");
const list = document.querySelector(".list");

document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();

  const li = document.createElement("li");

  li.textContent = input.value;
  li.classList.add("li");

  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.classList.add("btn-delete");
  li.appendChild(btn);
  list.appendChild(li);

  input.value = "";
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-delete")) {
    event.target.parentElement.remove();
  }
});
