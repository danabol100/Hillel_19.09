import Items from "./Items";

function Menu({ dataMenu }) {
  return (
    <ul className="d-flex gap-4">
      {dataMenu.map((item) => (
        <Items key={item.id} title={item.title} href={item.href} />
      ))}
    </ul>
  );
}
export default Menu;
