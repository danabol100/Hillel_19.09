import { useSelector } from "react-redux";
const Field = () => {
  const users = useSelector((state) => state.users.items || []);

  return (
    <div className="field">
      <h3>Results:</h3>
      <div className="results">
        <pre className="text">{users}</pre>
      </div>
    </div>
  );
};
export default Field;
