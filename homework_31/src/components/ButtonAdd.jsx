import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
const ButtonAdd = ({ children }) => {
  const isLoading = useSelector((state) => state.todo.isLoading);
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
