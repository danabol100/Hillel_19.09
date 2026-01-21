import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStart } from "./redux/slices/todoSlice";

import { useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);
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
