import { fetchTodos, addTodo, updateTodo, deleteTodo } from "./api.js";

const form = document.querySelector(".js--form");
const input = form.querySelector(".js--form__input");
const list = document.querySelector(".js--todos-wrapper");

async function loadTodos() {
  const todos = await fetchTodos();

  todos.forEach((todo) => {
    createTodoItem(todo.text, todo.checked, todo._id);
  });
}

function createTodoItem(text, checked, id) {
  const li = document.createElement("li");
  li.classList.add("todo-item");
  const span = document.createElement("span");
  span.classList.add("todo-item__description");
  span.textContent = text;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = checked;

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("todo-item__edit");
  btnEdit.textContent = "Редагувати";

  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.classList.add("todo-item__edit-input");
  editInput.style.display = "none";

  btnEdit.addEventListener("click", () => {
    editInput.style.display = "inline";
    editInput.value = span.textContent;
    btnEdit.style.display = "none";
    span.style.display = "none";
    btnDelete.style.display = "none";

    const btnSave = document.createElement("button");
    btnSave.textContent = "Зберегти";
    btnSave.type = "button";
    btnSave.classList.add("todo-item__save");
    li.appendChild(btnSave);
    editInput.focus();

    btnSave.addEventListener("click", async () => {
      const newText = editInput.value.trim();
      if (!newText) return;

      await updateTodo(id, { text: newText, checked: checkBox.checked });

      span.textContent = newText;
      editInput.style.display = "none";
      btnEdit.style.display = "inline";
      span.style.display = "inline";
      btnDelete.style.display = "block";
      btnSave.remove();
    });
  });

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("todo-item__delete");
  btnDelete.textContent = "Видалити";

  btnDelete.addEventListener("click", async () => {
    await deleteTodo(id);
    li.remove();
  });

  checkBox.addEventListener("change", async () => {
    await updateTodo(id, { checked: checkBox.checked });
    span.classList.toggle("todo-item__description--checked", checkBox.checked);
  });

  li.append(checkBox, span, editInput, btnEdit, btnDelete);
  list.appendChild(li);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const newTodo = await addTodo(text);
  createTodoItem(newTodo.text, newTodo.checked, newTodo._id);
  input.value = "";
});

loadTodos();
