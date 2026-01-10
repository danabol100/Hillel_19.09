import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Value:{count}</h1>
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
    </>
  );
}

export default App;
