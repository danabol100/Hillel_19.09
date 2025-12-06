"use strict";

var form = document.querySelector(".js--form");
var input = form.querySelector(".js--form__input");
var list = document.querySelector(".js--todos-wrapper");
function saveToLocalStorage() {
  var todos = [];
  list.querySelectorAll(".todo-item").forEach(function (li) {
    var span = li.querySelector(".todo-item__description");
    var checkBox = li.querySelector("input[type='checkbox']");
    todos.push({
      text: span.textContent,
      checked: checkBox.checked
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
function loadFromLocalStorage() {
  var todos = JSON.parse(localStorage.getItem("todos"));
  todos.forEach(function (todo) {
    return createTodoItem(todo.text, todo.checked);
  });
}
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);
function createTodoItem(text, checked) {
  var li = document.createElement("li");
  li.classList.add("todo-item");
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = checked;
  if (checked) {
    li.classList.add("todo-item--checked");
  }
  var span = document.createElement("span");
  span.classList.add("todo-item__description");
  span.textContent = text;
  var btnDelete = document.createElement("button");
  btnDelete.classList.add("todo-item__delete");
  btnDelete.textContent = "Видалити";
  btnDelete.addEventListener("click", function () {
    li.remove();
    saveToLocalStorage();
  });
  checkBox.addEventListener("change", function () {
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
form.addEventListener("submit", function (event) {
  event.preventDefault();
  createTodoItem(input.value);
  saveToLocalStorage();
  input.value = "";
});