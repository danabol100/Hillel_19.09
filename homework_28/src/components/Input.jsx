import { useField } from "formik";
import TextField from "@mui/material/TextField";

const Input = (props) => {
  const { name } = props;
  const [field, meta] = useField(name);
  return (
    <>
      <TextField
        {...field}
        label="ToDo"
        size="medium"
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </>
  );
};

export default Input;
