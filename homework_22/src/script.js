import "./main.scss";

const form = document.querySelector(".js--form");
const input = form.querySelector(".js--form__input");
const list = document.querySelector(".js--todos-wrapper");

function saveToLocalStorage() {
  const todos = [];
  list.querySelectorAll(".todo-item").forEach((li) => {
    const span = li.querySelector(".todo-item__description");
    const checkBox = li.querySelector("input[type='checkbox']");
    todos.push({
      text: span.textContent,
      checked: checkBox.checked,
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.forEach((todo) => createTodoItem(todo.text, todo.checked));
}
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

function createTodoItem(text, checked) {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = checked;

  if (checked) {
    li.classList.add("todo-item--checked");
  }

  const span = document.createElement("span");
  span.classList.add("todo-item__description");
  span.textContent = text;

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("todo-item__delete");
  btnDelete.textContent = "Видалити";
  btnDelete.addEventListener("click", () => {
    li.remove();
    saveToLocalStorage();
  });
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      li.classList.add("todo-item--checked");
    } else {
      li.classList.remove("todo-item--checked");
    }
    saveToLocalStorage();
  });
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(btnDelete);
  list.appendChild(li);
  saveToLocalStorage();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createTodoItem(input.value);
  saveToLocalStorage();
  input.value = "";
});
