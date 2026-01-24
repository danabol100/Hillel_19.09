import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ bgcolor: "#222" }}>
      <Toolbar component="nav">
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            color={location.pathname === "/" ? "success" : "inherit"}
          >
            Resume
          </Button>

          <Button
            component={RouterLink}
            to="/swapi"
            color={location.pathname === "/swapi" ? "success" : "inherit"}
          >
            SWAPI
          </Button>

          <Button
            component={RouterLink}
            to="/todo"
            color={location.pathname === "/todo" ? "success" : "inherit"}
          >
            ToDo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
