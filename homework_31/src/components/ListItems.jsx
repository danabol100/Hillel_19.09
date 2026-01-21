import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { deleteTodo, editTodo } from "../redux/slices/todoSlice";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";

const ListItems = (props) => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
  const [checked, setChecked] = useState(false);
  const { id, name } = props;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(name);
  const inputRef = useRef();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleEditClick = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const handleSave = () => {
    if (!text.trim()) return;
    dispatch(editTodo({ id, name: text }));
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
        <span style={{ textDecoration: checked ? "line-through" : "none" }}>
          {text}
        </span>
      )}
      <Checkbox {...label} onChange={handleChange} checked={checked} />
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
        delete
      </Button>
    </ListItem>
  );
};

export default ListItems;
