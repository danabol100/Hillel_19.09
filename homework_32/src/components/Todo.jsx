import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStart } from "../redux/slices/todoSlice";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const ToDo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStart());
  }, [dispatch]);

  const count = useSelector((state) => state.todos?.items?.length || 0);
  return (
    <>
      <h1>ToDo</h1>
      <TodoForm />
      <TodoList />
      <footer>Всего: {count}</footer>
    </>
  );
};

export default ToDo;
