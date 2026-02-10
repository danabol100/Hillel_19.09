import { TextField, Button, Box } from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../../../api/api";
import Logo from "./Logo";
import { login } from "../../../api/api";

const LoginForm = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    getProfile()
      .then(() => {
        navigate("/products");
      })
      .catch(() => {
        setCheckingAuth(false);
      });
  }, [navigate]);

  if (checkingAuth) {
    return null;
  }

  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        console.log("FORM SUBMITTED", values);

        try {
          const data = await login(values.login, values.password);
          console.log("Server response:", data);

          if (data.success) {
            document.activeElement.blur();
            navigate("/products");
          } else {
            setErrors({ submit: data.message });
          }
        } catch (error) {
          setErrors({ submit: "server error" });
          console.error("Error:", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: 400, margin: "0 auto" }}
        >
          <Logo />

          <Box mb={2}>
            <TextField
              name="login"
              label="Login"
              fullWidth
              value={values.login}
              onChange={handleChange}
              error={touched.login && Boolean(errors.login)}
              helperText={touched.login && errors.login}
            />
          </Box>

          <Box mb={2}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
          </Box>

          <Button type="submit" variant="contained" color="success" fullWidth>
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
