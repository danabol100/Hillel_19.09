import { useDispatch } from "react-redux";
import { clearItem } from "../redux/slices/usersSlices";
const Button = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(clearItem());
  };
  return (
    <button className="btn btn-danger" onClick={handleClick}>
      Clear
    </button>
  );
};
export default Button;
