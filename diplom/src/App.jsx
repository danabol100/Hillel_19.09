import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
