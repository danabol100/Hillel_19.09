import { Box, Button } from "@mui/material";
import { Formik } from "formik";
import { loginValidationSchema } from "../../../helpers/validation";
import { formStyles } from "../styles";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import LoginFields from "./LoginFields";
import credentials from "../constants";

const checkLogin = (values) => {
  return (
    values.username === credentials.username &&
    values.password === credentials.password
  );
};

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: "admin", password: "1234" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        if (checkLogin(values)) {
          document.activeElement?.blur();
          navigate("/products");
        } else {
          setErrors({ password: "Invalid username or password" });
        }
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={formStyles.root}
        >
          <Logo />
          <LoginFields {...formik} />

          <Button type="submit" variant="contained" color="success">
            Login
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default LoginForm;
