import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";
const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgba(68, 178, 111, 1)" }}>
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
