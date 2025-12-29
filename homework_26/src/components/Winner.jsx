function Winner({ src, vote }) {
  return (
    <div>
      <h3>Переможець</h3>
      <img src={src} alt="" style={{ width: 60 }} />
      <p>{vote} Votes</p>
    </div>
  );
}

export default Winner;
