import { useDispatch } from "react-redux";
import { clearItem } from "../redux/slices/usersSlice";
import { Button } from "@mui/material";
const ClearButton = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(clearItem());
  };
  return (
    <Button variant="outlined" color="error" onClick={handleClick}>
      Clear
    </Button>
  );
};
export default ClearButton;
