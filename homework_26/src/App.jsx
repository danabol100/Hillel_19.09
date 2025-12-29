import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { dataItems } from "./data";
import Item from "./components/Item";
import Button from "./components/Button";
import Winner from "./components/Winner";
import CleanButton from "./components/CleanButton";

function App() {
  const [data, setVotes] = useState(() => {
    const saved = localStorage.getItem("data");
    if (saved) {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : dataItems;
    }
    return dataItems;
  });
  const [winner, setWinner] = useState(() => {
    const saved = localStorage.getItem("winner");
    return saved ? JSON.parse(saved) : null;
  });

  function saveToStorage(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }

  function addVotes(indexToUpdate) {
    setVotes((prev) => {
      const newData = prev.map((item, index) =>
        index === indexToUpdate ? { ...item, vote: item.vote + 1 } : item
      );
      saveToStorage(newData);
      return newData;
    });
  }
  function showResults() {
    const currentWinner = data.reduce((max, item) =>
      item.vote > max.vote ? item : max
    );
    setWinner(currentWinner);
    localStorage.setItem("winner", JSON.stringify(currentWinner));
  }
  function cleanStorage() {
    const cleanVotes = data.map((item) => ({ ...item, vote: 0 }));
    setVotes(cleanVotes);
    localStorage.setItem("data", JSON.stringify(cleanVotes));
    setWinner(null);
    localStorage.removeItem("winner");
  }
  return (
    <div className="container text-center mt-5 mb-5 container1">
      <h1>Голосування за найкращий смайлик</h1>
      <ul className="list-group d-flex flex-row gap-3 justify-content-between">
        {data.map((item, index) => (
          <Item
            key={item.src}
            src={item.src}
            vote={item.vote}
            onClick={() => addVotes(index)}
          />
        ))}
      </ul>
      <Button onClick={showResults} />
      <CleanButton onClick={cleanStorage} />
      {winner && winner.vote > 0 && (
        <Winner src={winner.src} vote={winner.vote} />
      )}
    </div>
  );
}

export default App;
