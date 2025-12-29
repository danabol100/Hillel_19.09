function Button({ onClick }) {
  return (
    <button className="btn btn-success mt-5" onClick={onClick}>
      Show Results
    </button>
  );
}

export default Button;
