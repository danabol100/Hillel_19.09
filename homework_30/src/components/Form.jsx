import { fetchUsers } from "../API/usersApi";
import { useState } from "react";
const Form = () => {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    fetchUsers(text);
    setText("");
  };

  return (
    <>
      <form action="submit" className="d-flex mb-2">
        <div className="https">https://www.swapi.tech/api/</div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control w-100"
          type="text"
          placeholder="people/1/"
        />
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          request
        </button>
      </form>
      <div className="list">
        <p>Need a hint?</p>
        <button className="item" onClick={() => setText("people/1/")}>
          people/1/
        </button>
        <button className="item" onClick={() => setText("planets/3/")}>
          planets/3/
        </button>
        <button className="item" onClick={() => setText("starships/9/")}>
          starships/9/
        </button>
      </div>
    </>
  );
};
export default Form;
