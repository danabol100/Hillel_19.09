import { Form } from "formik";
import Input from "./Input";
import Button from "@mui/material/Button";

const TodoForm = () => {
  return (
    <Form>
      <Input name="todo" type="text" />
      <Button
        variant="contained"
        color="success"
        type="submit"
        sx={{ height: 56 }}
      >
        Add
      </Button>
    </Form>
  );
};
export default TodoForm;
