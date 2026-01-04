import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import florida from "../assets/florida.png";
function Contact() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <div style={{ color: theme.color }}>
        <h3>Contact</h3>
        <p>United State Florida</p>
      </div>
      <img src={florida} alt="" style={{ width: 600 }} />
    </div>
  );
}

export default Contact;
