import { Box } from "@mui/material";
import { logoStyles } from "../styles";

const Logo = () => {
  return (
    <Box sx={logoStyles.wrapper}>
      <Box
        component="img"
        src="/rozetka-logo.svg"
        alt="Logo"
        sx={logoStyles.image}
      />
    </Box>
  );
};

export default Logo;
