import ClearButton from "./ClearButton";
import Form from "./Form";
import Field from "./Field";
import { Container } from "@mui/material";

const Swapi = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Form />
      <Field />
      <ClearButton />
    </Container>
  );
};
export default Swapi;
