import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/todoSlice";

const ListItems = (props) => {
  const { id, text } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItem(id));
  };

  return (
    <ListItem>
      {text}
      <Button variant="outlined" color="error" onClick={handleDelete}>
        delete
      </Button>
    </ListItem>
  );
};

export default ListItems;
