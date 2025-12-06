const $form = $(".js--form");
const $input = $(".js--form__input");
const $list = $(".js--todos-wrapper");
function saveToLocalStorage() {
  const todos = [];
  $list.find(".todo-item").each(function () {
    const $span = $(this).find(".todo-item__description");
    const $checkBox = $(this).find("input[type='checkbox']");
    todos.push({
      text: $span.text(),
      checked: $checkBox.prop("checked"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
function loadFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.forEach((todo) => createTodoItem(todo.text, todo.checked));
}

function createTodoItem(text, checked) {
  const $li = $("<li>").addClass(
    "todo-item d-flex justify-content-between align-items-center bg-white p-3 mb-2 rounded border"
  );
  const $checkBox = $('<input type="checkbox">').prop("checked", checked);

  const $span = $("<span>")
    .addClass("todo-item__description flex-grow-1 ps-3")
    .text(text);
  if (checked) {
    $span.addClass("text-decoration-line-through");
  }

  const $btnDelete = $("<button>").addClass("btn btn-success").text("Удалить");

  $btnDelete.on("click", () => {
    $li.remove();
    saveToLocalStorage();
  });
  $checkBox.on("change", function () {
    $span.toggleClass("text-decoration-line-through", this.checked);
    saveToLocalStorage();
  });

  $li.append($checkBox, $span, $btnDelete);
  $list.append($li);
  saveToLocalStorage();
}

$form.on("submit", (event) => {
  event.preventDefault();
  const text = $input.val().trim();
  if (text) {
    createTodoItem(text);
    $input.val("");
  }
});

$list.on("click", ".todo-item", function (event) {
  if ($(event.target).is('input[type="checkbox"], .btn')) return;

  const taskText = $(this).find(".todo-item__description").text();

  $("#modal .modal-body").text(taskText);
  const modal = new bootstrap.Modal(document.getElementById("modal"));
  modal.show();
});

$(document).ready(loadFromLocalStorage);
