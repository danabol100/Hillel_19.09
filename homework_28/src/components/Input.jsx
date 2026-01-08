import { useField } from "formik";
import TextField from "@mui/material/TextField";

const Input = () => {
  const [field] = useField("todo");
  return <TextField {...field} label="ToDo" size="medium" />;
};

export default Input;
