import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/todoSlice";
import Input from "./Input";
import ButtonAdd from "./ButtonAdd";
import { validate } from "../helpers/validation";

const TodoForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (!values.todo.trim()) return;
    dispatch(addItem(values.todo));

    resetForm();
  };

  return (
    <Formik
      initialValues={{ todo: "" }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form>
        <Input name="todo" />
        <ButtonAdd />
      </Form>
    </Formik>
  );
};

export default TodoForm;
