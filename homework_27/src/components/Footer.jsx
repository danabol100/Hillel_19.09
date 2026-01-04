import { useContext } from "react";
import { ThemeContext } from "./themeContext";
function Footer() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <h3 style={{ color: theme.color }}>Footer</h3>
    </div>
  );
}
export default Footer;
