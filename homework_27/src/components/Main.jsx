import { useContext } from "react";
import { ThemeContext } from "./themeContext";
function Main() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <h1 style={{ color: theme.color }}>ToDo</h1>
      <form>
        <input type="text" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Main;
