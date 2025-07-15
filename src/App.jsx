import { useState } from "react";
import Header from "./Header";
import "./App.css";
import Player from "./component/Player";
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  let [player, setPlayer] = useState(true);
  const handleClick = (index) => {
    if (winner) return;
    let temp = [...squares];
    temp[index] == null ? (temp[index] = player ? "X" : "O") : "";
    setPlayer(!player);
    setSquares(temp);
    checkWinning(temp);
    console.log(squares);
  };
  const checkWinning = (data) => {
    const winPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winPositions.map((position) => {
      let [a, b, c] = position;
      if (data[a] && data[a] === data[b] && data[b] === data[c]) {
        setWinner(data[a]);
      }
    });
  };
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
  };
  return (
    <>
    <Header />
      <div className="game-container">
        <ol className="player-list">  
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        {winner && <h1>{winner + " Qalibdir"}</h1>}
        <section className="box-container">
          {squares.map((a, b) => (
            <div key={b} className="box" onClick={() => handleClick(b)}>
              <span>{a}</span>
            </div>
          ))}
        </section>
        <button className="resetBtn" onClick={resetGame}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
