import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { dataMenu } from "./data";
import "./App.css";
import { ThemeContext, themes } from "./components/themeContext";

function App() {
  const theme = useState(themes.white);
  const [currentTheme] = theme;

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <div
          className="app"
          style={{ background: currentTheme.backgroundColor }}
        >
          <Header dataMenu={dataMenu} />
          <main>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Main />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
