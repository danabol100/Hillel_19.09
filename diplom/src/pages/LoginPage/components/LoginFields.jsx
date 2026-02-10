import { TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

const LoginFields = ({ values, errors, touched, handleChange, handleBlur }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <TextField
        name="login"
        label="Login"
        fullWidth
        value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.login && Boolean(errors.login)}
        helperText={touched.login && errors.login}
      />

      <TextField
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        fullWidth
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default LoginFields;
