import { Button } from "@mui/material";
import { logout } from "../../../api/api";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      onLogout();
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };

  return (
    <Button onClick={handleLogout} color="error" variant="contained">
      Logout
    </Button>
  );
};

export default LogoutButton;
