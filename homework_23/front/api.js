const TODO_URL = "http://localhost:8080";

export async function fetchTodos() {
  const response = await fetch(`${TODO_URL}`);
  if (!response.ok) throw new Error("Failed to fetch todos");
  return response.json();
}

export async function addTodo(text) {
  const response = await fetch(`${TODO_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, checked: false }),
  });
  if (!response.ok) throw new Error("Failed to add todo");
  return response.json();
}

export async function updateTodo(id, data) {
  const response = await fetch(`${TODO_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update todo");
  return response.json();
}

export async function deleteTodo(id) {
  const response = await fetch(`${TODO_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete todo");
  return true;
}
