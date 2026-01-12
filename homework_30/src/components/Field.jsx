import { useSelector } from "react-redux";
const Field = () => {
  const users = useSelector((state) => state.users.items || []);

  return (
    <div className="field">
      <div className="results">Results:</div>
      {users.map((user) => (
        <div key={user.id}>
          <p>UserName: {user.name}</p>
          <p>UserGroup: {user.group}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
};
export default Field;
