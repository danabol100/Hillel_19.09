import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItems from "../components/ListItems";

const TodoList = () => {
  const items = useSelector((state) => state.todo.items);

  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      {items.map((todo) => (
        <ListItems
          key={todo.id}
          id={todo.id}
          name={todo.name}
          isDone={todo.isDone}
        />
      ))}
    </List>
  );
};

export default TodoList;
