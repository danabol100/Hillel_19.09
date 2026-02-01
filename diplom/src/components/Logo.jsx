import { Box } from "@mui/material";
import { logoStyles } from "../styles/styles";

const Logo = () => {
  return (
    <Box sx={logoStyles.wrapper}>
      <Box
        component="img"
        src="/logo-product.svg"
        alt="Logo"
        sx={logoStyles.image}
      />
    </Box>
  );
};

export default Logo;
