export const validate = (values) => {
  const errors = {};
  if (values.todo.length < 5) {
    errors.todo = "Мінімально 5 символів";
  }
  return errors;
};
