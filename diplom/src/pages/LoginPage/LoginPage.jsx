import { Box, Container } from "@mui/material";
import LoginForm from "./components/LoginForm";
import { loginPageStyles } from "./styles";

const LoginPage = () => {
  return (
    <Box sx={loginPageStyles.pageWrapper}>
      <Container maxWidth="lg" sx={loginPageStyles.container}>
        <Box sx={loginPageStyles.loginBox}>
          <LoginForm />
        </Box>
      </Container>
    </Box>
  );
};
export default LoginPage;
