import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
const ListItems = (props) => {
  const { id, text, onDelete } = props;
  return (
    <ListItem>
      {text}
      <Button variant="outlined" color="error" onClick={() => onDelete(id)}>
        delete
      </Button>
    </ListItem>
  );
};

export default ListItems;
