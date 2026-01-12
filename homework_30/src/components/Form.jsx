import { fetchUsers } from "../API/usersApi";
const Form = () => {
  const handleClick = (e) => {
    e.preventDefault();
    fetchUsers();
  };
  return (
    <form action="submit" className="d-flex mb-2">
      <div className="https">https://.mockapi.io/</div>
      <input
        className="form-control w-100"
        type="text"
        placeholder="UserData"
        value="usersData/"
      />
      <button onClick={handleClick} className="btn btn-primary">
        request
      </button>
    </form>
  );
};
export default Form;
