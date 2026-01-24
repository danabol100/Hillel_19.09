import { render, screen, fireEvent } from "@testing-library/react";
import { Formik } from "formik";
import TodoForm from "./TodoForm";

test("у поле для тексту можна вводити букви та цифри", () => {
  render(
    <Formik initialValues={{ todo: "" }} onSubmit={() => {}}>
      <TodoForm />
    </Formik>,
  );

  const input = screen.getByRole("textbox", { name: /todo/i });

  fireEvent.change(input, { target: { value: "Pere007" } });

  expect(input.value).toBe("Pere007");
});

test("натискання на кнопку Add без тексту виводить помилку", async () => {
  render(
    <Formik
      initialValues={{ todo: "" }}
      onSubmit={() => {}}
      validate={(values) => {
        const errors = {};
        if (!values.todo) {
          errors.todo = "Required";
        }
        return errors;
      }}
    >
      <TodoForm />
    </Formik>,
  );

  const button = screen.getByRole("button", { name: /add/i });

  fireEvent.click(button);

  const errorMessage = await screen.findByText("Required");

  expect(errorMessage).toBeInTheDocument();
});
