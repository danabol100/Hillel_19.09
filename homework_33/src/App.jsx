import { useState } from "react";
import { Formik } from "formik";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { validate } from "./helpers/validation";

function App() {
  const [todos, setTodos] = useState([]);
  const handleSubmit = (value, { resetForm }) => {
    if (!value.todo.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: value.todo }]);

    resetForm();
  };
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>ToDo</h1>
      <Formik
        initialValues={{ todo: "" }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        <TodoForm />
      </Formik>
      <TodoList todos={todos} onDelete={handleDelete} />
    </>
  );
}

export default App;
