import Menu from "./Menu";
import ChangeThemeButton from "./ChangeThemeButton";

function Header({ dataMenu }) {
  return (
    <header className="border p-3 align-content-center d-flex justify-content-between">
      <Menu dataMenu={dataMenu} />
      <ChangeThemeButton />
    </header>
  );
}
export default Header;
