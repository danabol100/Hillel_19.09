import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const NotFound = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div style={{ color: theme.color }}>
      <h1>404</h1>
      <h2>Сторінку не знайдено</h2>
      <NavLink className="btn btn-success" to="/">
        На Головну
      </NavLink>
    </div>
  );
};

export default NotFound;
