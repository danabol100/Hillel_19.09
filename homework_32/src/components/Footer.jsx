import { AppBar, Toolbar, Box } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#222" }}>
      <Toolbar component="nav">
        <Box sx={{ display: "flex", gap: 2 }}></Box>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
