import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Todo from "./components/Todo";
import Swapi from "./components/Swapi";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 4,
          }}
        >
          <Container maxWidth="md">
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/swapi" element={<Swapi />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </Container>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
