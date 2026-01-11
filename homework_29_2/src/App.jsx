import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
function App() {
  const count = useSelector((state) => state.todo.items.length);
  return (
    <>
      <h1>ToDo</h1>
      <TodoForm />
      <TodoList />
      <footer>Всего: {count}</footer>
    </>
  );
}

export default App;
