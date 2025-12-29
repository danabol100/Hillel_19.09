function CleanButton({ onClick }) {
  return (
    <button className="btn btn-danger mb-3 mt-3" onClick={onClick}>
      Очистити
    </button>
  );
}

export default CleanButton;
