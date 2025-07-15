import { useState } from "react";
import "./App.css";

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
    //  co
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
      {/* Decorative background X and O's */}
      <div className="background-decor">
        <span className="decor-x" style={{top: '8%', left: '10%'}}>X</span>
        <span className="decor-o" style={{top: '20%', left: '70%'}}>O</span>
        <span className="decor-x" style={{top: '60%', left: '80%', fontSize: '7vw', transform: 'rotate(10deg)'}}>X</span>
        <span className="decor-o" style={{top: '75%', left: '15%', fontSize: '9vw', transform: 'rotate(-8deg)'}}>O</span>
        <span className="decor-x" style={{top: '5%', left: '85%', fontSize: '6vw', transform: 'rotate(30deg)'}}>X</span>
        <span className="decor-o" style={{top: '85%', left: '60%', fontSize: '8vw', transform: 'rotate(25deg)'}}>O</span>
      </div>
      <div className="game-container">
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
