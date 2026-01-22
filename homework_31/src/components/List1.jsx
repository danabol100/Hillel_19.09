import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { deleteTodo, editTodo, toggleTodo } from "../redux/slices/todoSlice";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";

const List1 = ({ id, name, isDone }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(name);
  const inputRef = useRef();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo({ id, name: text, isDone: !isDone }));
  };

  const handleEditClick = () => {
    setText(name);
    setIsEditing(true);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleSave = () => {
    if (!text.trim()) return;
    dispatch(editTodo({ id, name: text, isDone }));
    setIsEditing(false);
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {isEditing ? (
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          inputRef={inputRef}
        />
      ) : (
        <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {text}
        </span>
      )}
      <Checkbox onChange={handleToggle} checked={isDone} />
      {isEditing ? (
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      ) : (
        <Button variant="outlined" color="secondary" onClick={handleEditClick}>
          Edit
        </Button>
      )}
      <Button variant="outlined" color="error" onClick={handleDelete}>
        Delete
      </Button>
    </ListItem>
  );
};

export default List1;
