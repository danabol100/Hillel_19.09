import { useContext } from "react";
import { ThemeContext, themes } from "./themeContext";
import { NavLink } from "react-router-dom";

function Items({ href, title }) {
  const [theme] = useContext(ThemeContext);
  return (
    <li>
      <NavLink to={href} style={{ color: theme.color }}>
        {title}
      </NavLink>
    </li>
  );
}

export default Items;
