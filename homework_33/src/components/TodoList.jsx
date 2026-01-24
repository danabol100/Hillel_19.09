import List from "@mui/material/List";
import ListItems from "./ListItems";

const TodoList = (props) => {
  const { todos, onDelete } = props;

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <ListItems
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};
export default TodoList;
