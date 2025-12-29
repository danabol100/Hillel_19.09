import { dataItems } from "../data";

function Item({ src, vote, onClick }) {
  return (
    <li className="list-group-item d-flex flex-row">
      <img src={src} alt="" onClick={onClick} style={{ width: 60 }} />
      <p>{vote}</p>
    </li>
  );
}
export default Item;
