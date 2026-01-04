import { useContext } from "react";
import { ThemeContext, themes } from "./themeContext";

function ChangeThemeButton() {
  const [theme, setTheme] = useContext(ThemeContext);
  const handleClick = () => {
    setTheme(theme.backgroundColor === "black" ? themes.white : themes.dark);
  };
  return <button onClick={handleClick}>Change Theme</button>;
}
export default ChangeThemeButton;
