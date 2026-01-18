import { useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../redux/slices/usersSlices";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getData(text));
    setText("");
  };

  return (
    <>
      <form action="submit" onClick={handleClick} className="d-flex mb-2">
        <div className="https">https://www.swapi.tech/api/</div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control w-100"
          type="text"
          placeholder="people/1/"
        />
        <button type="submit" className="btn btn-primary">
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
