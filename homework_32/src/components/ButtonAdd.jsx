import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
const ButtonAdd = ({ children }) => {
  const isLoading = useSelector((state) => {
    const todosData = state.todos;
    return todosData?.isLoading || false;
  });

  return (
    <Button
      disabled={isLoading}
      variant="contained"
      color="success"
      type="submit"
      sx={{ height: 56 }}
    >
      {isLoading ? "Add..." : children || "Add"}
    </Button>
  );
};
export default ButtonAdd;
